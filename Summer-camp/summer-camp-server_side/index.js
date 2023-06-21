const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const corsOptions = {
    origin: 'https://little-champ-d8d40.web.app'
};
const stripe = require("stripe")(process.env.PAYMENT_SECRECT_KEY);
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());

const verifyJwt = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access' });
    }

    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: true, message: 'access denied' });
        }
        req.decoded = decoded;
        next();
    })

}

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vv6xnmz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const userDB = client.db("SummerChampDB").collection("users");
        const classesDB = client.db("SummerChampDB").collection("classes");
        const studentCartDB = client.db("SummerChampDB").collection("classCart");
        const paymentDB = client.db("SummerChampDB").collection("payment");
        const instructorDB = client.db("SummerChampDB").collection("instructors");
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email };
            const user = await userDB.findOne(query);
            if (user?.role !== 'admin') {
                return res.status(403).send({ error: true, message: 'You are not an admin' });
            }
            next();
        }
        const verifyInstructor = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email };
            const user = await userDB.findOne(query);
            if (user?.role !== 'instructor') {
                return res.status(403).send({ error: true, message: 'You are not an instructor' });
            }
            next();
        }
        const verifyStudent = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email };
            const user = await userDB.findOne(query);
            if (user?.role !== 'student') {
                return res.status(403).send({ error: true, message: 'You are not a student' });
            }
            next();
        }
        app.get('/payment', verifyJwt, verifyStudent, async (req, res) => {
            const email = req.query.email;
            const query = { email: email };
            const doc = {
                sort: {
                    date: -1
                }
            }
            const result = await paymentDB.find(query, doc).toArray();
            res.send(result);
        })
        app.get('/instructors', async (req, res) => {
            const result = await instructorDB.find().toArray();
            res.send(result);
        })
        app.get("/enrolledClass", verifyJwt, verifyStudent, async (req, res) => {
            const email = req.query.email;
            const query = { email: email };
            const insertItem = await paymentDB.find(query).toArray();
            if (insertItem && insertItem.length > 0) {
                const classIds = insertItem.map(item => new ObjectId(item.classId));

                const classes = await classesDB.find({ _id: { $in: classIds } }).toArray();

                res.send(classes);
            }
            else {
                res.send([]);
            }
        })
        app.delete("/selectedClass/:id", verifyJwt, verifyStudent, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await studentCartDB.deleteOne(query);
            res.send(result);
        })
        app.post("/payment/:id", verifyJwt, verifyStudent, async (req, res) => {
            const paymentDetail = req.body;
            console.log(paymentDetail.classId);
            const id = req.params.id;
            const insertItem = await paymentDB.insertOne(paymentDetail);
            const query = { _id: new ObjectId(id) };
            const deleteCartItem = await studentCartDB.deleteOne(query);
            const filter = { _id: new ObjectId(paymentDetail.classId) }
            console.log("filter:", filter);
            const updateDoc = {
                $inc: {
                    totalStudent: 1, availableSeats: -1
                }
            }
            console.log("updateDoc:", updateDoc);
            const classUpdateResult = await classesDB.updateOne(filter, updateDoc);
            console.log("classUpdateResult:", classUpdateResult);

            res.send({ insertItem, deleteCartItem, classUpdateResult });
        });
        app.post('/create-payment-intent', verifyJwt, async (req, res) => {
            const { price } = req.body;
            const amount = parseInt(price * 100);
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: 'usd',
                payment_method_types: ['card']
            });
            res.send({
                clientSecrect: paymentIntent.client_secret
            })
        })
        app.get('/cartClass/:id', verifyJwt, verifyStudent, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await studentCartDB.findOne(query);
            res.send(result);
        })
        app.get('/cartClass', verifyJwt, verifyStudent, async (req, res) => {
            const email = req.query.email;
            const query = { userEmail: email };
            const result = await studentCartDB.find(query).toArray();
            res.send(result);
        })
        app.put('/studentCart', async (req, res) => {
            const cartData = req.body;
            const result = await studentCartDB.insertOne(cartData);
            res.send(result);
        })
        app.get('/approvedClass', verifyJwt, async (req, res) => {
            const query = { status: "approved" };
            const result = await classesDB.find(query).toArray();
            res.send(result);
        })
        app.post('/classes', verifyJwt, verifyInstructor, async (req, res) => {
            const classData = req.body;
            const result = await classesDB.insertOne(classData);
            res.send(result);
        })
        app.get('/classes/:email', verifyJwt, verifyInstructor, async (req, res) => {
            const email = req.params.email;
            const query = { instructorEmail: email };
            const result = await classesDB.find(query).toArray();
            res.send(result);
        })
        app.get('/users/validateRole/:email', verifyJwt, async (req, res) => {
            const email = req.params.email;
            if (req.decoded.email !== email) {
                return res.status(401).send({ error: true, message: 'unauthorized user access' });
            }
            const query = { email: email };
            const result = await userDB.findOne(query);
            res.send(result);
        })
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
            res.send({ token });
        })
        app.post('/users', async (req, res) => {
            const user = req.body;
            const query = { email: user?.email, name: user?.name };
            const existingUser = await userDB.findOne(query);
            if (existingUser.email === query.email) {
                return res.send("user is already there");
            }
            else {
                const result = await userDB.insertOne(user);
                return res.send(result);
            }
        });
        app.patch('/users/:id', verifyJwt, verifyAdmin, async (req, res) => {
            const role = req.body.role.toString();
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const update = {
                $set: {
                    role: role
                }
            };
            const result = await userDB.updateOne(query, update);
            res.send(result);
        })
        app.patch('/classes/:id', verifyJwt, verifyAdmin, async (req, res) => {
            const status = req.body.status.toString();
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const update = {
                $set: {
                    status: status,
                }
            };
            const result = await classesDB.updateOne(query, update);
            res.send(result);
        })
        app.patch("/classes/feedback/:id", verifyJwt, verifyAdmin, async (req, res) => {
            const feedback = req.body.feedback.toString();
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const update = {
                $set: {
                    feedback: feedback,
                }
            };
            const result = await classesDB.updateOne(query, update);
            res.send(result);
        })
        app.get('/users', verifyJwt, verifyAdmin, async (req, res) => {
            const result = await userDB.find().toArray();
            res.send(result);
        });
        app.get('/classes', verifyJwt, verifyAdmin, async (req, res) => {
            const result = await classesDB.find().toArray();
            res.send(result);
        })
        app.get('/popularClass', async (req, res) => {

            const pipeline = [{
                $addFields: {
                    totalStudentDigits: {
                        $strLenCP: { $toString: "$totalStudent" }
                    }
                }
            },
            {
                $sort: {

                    totalStudent: -1
                }
            },
            {
                $limit: 6
            },
            {
                $project: {
                    _id: 1,
                    availableSeats: 1,
                    classImage: 1,
                    className: 1,
                    instructorName: 1,
                    totalStudent: 1
                }
            }
            ];
            const result = await classesDB.aggregate(pipeline).toArray();
            res.send(result);
        });
        app.get("/popularInstructor", async (req, res) => {
            const pipeline =
                [
                    {
                        $addFields: {
                            totalStudentDigits: {
                                $strLenCP: { $toString: "$totalStudent" }
                            }
                        }
                    },
                    {
                        $sort: {
                            totalStudent: -1
                        }
                    },
                    {
                        $limit: 6
                    },
                    {
                        $lookup: {
                            from: "instructors",
                            localField: "instructorEmail",
                            foreignField: "Email",
                            as: "instructorData"
                        }
                    },
                    {
                        $unwind: "$instructorData"
                    },
                    {
                        $addFields: {
                            instructorImage: "$instructorData.Image"
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            instructorName: 1,
                            instructorEmail: 1,
                            className: 1,
                            instructorImage: 1
                        }
                    }
                ];
            const result = await classesDB.aggregate(pipeline).toArray();

            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('champ is sitting');
})

app.listen(port, () => {
    console.log(`Champ is sitting on port ${port}`);
})
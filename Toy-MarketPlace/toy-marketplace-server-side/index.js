const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vv6xnmz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        await client.connect();
        const herotoyzCollection = client.db('HeroToyZDB').collection('categoryToy');
        const heroalltoyzCollection = client.db('HeroToyZDB').collection('allToy');
        app.get("/toyCategory", async (req, res) => {
            const result = await herotoyzCollection.find().toArray();
            res.send(result);
        });
        app.get("/toyCategory/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const options = {
                projection: { picture: 1, name: 1, categoryname: 1, price: 1 }
            }
            const result = await herotoyzCollection.findOne(query, options);
            res.send(result);
        });
        app.get("/pageToyz", async (req, res) => {
            const page = parseInt(req.query.page) || 0;
            const limit = parseInt(req.query.limit) || 20;
            const skip = page * limit;
            const result = await heroalltoyzCollection.find().skip(skip).limit(limit).toArray();
            res.send(result);
        })
        app.get("/allToyz", async (req, res) => {
            const search = req.query?.category;
            let query = {};
            let option = {}
            if (search) {
                query = { categoryName: { $regex: search, $options: "i" } };
                option = {
                    // sort matched documents in descending order by rating
                    sort: { "price": -1 },

                };
            }

            const result = await heroalltoyzCollection.find(query, option).toArray();
            res.send(result)
        })
        app.get("/allToyz", async (req, res) => {
            const result = await heroalltoyzCollection.find().toArray();
            res.send(result)
        })
        app.delete("/allToyz/:id", async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const result = await heroalltoyzCollection.deleteOne(query);
            res.send(result);
        })
        app.get("/allToyz/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await heroalltoyzCollection.findOne(query);
            res.send(result);
        })
        app.post('/allToyz', async (req, res) => {
            const addToy = req.body;
            console.log(addToy);
            const result = await heroalltoyzCollection.insertOne(addToy);
            res.send(result);
        });
        app.put('/allToyz/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updateToy = req.body;
            const options = { upsert: true };
            const toy = {
                $set: {
                    sellerName: updateToy.name,
                    sellerEmail: updateToy.email,
                    picture: updateToy.img,
                    price: updateToy.price,
                    rating: updateToy.rating,
                    productName: updateToy.toyName,
                    categoryName: updateToy.toyCategory,
                    availableQuantity: updateToy.quantity
                }
            }
            const result = await heroalltoyzCollection.updateOne(filter, toy, options);
            res.send(result);
        })
        app.get('/totalToy', async (req, res) => {
            const result = await heroalltoyzCollection.estimatedDocumentCount();
            res.send({ totalToys: result })
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
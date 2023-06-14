import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../../hook/useTitle";

const AddToy = () => {

    const { user } = useContext(AuthContext);
    useTitle('addtoy')
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const img = form.url.value;
        const price = form.price.value;
        const email = user?.email;
        const toyName = form.toyName.value;
        const toyCategory = form.category.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const addToy = {
            sellerName: name,
            sellerEmail: email,
            picture: img,
            price: price,
            rating: rating,
            productName: toyName,
            categoryName: toyCategory,
            availableQuantity: quantity,
            detailDescription: detail
        }

        console.log(addToy);

        fetch('https://herotoyz-server.vercel.app/allToyz', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('toy has been added successfully')
                }
            })

    }

    return (
        <div>
            <h2 className='text-center text-3xl'>Add Toys to the Store </h2>
            <form onSubmit={handleAddToy} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture Url</span>
                        </label>
                        <input type="text" name="url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Category</span>
                        </label>
                        <input type="text" name="category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered input" name="detail" placeholder="detail" ></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;
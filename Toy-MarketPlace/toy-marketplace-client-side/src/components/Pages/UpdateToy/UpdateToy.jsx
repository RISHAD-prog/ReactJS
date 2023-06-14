import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hook/useTitle";

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('updateToy')
    const toy = useLoaderData();
    const { _id, sellerName, productName, categoryName, price, rating, availableQuantity, picture } = toy;
    const handleUpdateToy = event => {
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
        const addToy = {
            name,
            email,
            img,
            price,
            rating,
            toyName,
            toyCategory,
            quantity
        }

        console.log(addToy);

        fetch(`https://herotoyz-server.vercel.app/allToyz/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-3xl'>Add Toys to the Store </h2>
            <form onSubmit={handleUpdateToy} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={sellerName} name="name" className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture Url</span>
                        </label>
                        <input type="text" name="url" defaultValue={picture} className="input input-bordered" />
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
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" defaultValue={productName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={categoryName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={availableQuantity} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};


export default UpdateToy;
import { useLoaderData } from "react-router-dom";

const ShowToys = () => {
    const toyDetail = useLoaderData();
    const { picture, name, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription } = toyDetail;
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-2">Seller Name:{sellerName}</p>
                    <p className="py-2">Seller Email:{sellerEmail}</p>
                    <p className="py-2">Price : ${price}</p>
                    <p className="py-2">Ratings : {rating}</p>
                    <p className="py-2">Quantity : ${availableQuantity}</p>
                    <p className="py-3">{detailDescription}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ShowToys;
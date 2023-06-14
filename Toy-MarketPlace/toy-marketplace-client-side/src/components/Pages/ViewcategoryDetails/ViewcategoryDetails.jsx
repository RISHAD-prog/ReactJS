import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hook/useTitle";

const ViewcategoryDetails = () => {
    const specificToy = useLoaderData();
    useTitle('categoryDetails')
    const { picture, name, categoryname, price } = specificToy;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hello I am {name} from {categoryname}</h1>
                    <p>Today the price is : ${price}</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewcategoryDetails;
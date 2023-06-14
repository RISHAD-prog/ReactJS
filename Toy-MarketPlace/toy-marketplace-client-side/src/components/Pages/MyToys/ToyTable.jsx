import { Link } from "react-router-dom";

const ToyTable = ({ data, handleDelete }) => {
    const { _id, sellerName, productName, categoryName, price, availableQuantity, picture } = data;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{sellerName}</td>
            <td>
                {categoryName}
            </td>
            <td>ToyName: {productName}</td>
            <td>price: ${price}</td>
            <td>Quantity: {availableQuantity}</td>
            <th>
                <button className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md"><Link to={`/updateToy/${_id}`} >Update Toy</Link></button>
            </th>
        </tr>
    );
};

export default ToyTable;
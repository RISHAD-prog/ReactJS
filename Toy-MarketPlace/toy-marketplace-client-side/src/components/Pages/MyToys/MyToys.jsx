import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import ToyTable from "./ToyTable";
import useTitle from "../../../hook/useTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [userdata, setUserdata] = useState([]);
    useTitle('userToy')
    console.log(user?.email);
    useEffect(() => {
        fetch('https://herotoyz-server.vercel.app/allToyz')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const remaining = data.filter(ud => user?.email === ud.sellerEmail);
                    setUserdata(remaining);
                }

            })
    }, [])
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://herotoyz-server.vercel.app/allToyz/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = data.filter(dt => dt._id !== id);
                        setUserdata(remaining);
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table  w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Toy Picture</th>
                        <th>Seller Name</th>
                        <th>Sub-Category</th>
                        <th>Name of Toy </th>
                        <th>Price </th>
                        <th>Availability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map(data => <ToyTable
                            key={data._id}
                            data={data}
                            handleDelete={handleDelete}
                        >

                        </ToyTable>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyToys;
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import TableData from "./TableData";
import useTitle from "../../../hook/useTitle";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const { totalToys } = useLoaderData();
    const totalPages = Math.ceil(totalToys / itemsPerPage);
    useTitle('toy')
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://herotoyz-server.vercel.app/pageToyz?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setToys(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage]);
    const options = [5, 10, 15];
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }
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
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }
    const handleSearch = event => {
        event.preventDefault();
        const search = event.target.search.value;
        async function fetchData() {
            const url = `https://herotoyz-server.vercel.app/allToyz?category=${search}`;
            const response = await fetch(url);
            const data = await response.json();
            setToys(data)
        }
        fetchData();
        console.log(event.target.search.value);
    }
    return (
        <div>
            <div className=" p-6 form-control mx-auto w-32">
                <form className="flex flex-row" onSubmit={handleSearch}>
                    <input type="text" placeholder="Search" name="search" className="input input-bordered" />
                    <button className="btn btn-outline btn-secondary" ><input type="submit" value="Search" ></input></button>
                </form>

            </div>
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
                            toys.map(toy => <TableData
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            >

                            </TableData>)
                        }
                    </tbody>
                </table>
                <div style={{ marginLeft: "35rem" }}>

                    <div className="btn-group">
                        {
                            pageNumbers.map(number => <button
                                key={number}
                                className={currentPage === number ? 'selected btn' : 'btn'}
                                onClick={() => setCurrentPage(number)}
                            >{number}</button>)
                        }
                        <select className="select select-primary max-w-xs" defaultValue="20" value={itemsPerPage} onChange={handleSelectChange}>
                            {options.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default AllToys;
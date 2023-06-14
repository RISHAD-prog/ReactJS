import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Categories = () => {
    const [toyCategory, setToycategory] = useState([]);
    const [selectedtoy, setSelectedtoy] = useState([]);
    console.log(toyCategory);
    console.log(selectedtoy);
    const handleTabs = (index) => {
        const selectedTabValue = tabs[index].props['data-value'];
        const toys = toyCategory.filter(toy => toy.categoryname === selectedTabValue);
        console.log(toys);
        setSelectedtoy(toys);

    }

    useEffect(() => {
        fetch('https://herotoyz-server.vercel.app/toyCategory')
            .then(res => res.json())
            .then(data => {
                setToycategory(data);
            })
    }, [])

    const tabs = [
        <Tab key="Avengers" data-value="Avengers">Avengers</Tab>,
        <Tab key="Star Wars" data-value="Star Wars">Star Wars</Tab>,
        <Tab key="X-Men" data-value="X-Men">X-Men</Tab>,
        <Tab key="Transformers" data-value="Transformers">Transformers</Tab>,
    ];
    return (
        <div >
            <div className='text-center mt-6 px-72' >
                <h1 className='text-6xl text-pink-500 '>Categories Available now !!</h1>
                <p className='text-xl' >Shop from the latest categories that has been available. Grab your favorite heros now so that you can get the product before the stock out!!</p>
            </div>


            <Tabs onSelect={handleTabs} className='mb-44 mt-3'>

                <TabList>
                    {tabs}
                </TabList>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4' >
                    {
                        selectedtoy.map(toy => <div key={toy._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className='w-full h-96 ' ><img src={toy.picture} alt={toy.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toy.name}</h2>
                                <p>Price: {toy.price}</p>
                                <p>Ratings: {toy.rating}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-secondary"> <Link to={`/categoryDetails/${toy._id}`} >View Details</Link></button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>

            </Tabs>
        </div>
    );
};

export default Categories;
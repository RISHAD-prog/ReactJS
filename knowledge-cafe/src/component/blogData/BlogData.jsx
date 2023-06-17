import React, { useEffect, useState } from 'react';
import Blog from '../blogs/Blog';
import './BlogData.css';
import Reading_Details from '../reading_details/Reading_Details';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Time_needed from '../time_spent/Time_needed';
import QABlog from '../q&ablog/QABlog';

const BlogData = () => {
    const [blogdata, setblogData] = useState([]);
    const [bookmarkItem, setBookmarkItem] = useState([]);
    const [readtime, setReadtime] = useState([]);
    useEffect(() => {
        fetch("fakedb.json")
            .then(res => res.json())
            .then(data => setblogData(data))
    }, [])
    const bookMark = (items) => {
        let newitem = [];
        const exist = bookmarkItem.find(blog => blog.author_name === items.author_name);
        if (exist) {
            toast.info("This blog is already Exist!");
            newitem = [...bookmarkItem, items];
        }
        else {
            newitem = [...bookmarkItem, items];
        }
        setBookmarkItem(newitem);
    }
    const read_time = (values) => {
        let newObject = [...readtime, values];
        setReadtime(newObject);
    }
    return (
        <div className='blogdata'>
            <div>
                {
                    blogdata.map(blog =>
                        <Blog
                            BookMark={bookMark}
                            Blog={blog}
                            key={blog.id}
                            Readtime={read_time}
                        ></Blog>

                    )
                }
                <QABlog></QABlog>
            </div>
            <div className='bookMark'>
                <ToastContainer></ToastContainer>

                <Time_needed
                    Time={readtime}
                ></Time_needed>
                <Reading_Details
                    Item={bookmarkItem}
                >
                </Reading_Details>

            </div>


        </div>
    );
};

export default BlogData;
import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    const { cover_img, author_img, author_name, publish_time, read_time, blog_Title } = props.Blog;
    const BookMark = props.BookMark;
    const Readtime = props.Readtime;
    return (
        <div className='blog-header'>
            <img src={cover_img} className='cover-img' alt="blog Cover" />
            <div className='blogger-info'>
                <div className='blogger' >
                    <img src={author_img} alt="person" />
                    <div style={{ marginLeft: "6%" }}>
                        <h3 style={{ marginBottom: "0%" }}>{author_name}</h3>
                        <p style={{ marginTop: "2%" }}>{publish_time}</p>
                    </div>
                </div>
                <div className='saving-info'>
                    <p>{read_time}   min read</p>
                    <button onClick={() => BookMark(props.Blog)} style={{ marginLeft: "20px", height: "40px", marginTop: "10px" }}><FontAwesomeIcon icon={faStar} /></button>
                </div>
            </div>
            <h1>{blog_Title}</h1>
            <p>#{props.Blog.stage[0]}   #{props.Blog.stage[1]}</p>
            <button onClick={() => Readtime(props.Blog)}>Mark as read</button>
            <br /><br /><br />
            <hr />
        </div>
    );
};

export default Blog;
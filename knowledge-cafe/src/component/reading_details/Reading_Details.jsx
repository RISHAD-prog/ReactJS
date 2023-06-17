import React from 'react';
import "./Reading_Details.css"


const Reading_Details = (props) => {

    return (

        <div className='reading_details'>
            <p> Bookmarked Blogs:{props.Item.length} </p>
            <ol>
                {
                    props.Item.map(title =>
                        <li><p >{title.blog_Title}</p></li>
                    )
                }

            </ol>
        </div>

    );
};

export default Reading_Details;
import React from 'react';

const ResInfo = () => {
    return (
        <div className='row row-cols-1 row-cols-lg-2'  >
            <div className='col' >
                <img className='rounded ms-5' src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5JTIwY29va2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className='col p-5'>
                <p><small className='text-warning' >who we are</small></p>
                <h1 className='fs-1' >One thousand flavors in one place</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam earum tempore, illo iusto corrupti velit vitae quae laboriosam vel suscipit, veniam voluptas debitis quod deserunt laudantium, recusandae omnis praesentium.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum cumque mollitia ullam in maiores harum aliquam vel atque quam?
                </p>
            </div>
        </div>
    );
};

export default ResInfo;
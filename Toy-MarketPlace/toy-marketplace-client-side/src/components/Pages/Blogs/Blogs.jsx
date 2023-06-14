import useTitle from "../../../hook/useTitle";

const Blogs = () => {
    useTitle('blogs')
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p className="py-6">Ans:An access token is a credential that is used to authenticate and authorize a user access to protected resources. It is typically short-lived and is issued by an authentication server upon successful authentication.
                        A refresh token is a credential that is used to obtain a new access token when the current access token expires. It is typically long-lived and is issued alongside the access token during the authentication process.
                        Access tokens are used to access protected resources, while refresh tokens are used to obtain new access tokens without requiring the user to reauthenticate.
                        On the client-side, access tokens are usually stored in memory or in a client-side storage mechanism for example: browser local storage or session storage. Refresh tokens should be stored securely, such as in an HTTP-only cookie or a secure storage mechanism.</p>
                    <p className="py-6">Compare SQL and NoSQL databases?</p>
                    <p>Ans:SQL full form is Structured Query Language databases are relational databases that store data in structured tables with predefined schemas. They use SQL for querying and managing data. Examples include MySQL, PostgreSQL, and Oracle.
                        NoSQL (Not Only SQL) databases are non-relational databases that store data in various formats, such as key-value pairs, documents, graphs, or wide-column stores. They provide flexible schemas and scalability. Examples include MongoDB, CouchDB, and Redis.
                        SQL databases offer strong consistency, support complex joins, and are suitable for structured data and complex relationships. NoSQL databases offer scalability, high performance, and are suitable for unstructured or semi-structured data, and flexible schemas.</p>
                    <p>What is express js? What is Nest JS ?</p>
                    <p>ans:Express.js is a fast and minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and utilities. It is highly extensible, allowing developers to add middleware for handling various aspects of the request-response cycle.Nest JS is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and takes advantage of TypeScripts features like decorators, dependency injection, and strong typing. Nest JS follows the modular architecture pattern and provides a powerful CLI (Command Line Interface) for generating boilerplate code.</p>
                    <p className="py-6" >What is MongoDB aggregate and how does it work?</p>
                    <p>MongoDB Aggregate is a powerful aggregation framework provided by MongoDB for performing data aggregation operations, such as grouping, filtering, sorting, and transforming data in the database.
                        It allows you to process and analyze data within the database rather than retrieving the entire dataset and performing computations on the client-side.
                        The MongoDB Aggregate framework uses a pipeline concept where you can chain multiple stages together to perform complex data transformations and aggregations.
                        Each stage in the pipeline represents a specific operation, such as $match for filtering documents, $group for grouping documents, $sort for sorting, etc.
                        The aggregation pipeline allows you to combine multiple stages to achieve the desired data transformation and aggregation results.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
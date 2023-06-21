import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mx-96 text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button className="btn btn-outline btn-success" > <Link to="/" > Go back Home</Link> </button>
        </div>
    );
};

export default ErrorPage;
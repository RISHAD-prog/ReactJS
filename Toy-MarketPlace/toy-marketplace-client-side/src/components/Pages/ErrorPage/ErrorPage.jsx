import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className=" text-center" >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img className="mx-auto" src="https://cdn.dribbble.com/users/932640/screenshots/2470471/media/ace34975cf57de14d50c287be99b6f95.gif" alt="" />
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to="/" >Go Back Home</Link></button>
        </div>
    );
}
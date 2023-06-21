
import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularClassFeed from "../PopularClassFeed/PopularClassFeed";
import PopularInstructorFeed from "../PopularInstructorFeed/PopularInstructorFeed";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div className=" py-44 px-40" >
                <PopularClassFeed></PopularClassFeed>
            </div>
            <div className="py-44 px-40" >
                <PopularInstructorFeed></PopularInstructorFeed>
            </div>
            <div className=" py-44 px-40" >
                <About></About>
            </div>
        </div>
    );
};

export default Home;
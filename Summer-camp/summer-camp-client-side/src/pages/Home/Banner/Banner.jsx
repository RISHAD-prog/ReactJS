import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"
import moment from "moment/moment";
import { useEffect } from "react";
import { useState } from "react";
import 'animate.css';
import Slider from "react-slick";
const Banner = () => {
    const countdownFrom = moment('2023-08-07 23:59:00');
    const [countdownDuration, setCountdownDuration] = useState(moment.duration(countdownFrom.diff(moment())));

    useEffect(() => {
        const timer = setInterval(() => {
            const newDuration = moment.duration(countdownDuration.asSeconds() - 1, 'seconds');
            if (newDuration.asSeconds() <= 0) {
                clearInterval(timer);
            }
            setCountdownDuration(newDuration);
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [countdownDuration]);

    const days = countdownDuration.days();
    const hours = countdownDuration.hours();
    const minutes = countdownDuration.minutes();
    const seconds = countdownDuration.seconds();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <Slider {...settings}>
            <div className=" relative">
                <img src="https://i.ibb.co/phkVkDX/mi-pham-0-DPyb8t-Kf-I-unsplash.jpg" className="w-full " />
                <div className="  absolute insert-x-0 top-0 rounded-xl flex items-center w-full h-full  bg-gradient-to-r from-[#443f3f] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white text-center mx-auto space-y-7 " >
                        <h1 className="text-5xl font-bold" > WELCOME!! </h1>
                        <p className="mb-2 text-2xl" >Expolre new Summer Activities from SUMMER CAMP</p>
                        <p className="text-2xl font-mono" >STARTS IN:</p>
                        <div className=" ms-28" >

                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": days }}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": hours }}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": minutes }}></span>
                                    </span>
                                    minutes
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": seconds }}></span>
                                    </span>
                                    seconds
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="relative">
                <img src="https://i.ibb.co/DrtP5TY/pexels-kampus-production-8813527.jpg" className=" w-full " />
                <div className=" absolute insert-x-0 top-0  rounded-xl flex items-center w-full h-full  bg-gradient-to-r from-[rgb(46,41,41)] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white text-center mx-auto space-y-7 " >
                        <h1 className="text-5xl font-bold" > WELCOME!! </h1>
                        <p className="mb-2 text-2xl" >Expolre new Summer Activities from SUMMER CAMP</p>
                        <div className="flex mx-96" >
                            <button className="btn btn-outline btn-accent animate__animated animate__jackInTheBox">Latest Classes</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="z-0 relative">
                <img src="https://i.ibb.co/cxxWMrN/aaron-burden-Xy-F5-Gptg-R8-unsplash.jpg" className="w-full h-[340px] md:h-[540px] lg:h-[1015px] " />
                <div className="z-10 absolute insert-x-0 top-0  rounded-xl flex items-center w-full h-full  bg-gradient-to-r from-[rgb(62,61,61)] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white text-center mx-auto space-y-7 " >
                        <h1 className="text-5xl font-bold" > WELCOME!! </h1>
                        <p className="mb-2 text-2xl" >Expolre new Summer Activities from SUMMER CAMP</p>
                        <div className="flex ms-32" >
                            <button className="btn btn-primary text-xl mr-5">Discover More</button>
                            <button className="btn btn-outline btn-accent text-xl hover:btn-outline">Latest Classes</button>
                        </div>
                    </div>

                </div>
            </div>


        </Slider>



    );
};

export default Banner;
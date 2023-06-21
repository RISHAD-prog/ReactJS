import axios from "axios";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTile/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PopularClassFeed.css"
const PopularClassFeed = () => {
    const { data: popularClass = [] } = useQuery({
        queryKey: ['popularClass'],
        queryFn: async () => {
            const res = await axios.get('https://little-chams-server-side.vercel.app/popularClass');
            return res.data;
        }
    });
    console.log(popularClass);
    return (
        <div>
            <SectionTitle
                subHeading={"----Popular Instructor FEED----"}
                heading={"--POPULAR INSTRUCTORS UPDATES--"}
            ></SectionTitle>
            <div className="relative">
                <img
                    src="https://i.ibb.co/CsgL4wc/feliphe-schiarolli-hes6n-UC1-MVc-unsplash.jpg"
                    alt=""
                    className="object-cover w-full h-[650px]  absolute top-0 left-0 z-0"
                />
                <div className="relative z-10 ">
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ["-120%", 0, -500],
                            },
                            next: {
                                shadow: true,
                                translate: ["120%", 0, -500],
                            },
                        }}
                        modules={[EffectCreative]}
                        className="mySwiper2"
                    >
                        {popularClass.map((item) => (
                            <SwiperSlide key={item._id} className="flex justify-center items-center my-auto">
                                <div className="card w-96  bg-primary shadow-xl">
                                    <figure className="px-10 py-10 mt-2" >
                                        <img src={item.classImage} alt="" className="object-cover w-full h-[200px] rounded-xl" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Class Name:{item.className}
                                        </h2>
                                        <p>Total Student: {item.totalStudent}</p>
                                        <p>Seat available: {item.availableSeats}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Class</div>
                                            <div className="badge badge-outline">Popular</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PopularClassFeed;

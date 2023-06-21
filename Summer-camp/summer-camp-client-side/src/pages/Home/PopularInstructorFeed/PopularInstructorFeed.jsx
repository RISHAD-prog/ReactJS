import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./PopularInstructorFeed.css"
import { EffectCreative } from "swiper";
import SectionTitle from "../../../components/SectionTile/SectionTitle";
const PopularInstructorFeed = () => {
    const { data: popularInstructor = [] } = useQuery({
        queryKey: ['popularInstructor'],
        queryFn: async () => {
            const res = await axios.get('https://little-chams-server-side.vercel.app/popularInstructor');
            return res.data;
        }
    });
    console.log(popularInstructor);
    return (
        <div>
            <SectionTitle
                subHeading={"----Popular Instructor FEED----"}
                heading={"--POPULAR INSTRUCTORS UPDATES--"}
            ></SectionTitle>
            <div className="relative">
                <img
                    src="https://i.ibb.co/5K61JXX/mitch-rosen-g9-SNY0a-LMF0-unsplash.jpg"
                    alt=""
                    className="object-cover w-full  absolute top-0 left-0 z-0"
                />
                <div className="relative z-10 ">
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ["-125%", 0, -800],
                                rotate: [0, 0, -90],
                            },
                            next: {
                                shadow: true,
                                translate: ["125%", 0, -800],
                                rotate: [0, 0, 90],
                            },
                        }}
                        modules={[EffectCreative]}
                        className="mySwiper5"
                    >
                        {popularInstructor.map((item) => (
                            <SwiperSlide key={item._id} className="flex justify-center items-center mt-2">
                                <div className="card w-96  bg-primary shadow-xl">
                                    <figure className="px-10 py-10 mt-2" >
                                        <img src={item.instructorImage} alt="" className="object-cover w-full h-[200px] rounded-xl" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Name:{item.instructorName}
                                            <div className="badge badge-secondary">Best</div>
                                        </h2>
                                        <p>Class: {item.className}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Teacher</div>
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

export default PopularInstructorFeed;

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTile/SectionTitle";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "./About.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3" >
            <div>
                <SectionTitle
                    heading={'--about us--'}
                    subHeading={"WE ARE THE BEST SUMMER CAMP"}
                ></SectionTitle>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa quaerat ipsam labore, consequatur dolorem ipsum itaque a? </p>
                <button className="btn btn-outline btn-error mx-14"> Find Out More</button>
            </div>
            <div>
                <SectionTitle
                    subHeading={"Facilities"}
                ></SectionTitle>
                <ul className=" ms-20" >
                    <li className="flex items-center" > <FaCheckCircle></FaCheckCircle> Boys & Girls</li>
                    <li className="flex items-center" ><FaCheckCircle></FaCheckCircle>Age: 7-17</li>
                    <li className="flex items-center"><FaCheckCircle></FaCheckCircle>Team and Individual Sports</li>
                    <li className="flex items-center"><FaCheckCircle></FaCheckCircle>Performing and Creative arts</li>
                    <li className="flex items-center"><FaCheckCircle></FaCheckCircle>Special Events and Trip</li>
                    <li className="flex items-center"><FaCheckCircle></FaCheckCircle>Professional Staffs</li>
                </ul>
            </div>
            <div>
                <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <motion.img src="https://i.ibb.co/Km0FDs7/myles-bloomfield-NLlk-Gs4-DGn-M-unsplash.jpg" whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.img src="https://i.ibb.co/2F2Spc0/natalya-ukolova-QB-Uc-2-Hai-E-unsplash.jpg" whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.img src="https://i.ibb.co/5YRwDT4/bernd-dittrich-d-TFAm1h-XUEc-unsplash.jpg" whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.img src="https://i.ibb.co/3NGgb9q/salah-regouane-c-Ke7dwf-GA4w-unsplash.jpg" whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default About;
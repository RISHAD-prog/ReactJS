
const Banner = () => {
    return (
        <div className="item my-8 relative" data-aos="fade-left" >
            <div className="carousel w-full ">
                <div id="item1" className="relative carousel-item w-full ">
                    <img src="./sumeet-b---WQ_E8gIcU-unsplash.jpg" className="w-full object-cover max-h-96" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]" >
                        <div className="space-y-4 pl-12 pr-44 w-2/3" >
                            <h1 className=' text-purple-400 text-5xl font-bold mb-5' >Weclome to the <span className="text-emerald-400" > HeroToyZ!!</span></h1>
                            <p className='text-white text-xl ' >Heros Never Dies and everybody can be a hero. Buy some amazing toys and play with the heros.</p>
                            <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md mr-3" >Buy Now</button>
                            <button className="btn text-white  btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md" >Shop Tour</button>
                        </div>
                    </div>
                </div>
                <div id="item2" className="relative carousel-item w-full ">
                    <img src="./kin-li-sXrsif2dKqY-unsplash.jpg" className="w-full object-cover max-h-96" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]" >
                        <div className="space-y-4 pl-12 pr-44 w-2/3" >
                            <h1 className=' text-purple-400 text-5xl font-bold mb-5' >Weclome to the <span className="text-emerald-400" > HeroToyZ!!</span></h1>
                            <p className='text-white text-xl ' >See some amazing toys with HeroToyz. Buy some amazing toys and play with the heros.</p>
                            <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md mr-3" >Buy Now</button>
                            <button className="btn text-white  btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md" >Shop Tour</button>
                        </div>
                    </div>
                </div>
                <div id="item3" className="relative carousel-item w-full ">
                    <img src="./hannah-rodrigo-mf_3yZnC6ug-unsplash.jpg" className="w-full object-cover max-h-96" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]" >
                        <div className="space-y-4 pl-12 pr-44 w-2/3" >
                            <h1 className=' text-purple-400 text-5xl font-bold mb-5' >Weclome to the <span className="text-emerald-400" > HeroToyZ!!</span></h1>
                            <p className='text-white text-xl ' >Want to fly ? Fly with the super Hero. Buy some amazing toys and play with the heros.</p>
                            <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md mr-3" >Buy Now</button>
                            <button className="btn text-white  btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md" >Shop Tour</button>
                        </div>
                    </div>
                </div>
                <div id="item4" className="relative carousel-item w-full ">
                    <img src="./liao-je-wei--iesICUGk8Q-unsplash.jpg" className="w-full object-cover max-h-96" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]" >
                        <div className="space-y-4 pl-12 pr-44 w-2/3" >
                            <h1 className=' text-purple-400 text-5xl font-bold mb-5' >Weclome to the <span className="text-emerald-400" > HeroToyZ!!</span></h1>
                            <p className='text-white text-xl ' >Heros Never Dies and everybody can be a hero. Buy some amazing toys and play with the heros.</p>
                            <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md mr-3" >Buy Now</button>
                            <button className="btn text-white  btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md" >Shop Tour</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 bottom-0 left-0 flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;
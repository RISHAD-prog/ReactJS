
const Gallery = () => {
    return (
        <div className="my-20" >
            <h1 className="text-center text-6xl text-warning" >VISIT OUR Gallery!</h1>
            <p className="text-center mb-8 text-xl px-40" >Here , you can find out some amazing pictures and small potion of our store that is available. Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            <div className="carousel bg-base-100 w-full">
                <div id="slide1" className="grid gap-4 grid-cols-1 md:grid-cols-3  carousel-item relative w-full">
                    <div className="card w-96  shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                CAPTAIN AMERICA!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p> Fights for American ideals as one of the world mightiest heroes. </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">TOYS</div>
                                <div className="badge badge-outline">MARVEL</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1558680689-ce686c5e2fb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                SPIDERMAN!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>With great power comes great responsibility.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">TOYS</div>
                                <div className="badge badge-outline">MARVEL</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1623939012339-5b3dc8eca7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Astronaut!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>FLY OVER THE GALAXY AND GOING WITH A ROCKET?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">TOYS </div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="grid gap-4 grid-cols-1 md:grid-cols-3 carousel-item relative w-full">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1630453228219-13c0a4de0e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Leonardo!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Leonardo, nicknamed Leo, is the oldest brother and leader of the Ninja turtles, as well as the most disciplined and skilled</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">TOYS</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1589810634147-134606ed0950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Boba Fett!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>The ultimate bounty hunter and ruthless outlaw who roamed the Galactic wastes taking on dirty jobs for healthy rewards </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">TOYS</div>
                                <div className="badge badge-outline">STAR WARS</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1585669060258-2dc6a3976d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                STAR WARRIOR!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">TOYS</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="grid gap-4 grid-cols-1 md:grid-cols-3 carousel-item relative w-full">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Maul!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>We were both tools for greater powers?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">TOYS</div>
                                <div className="badge badge-outline">Star Wars</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Batman!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>I am Vengeance?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">DC</div>
                                <div className="badge badge-outline">TOYS</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-h-64 object-scale-down w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Groot!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>I am Groot ?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Toys</div>
                                <div className="badge badge-outline">Star Wars</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div >
        </div>


    );
};

export default Gallery;
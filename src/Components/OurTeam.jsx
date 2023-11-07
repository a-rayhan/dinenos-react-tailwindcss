const OurTeam = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24" data-aos="fade-up"
        data-aos-duration="1000">
            <h2 className="text-4xl font-semibold mb-10">
                Our Team
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full rounded-lg cursor-pointer bg-gray-100 p-4">
                    <div className="w-full h-96 rounded-2xl bg-slate-400 mb-4">
                        <img src='https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>

                    <div className="mb-5">
                        <p className="text-2xl font-semibold">
                            Emma Isabella
                        </p>

                        <p>
                            Grill & Nun Chef
                        </p>
                    </div>
                </div>

                <div className="w-full rounded-lg cursor-pointer bg-gray-100 p-4">
                    <div className="w-full h-96 rounded-2xl bg-slate-400 mb-4">
                        <img src='https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>

                    <div className="mb-5">
                        <p className="text-2xl font-semibold">
                            Peter Parker
                        </p>

                        <p>
                            Chinease Chef
                        </p>
                    </div>
                </div>

                <div className="w-full rounded-lg cursor-pointer bg-gray-100 p-4">
                    <div className="w-full h-96 rounded-2xl bg-slate-400 mb-4">
                        <img src='https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>

                    <div className="mb-5">
                        <p className="text-2xl font-semibold">
                            Jazzy Lamot
                        </p>

                        <p>
                            Grill & Nun Chef
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
import { NavLink } from "react-router-dom";

const MakeReservation = () => {
    return (
        <div className="bg-black" data-aos="fade-up"
        data-aos-duration="1000">
            <div className="max-w-7xl mx-auto px-5 py-24">
                <h2 className="text-4xl font-semibold mb-10 text-white">
                    Make Reservation
                </h2>

                <div className="flex flex-col gap-10">
                    <div className="grid xl:grid-cols-3 gap-x-10">
                        <div className="w-full">
                            <input type="date" placeholder="Select date" className="border-2 border-[#434344] py-4 px-6 rounded-full placeholder:text-lg w-full" required />
                        </div>
                        <div className="w-full">
                            <input type="time" placeholder="Select time" className="border-2 border-[#434344] py-4 px-6 rounded-full placeholder:text-lg w-full" required />
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="Total guests" className="border-2 border-[#434344] py-4 px-6 rounded-full placeholder:text-lg w-full" required />
                        </div>
                    </div>

                    <div className="w-full">
                        <textarea rows={4} type="text" placeholder="Special message" className="border-2 border-[#434344] py-4 px-10 rounded-full placeholder:text-lg w-full" required />
                    </div>
                </div>

                <div className="flex justify-center pt-14">
                    <button>
                        <NavLink className="py-5 px-12 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded-full text-lg font-medium">
                            Book your seat
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MakeReservation;
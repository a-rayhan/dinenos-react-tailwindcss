import { NavLink } from "react-router-dom";
import './Hero.css'

const Hero = () => {
    return (
        <div
            className="z-10 hero-bg relative flex items-center justify-start"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="800"
            data-aos-offset="0">
            <div className="-z-10 absolute bg-black top-0 w-full h-full opacity-40">

            </div>

            <div className="max-w-7xl mx-auto px-5 flex-1">
                <div>
                    <p className="text-[#fa8507] mb-3 text-lg">
                        Weekend Spaecial
                    </p>
                </div>

                <div>
                    <h1 className="text-6xl text-[#fa8507] md:text-7xl font-bold mb-4">
                        Delicious <br /> <span className="uppercase text-white"> Food Menu</span>
                    </h1>
                </div>

                <div>
                    <p className="text-white max-w-2xl text-lg mb-10">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nam quam harum quibusdam quidem voluptas architecto quasi amet eum doloremque!
                    </p>
                </div>

                <NavLink
                    to='/allfoods'
                    className='bg-[#fa8507] uppercase py-3 px-6 rounded-lg text-lg text-white font-semibold cursor-pointer'>
                    Explore more
                </NavLink>
            </div>

            <div></div>
        </div>
    );
};

export default Hero;
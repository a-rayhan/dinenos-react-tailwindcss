import Hero from "../Components/Hero";
import MakeReservation from "../Components/MakeReservation";
import OurTeam from "../Components/OurTeam";
import PopularFoods from "../Components/PopularFoods";

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularFoods />
            <MakeReservation />
            <OurTeam />
        </div>
    );
};

export default Home;
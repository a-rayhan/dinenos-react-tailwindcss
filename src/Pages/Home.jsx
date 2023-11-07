import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero";
import MakeReservation from "../Components/MakeReservation";
import OurTeam from "../Components/OurTeam";
import PopularFoods from "../Components/PopularFoods";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Dinenos - Home</title>
            </Helmet>
            <Hero />
            <PopularFoods />
            <MakeReservation />
            <OurTeam />
        </div>
    );
};

export default Home;
import NavigationBar from "./NavigationBar";
import './HomePage.css';
import HeroSection from "./HeroSection";
import SearchBarAndIcons from "./SearchBarAndIcons";
import OfferCards from "./OfferCards";
import Specialisation from "./Specialisations";
import Specialists from "./Specialists";

const HomePage = () => {
    return ( <div className="homepage">
        <NavigationBar />
        <HeroSection />
        <SearchBarAndIcons />
        <OfferCards />
        <Specialisation />
        <Specialists />
    </div> );
}
 
export default HomePage;
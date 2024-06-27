import NavigationBar from "../Components/NavigationBar";
import './HomePage.css';
import HeroSection from "../Components/HeroSection";
import SearchBarAndIcons from "../Components/SearchBarAndIcons";
import OfferCards from "../Components/OfferCards";
import Specialisation from "../Components/Specialisations";
import Specialists from "../Components/Specialists";
import ConsultationLayout from "../Components/ConsultationLayout";
import BlogAndNews from "../Components/BlogAndNews";
import MotoAndHighlights from "../Components/MotoAndHighlights";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";

const HomePage = () => {
    return ( <div className="homepage">
        <NavigationBar />
        <HeroSection />
        <SearchBar />
        <SearchBarAndIcons />
        <OfferCards />
        <Specialisation />
        <Specialists />
        <ConsultationLayout />
        <BlogAndNews />
        <MotoAndHighlights />
        <FAQ />
        <Footer />
    </div> );
}
 
export default HomePage;
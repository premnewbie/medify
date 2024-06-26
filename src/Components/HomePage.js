import NavigationBar from "./NavigationBar";
import './HomePage.css';
import HeroSection from "./HeroSection";
import SearchBarAndIcons from "./SearchBarAndIcons";
import OfferCards from "./OfferCards";
import Specialisation from "./Specialisations";
import Specialists from "./Specialists";
import ConsultationLayout from "./ConsultationLayout";
import BlogAndNews from "./BlogAndNews";
import MotoAndHighlights from "./MotoAndHighlights";
import FAQ from "./FAQ";
import Footer from "./Footer";

const HomePage = () => {
    return ( <div className="homepage">
        <NavigationBar />
        <HeroSection />
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
import HeroSection from "./HeroSection.jsx";
import HomeCategorySec from "./HomeCategorySec.jsx";
import HomeAboutSec from "../../pages/Home/HomeAboutSec.jsx";
import HomeServicesSec from "../../pages/Home/HomeServicesSec.jsx";
import HomeReviewSec from "../../pages/Home/HomeReviewSec.jsx";

const Home = () => {
    return (
        <div className='bg-primaryBackground w-screen overflow-x-hidden'>
            <HeroSection/>
            <div className='container mx-auto'>
                <HomeCategorySec/>
                <HomeAboutSec/>
                <HomeServicesSec/>
                <HomeReviewSec/>
            </div>
        </div>
    );
};

export default Home;
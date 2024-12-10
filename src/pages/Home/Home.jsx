import HeroSection from "./HeroSection.jsx";
import HomeCategorySec from "@/pages/Home/HomeCategorySec.jsx";

const Home = () => {
    return (
        <div className='bg-primaryBackground'>
            <HeroSection/>
            <div className='mx-48'>
                <HomeCategorySec/>
            </div>
        </div>
    );
};

export default Home;
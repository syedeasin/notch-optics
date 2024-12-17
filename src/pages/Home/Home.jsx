import HeroSection from "./HeroSection.jsx";
import HomeCategorySec from "./HomeCategorySec.jsx";

const Home = () => {
    return (
        <div className='bg-primaryBackground'>
            <HeroSection/>
            <div className='container mx-auto px-4'>
                <HomeCategorySec/>
            </div>
        </div>
    );
};

export default Home;
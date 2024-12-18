import aboutVideo from '../../assets/videos/aboutus.mp4';
import PrimaryButton from "../../components/Buttons/PrimaryButton.jsx";

const HomeAboutSec = () => {
    return (
        <div className='bg-white'>
            <div className='px-6 lg:px-12 pt-8 lg:pt-16 pb-5 flex flex-col lg:flex-row gap-2 lg:gap-12'>
                <div className='w-full lg:w-1/4'>
                    <h2 className='text-md leading-[24px] lg:text-2xl text-darkGray'>ABOUT</h2>
                    <h2 className='text-md leading-[24px] lg:text-2xl text-primary'>WOHU OPTICAL</h2>
                </div>
                <div className="w-full lg:w-3/4 flex flex-col items-end">
                    <p className='text-textColor text-sm leading-[22px] lg:text-md lg:leading-[27px] mb-4 lg:mb-10 tracking-tight'>Wohu Optical is a leading factory specializing in design and production of eyeglasses (optical
                        frames, blue light glasses, reading glasses), sunglasses, prescription lenses and glasses
                        accessories. Through the efforts of our team for many years, we have a good reputation from our
                        customers in more than 60 countries around the world.</p>
                    <PrimaryButton hoverEffect="hover:text-white hover:bg-primary" ButtonText='More'/>
                </div>
            </div>
            <div className='p-2 lg:p-8 bg-primary'>
                <video src={aboutVideo} autoPlay muted loop className="w-full h-auto"></video>
            </div>
        </div>
    );
};

export default HomeAboutSec;
import eyeglassFrames from '../../assets/Eyeglasses_Frames.webp';
import PrimaryButton from "@/components/Buttons/PrimaryButton.jsx";

const HomeCategorySec = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-6 py-28">
            <div className='bg-white flex flex-col items-center justify-center px-6 pt-9 pb-5 group'>
                <h3 className='text-[30px] leading-[46px] font-bold group-hover:text-primary pb-5'>Eyeglass Frames</h3>
                <PrimaryButton hoverEffect="group-hover:text-white group-hover:bg-primary"/>
                <img src={eyeglassFrames} alt="Eyeglass Frames"/>
            </div>
            <div className='bg-white flex flex-col items-center justify-center px-6 pt-9 pb-5 group'>
                <h3 className='text-[30px] leading-[46px] font-bold group-hover:text-primary pb-5'>Eyeglass Frames</h3>
                <PrimaryButton hoverEffect="group-hover:text-white group-hover:bg-primary"/>
                <img src={eyeglassFrames} alt="Eyeglass Frames"/>
            </div>
            <div className='bg-white flex flex-col items-center justify-center px-6 pt-9 pb-5 group'>
                <h3 className='text-[30px] leading-[46px] font-bold group-hover:text-primary pb-5'>Eyeglass Frames</h3>
                <PrimaryButton hoverEffect="group-hover:text-white group-hover:bg-primary"/>
                <img src={eyeglassFrames} alt="Eyeglass Frames"/>
            </div>
        </div>
    );
};

export default HomeCategorySec;
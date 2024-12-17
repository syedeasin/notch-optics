import heroBg from '../../assets/hero_bg.jpg';
const HeroSection = () => {
    return (
        <div className='pt-9 xl:pt-32 pb-8 xl:pb-20 bg-cyan-950' style={{backgroundImage: `url(${heroBg})`, backgroundSize: 'cover'}}>
            <div className="mx-2 md:mx-48">
                <h1 className='text-md leading-7 xl:text-6xl text-left xl:text-center font-bold text-primaryLight'>Manufacturing & Wholesale</h1>
                <h3 className='text-[14px] xl:text-3xl leading-6 text-left xl:text-center font-medium xl:font-bold text-white'>Eyeglasses · Sunglasses · Rx Lens · Accessories</h3>
                <div className='mx-0 xl:mx-auto grid place-items-start md:place-items-center pt-12 xl:pt-20 md:pt-36'>
                    <div className='text-white'>
                        <span className='block text-left xl:text-center text-sm xl:text-lg xl:leading-10'>
                            <i className='text-primary px-1'>√</i> 1500+ Styles of Eyewear in Stock <br
                            className="block xl:hidden"/>
                            <i className='text-primary px-1'>√</i>MOQ 1 Pair Customized Logo<br/>
                            <i className='text-primary px-1'>√</i> Prescription Glasses Assembly<br
                            className="block xl:hidden"/>
                            <i className='text-primary px-1'>√</i> Dropshipping Service
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
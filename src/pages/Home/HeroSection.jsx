const HeroSection = () => {
    return (
        <div className='pt-32 pb-20 bg-cyan-950'>
            <div className="mx-4 md:mx-48 mx-auto">
                <h1 className='text-xl md:text-6xl text-left md:text-center font-bold text-primary'>Manufacturing & Wholesale</h1>
                <h3 className='text-[14px] md:text-4xl leading-6 md:leading-[60px] text-left md:text-center font-medium md:font-bold text-white'>Eyeglasses · Sunglasses · Rx Lens · Accessories</h3>
                <div className='mx-0 md:mx-auto grid place-items-start md:place-items-center pt-20 md:pt-36'>
                    <p className='text-white text-left md:text-center text-sm md:text-2xl w-screen md:w-7/12 md:px-6'>
                        <span className='text-primary'>√</span> 1500+ Styles of Eyewear in Stock<br/>
                        <span className='text-primary'>√</span> MOQ 1 Pair Customized Logo<br/>
                        <span className='text-primary'>√</span> Prescription Glasses Assembly<br/>
                        <span className='text-primary'>√</span> Dropshipping Service
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
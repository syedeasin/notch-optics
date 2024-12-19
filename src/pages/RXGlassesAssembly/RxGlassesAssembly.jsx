import assembly1 from '../../assets/assembly1.webp';
import assembly2 from '../../assets/assembly2.webp';
import assembly3 from '../../assets/assembly3.webp';
const RxGlassesAssembly = () => {
    return (
        <div className='mt-6 lg:mt-24 mb-20 lg:mb-28'>
            <div className="container mx-auto">
                <div className='text-center mb-6 lg:mb-28'>
                    <h2 className='text-regular lg:text-[30px] leading-6 lg:leading-10 capitalize'>Prescription Glasses Assembly</h2>
                    <p className='text-sm lg:text-semi-md mt-0 lg:mt-2'>Professional, Fast, Affordable</p>
                </div>
                <div className='space-y-8 lg:space-y-28 mx-4'>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 items-center'>
                        <img src={assembly1} alt="Assembly 1" className='w-full lg:w-1/3'/>
                        <p className='text-sm leading-4 lg:text-semi-md'>Wohu Optical have more than 20 Essilor edging machines capable of assembling 2000 pairs of prescription glasses per day. In order to improve production efficiency, we are constantly
                            eliminating old equipment and adding better production equipment every year.
                            <br/><br/>
                            Relying on our more than 10 years of assembly experience, whether it is assembling single vision glasses, bifocal glasses or more complicated progressives glasses, we have very good customer satisfaction.</p>
                    </div>
                    <div className='flex flex-col lg:flex-row-reverse gap-4 lg:gap-16 items-center'>
                        <img src={assembly2} alt="Assembly 2" className='w-full lg:w-1/3'/>
                        <p className='text-sm leading-4 lg:text-semi-md text-left lg:text-right'>
                            Fast delivery is also a major feature of us, because we produce both frames and lenses, this
                            allows us to seamlessly connect lens production and glasses assembly, with fast shipping and
                            we can even deliver progressive glasses within 7 working days.<br/><br/>
                            Assembly is not only lens cutting, but also frame shaping. Many companies do not pay
                            attention to this step, which leads to many after-sales problems. Every pair of glasses
                            assembled by Wohu Optical not only undergoes strict inspection, but also includes
                            professional glasses shaping.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 items-center'>
                        <img src={assembly3} alt="Assembly 3" className='w-full lg:w-1/3'/>
                        <p className='text-sm leading-4 lg:text-semi-md'>Through our professional processing technology and factory advantages as well as our fast delivery advantages, Wohu’s professional prescription glasses assembly service not only provides customers with high-quality prescription glasses but we also help our customers save a lot of costs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RxGlassesAssembly;
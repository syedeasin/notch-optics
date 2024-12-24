import {useCallback} from 'react';
import useEmblaCarousel from "embla-carousel-react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import homeContents from "../pages/Home/HomeContents.js";

const TestimonialSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align:'start',
    slidesToScroll:1,
    containScroll: 'trim',
    dragFree: false})

    // Navigation Handlers
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

        return (
            <div>
                <div className="relative mx-auto overflow-hidden">
                    <div className="embla" ref={emblaRef}>
                        <div className="flex">
                            {homeContents.testimonialsSec.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] mx-4 text-center space-y-8">
                                    <div className='bg-[#f5f5f5] p-12 h-full flex flex-col justify-between border border-borderLightGray'>
                                        <div>
                                            <h3 className="text-lg font-bold text-darkGray">{item.title}</h3>
                                            <div className="flex justify-center">
                                                {/* Stars */}
                                                {Array.from({length: 5}).map((_, i) => (
                                                    <span key={i} className="text-primary text-xl ml-1">★</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-darkGray text-regular leading-[28px] md:text-base pb-4 pt-4">{item.review}</p>
                                        <div>
                                            <p className="text-4xl font-medium text-darkGray pb-1">- {item.name}</p>
                                            <p className='text-textColorLight'>{item.country}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <button
                            className=" left-0 top-1/2 -translate-y-1/2  hover:font-gray-200 p-2 bg-borderGray focus:bg-accentGray focus:text-white hover:bg-accentGray hover:text-white rounded-tl-[12px] rounded-bl-[12px] rounded-tr-[0px] rounded-br-[0px]"
                            onClick={scrollPrev}>
                            <AiOutlineLeft className="w-5 h-5"/>
                        </button>
                        <button
                            className=" right-0 top-1/2 -translate-y-1/2 hover:font-gray-200 p-2 bg-borderGray focus:bg-accentGray focus:text-white hover:bg-accentGray hover:text-white rounded-tr-[12px] rounded-br-[12px] rounded-tl-[0px] rounded-bl-[0px]"
                            onClick={scrollNext}>
                            <AiOutlineRight className="w-5 h-5"/>
                        </button>
                    </div>
                </div>
            </div>
        );
};

export default TestimonialSlider;
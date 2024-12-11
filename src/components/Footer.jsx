import FooterContent from "../services/Footer/FooterContent.js";
import { Link } from "react-router-dom";
import {MdEmail} from "react-icons/md";
import {IoMdCall} from "react-icons/io";
import {useState} from "react";
import {HiMiniChevronDown, HiMiniChevronUp} from "react-icons/hi2";


const Footer = () => {
    // State to handle dropdown visibility
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div>
            <div className="bg-bgLightGray pt-14 xl:pb-10">
                <div className="xl:container mx-auto">
                    <div className="flex flex-col-reverse xl:flex-row xl:gap-32">
                        {/*Desktop Version */}
                        <div className="hidden xl:flex xl:basis-3/4 justify-between">
                            {
                                Object.keys(FooterContent).map((item, index) => (
                                    <div key={index}>
                                        <h4 className='text-lg font-bold uppercase leading-8 mb-3'
                                            key={index}>{FooterContent[item].listLabel}</h4>
                                        {FooterContent[item].listItem.map((item,index) => (
                                            <Link to='#' key={index}
                                                  className='block text-sm leading-8 font-thin hover:text-primary'>{item}</Link>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>

                        {/* Dropdown for Mobile */}
                        <div className="mt-4 xl:hidden border-t-[0.5px] border-[#B8B8B8]">
                            {Object.keys(FooterContent).map((item, index) => (
                                <div key={index} className='border-b-[0.5px] border-[#B8B8B8]'>
                                    <button
                                        className="px-4 flex justify-between items-center w-full text-sm xl:text-lg font-bold capitalize xl:uppercase leading-[54px] bg-transparent focus:outline-none"
                                        onClick={() => toggleDropdown(index)}>
                                        {FooterContent[item].listLabel}
                                        <span className="text-primary">
                                            {activeDropdown === index ? (<HiMiniChevronUp className="text-lg" />) : (<HiMiniChevronDown className="text-lg" />)}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all overflow-hidden ${
                                            activeDropdown === index
                                                ? "max-h-screen border-t-[0.5px]"
                                                : "max-h-0"
                                        }`}>
                                        {FooterContent[item].listItem.map((listItem, i) => (
                                            <Link
                                                to="#"
                                                key={i}
                                                className="block px-4 text-sm leading-8 font-thin xl:hover:text-primary text-primary"
                                            >
                                                {listItem}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/*Subscribe Section */}
                        <div className='px-4 xl:px-0 xl:basis-1/4'>
                            <h4 className='basis-1/4 text-lg font-bold capitalize xl:uppercase leading-8 mb-0 xl:mb-3'>
                                Newsletter subscription</h4>
                            <p className='text-sm leading-5 xl:leading-8 font-thin'>Subscribe to stay informed about our latest style
                                updates and promotions.</p>
                            <div className="subscribeForm mt-5 mb-8">
                                <div className="join flex flex-col md:flex-row space-x-0">
                                    <div className='w-full md:w-auto'>
                                        <input
                                            className="join-item input h-[48px] w-full md:w-[300px] border-[1px] bg-transparent border-darkGray rounded-none focus:ring-0 focus:border-darkGray hover:border-darkGray focus:outline-none placeholder:text-sm placeholder:text-accentGray"
                                            placeholder="Enter Your Email Address"
                                        />
                                    </div>
                                    <div className="indicator w-full md:w-auto">
                                        <button
                                            className="join-item h-[48px] w-full md:w-[300px] rounded-none text-white bg-darkGray transition-none px-6">
                                            SUBSCRIBE!
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='contactInfo flex flex-row gap-9 hidden xl:flex'>
                                <div className="mobileNumber flex flex-row items-center gap-2">
                                    <IoMdCall className='text-4xl'/>
                                    <div>
                                        <h5 className='text-sm font-bold'>Call & Whatsapp:</h5>
                                        <p className='text-sm font-thin hover:text-primary'>86 18058440597</p>
                                    </div>
                                </div>
                                <div className="emailAddress flex flex-row items-center gap-2">
                                    <MdEmail className='text-4xl'/>
                                    <div>
                                        <h5 className='text-sm font-bold'>Email:</h5>
                                        <p className='text-sm font-thin hover:text-primary'>info@wohuoptical.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primaryBackground'>
                <p className='text-sm xl:text-md leading-10 xl:leading-[76px] text-center text-accentGray'>© 2024 wohuoptical.com. All rights
                    reserved</p>
            </div>
        </div>
    );
};

export default Footer;
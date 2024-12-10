import FooterContent from "@/components/FooterContent.js";
import { Link } from "react-router-dom";
import {RiSearchLine} from "react-icons/ri";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {MdEmail} from "react-icons/md";
import {IoMdCall} from "react-icons/io";
import {useState} from "react";


const Footer = () => {
    // State to handle dropdown visibility
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div>
            <div className="bg-bgLightGray pt-14 pb-16">
                <div className="md:mx-48 px-4 sm:px-8">
                    <div className="flex flex-col-reverse md:flex md:flex-row md:gap-8">

                        {/*Desktop Version */}
                        <div className="hidden md:grid md:grid-cols-4 basis-9/12 justify-between">
                            {
                                Object.keys(FooterContent).map((item, index) => (
                                    <div>
                                        <h4 className='text-lg font-bold uppercase leading-8 mb-3'
                                            key={index}>{FooterContent[item].listLabel}</h4>
                                        {FooterContent[item].listItem.map((item) => (
                                            <Link to='#'
                                                  className='block text-sm leading-8 font-thin hover:text-primary'>{item}</Link>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>

                        {/* Dropdown for Mobile */}
                        <div className="mt-4 md:hidden space-y-4">
                            {Object.keys(FooterContent).map((item, index) => (
                                <div key={index}>
                                    <button
                                        className="flex justify-between items-center w-full text-lg font-bold uppercase leading-8 mb-2 bg-transparent focus:outline-none"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {FooterContent[item].listLabel}
                                        <span className="text-primary">
                                            {activeDropdown === index ? "-" : "+"}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all overflow-hidden ${
                                            activeDropdown === index
                                                ? "max-h-screen"
                                                : "max-h-0"
                                        }`}
                                    >
                                        {FooterContent[item].listItem.map((listItem, i) => (
                                            <Link
                                                to="#"
                                                key={i}
                                                className="block text-sm leading-8 font-thin hover:text-primary"
                                            >
                                                {listItem}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/*Subscribe Section */}
                        <div>
                            <h4 className='basis-1/4 text-lg font-bold uppercase leading-8 mb-3'>
                                NEWSLETTER SUBSCRIPTION</h4>
                            <p className='text-sm leading-8 font-thin'>Subscribe to stay informed about our latest style
                                updates and promotions.</p>
                            <div className="subscribeForm mt-5 mb-8">
                                <div className="join">
                                    <div>
                                        <input
                                            className="join-item input h-[48px] border-[1px] bg-transparent border-darkGray rounded-none focus:ring-0 focus:border-darkGray hover:border-darkGray focus:outline-none placeholder:text-sm placeholder:text-accentGray"
                                            placeholder="Enter Your Email Address"
                                        />
                                    </div>
                                    <div className="indicator">
                                        <button
                                            className="join-item h-[48px] rounded-none text-white bg-darkGray transition-none px-6 border-[1px] border-darkGray">
                                            SUBSCRIBE!
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='contactInfo flex flex-row gap-9 hidden md:flex'>
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
            <div>
                <p className='text-md leading-[76px] text-center text-accentGray'>© 2024 wohuoptical.com. All rights
                    reserved</p>
            </div>
        </div>
    );
};

export default Footer;
import logo from '../../assets/Notch_Optical_logo.webp';
import { RiSearchLine } from "react-icons/ri";
import { PiUser } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai";
import {GoHeart} from "react-icons/go";
import {IoSearchOutline} from "react-icons/io5";

const Searchbar = () => {
    return (
        <div className="Searchbar py-4 border-b border-borderGray">
            <div className="container mx-auto px-4 flex flex-row items-center justify-between">
                <div className='md:hidden mobile-nav flex gap-4'>
                    <AiOutlineMenu className='visible md:hidden w-6 h-6 md:w-9 md:h-9 text-accentGray'/>
                    <GoHeart className='visible md:hidden w-6 h-6 md:w-9 md:h-9 text-accentGray'/>
                </div>
                {/*Notch Optics Logo */}
                <div className="logo flex-shrink-0">
                    <img src={logo} alt="Notch Optics" className="w-36 md:w-48 h-auto" />
                </div>

                {/*Searchbar + Profile + Favourite + Cart */}
                <div className="flex flex-row searchBar items-center justify-between gap-4 md:gap-10">
                    <div className="search">
                        <div className="join hidden md:flex">
                            <div>
                                <div>
                                    <input
                                        className="input input-bordered border-borderGray rounded-none focus:ring-1 hover:ring-1 hover:ring-accentGray focus:ring-accentGray focus:outline-none join-item"
                                        placeholder="Search..."/>
                                </div>
                            </div>
                            <div className="indicator">
                                <button className="join-item rounded-none  bg-accentGray hover:bg-accentGray transition-none px-3"><IoSearchOutline className='w-6 h-6 text-white'/>
                                </button>
                            </div>
                        </div>
                        <IoSearchOutline className='visible md:hidden w-6 h-6 md:w-9 md:h-9 text-accentGray'/>
                    </div>
                    <div className="profile hidden md:flex">
                        <PiUser className='w-9 h-9 text-accentGray'/>
                    </div>
                    <div className="favourite hidden md:flex">
                        <GoHeart className='w-9 h-9 text-accentGray'/>
                    </div>
                    <div className="menuCart">
                        <BsCart3 className='w-6 h-6 md:w-9 md:h-9 text-accentGray'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
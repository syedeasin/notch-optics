import logo from '../../assets/Notch_Optical_logo.webp';
import { RiSearchLine } from "react-icons/ri";
import { PiUser } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

const Searchbar = () => {
    return (
        <div className="Searchbar py-4 border-b border-borderGray">
            <div className="mx-48 flex flex-row items-center justify-between">
                <div className="logo">
                    <img src={logo} alt="Notch Optics" className="w-7/12 h-auto" />
                </div>
                <div className="searchBar flex flex-row items-center justify-between gap-10">
                    <div className="search">
                        <div className="join">
                            <div>
                                <div>
                                    <input
                                        className="input input-bordered border-borderGray rounded-none focus:ring-1 hover:ring-1 hover:ring-accentGray focus:ring-accentGray focus:outline-none join-item"
                                        placeholder="Search..."/>
                                </div>
                            </div>
                            <div className="indicator">
                                <button className="join-item rounded-none  bg-accentGray hover:bg-accentGray transition-none px-3"><RiSearchLine className='w-6 h-6 text-white'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <PiUser className='w-9 h-9 text-accentGray'/>
                    </div>
                    <div className="favourite">
                        <IoIosHeartEmpty className='w-9 h-9 text-accentGray'/>
                    </div>
                    <div className="menuCart">
                        <BsCart3 className='w-9 h-9 text-accentGray'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
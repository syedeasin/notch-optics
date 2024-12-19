import {TfiEmail, TfiUser} from "react-icons/tfi";
import {PiBuildingOfficeLight, PiPasswordLight} from "react-icons/pi";
import {FiEye, FiEyeOff} from "react-icons/fi";
import countries from "../pages/Login&Register/Countries.js";
import {useState} from "react";
import {BsTelephone} from "react-icons/bs";

const RegisterForm = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className="space-y-8 select-none">
            <div className='space-y-[80px] text-formTextColor text-regular'>
                <div className='space-y-10'>
                    <div className='flex flex-row space-x-10'>
                        <div className='gender'>
                            <select
                                className="select select-bordered outline-offset-0 select-borderGray rounded-none w-full max-w-xs h-14 text-regular">
                                <option selected>Ms.</option>
                                <option>Mr.</option>
                            </select>
                        </div>
                        <label className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                            <TfiUser className='text-md group-focus-within:text-primary'/>
                            <input type="text" className="grow" placeholder="First Name *"/>
                        </label>
                        <label className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                            <TfiUser className='text-md group-focus-within:text-primary'/>
                            <input type="text" className="grow" placeholder="Last Name *"/>
                        </label>
                    </div>
                    <label
                        className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                        <TfiEmail className='text-md group-focus-within:text-primary'/>
                        <input type="text" className="grow" placeholder="Email Address *"/>
                    </label>
                    <div className='Business Type w-full'>
                        <select
                            className="select select-bordered outline-offset-0 select-borderGray rounded-none h-14 w-full text-regular">
                            <option selected>Business Type *</option>
                            <option>Physical Store & Online Shop</option>
                            <option>Physical Store</option>
                            <option>Online Shop</option>
                            <option>Other</option>
                        </select>

                    </div>
                    <label
                        className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                        <PiBuildingOfficeLight className='text-md group-focus-within:text-primary'/>
                        <input type="text" className="grow" placeholder="Company Name *"/>
                    </label>
                    <div className="Business Type w-full">
                        <select
                            name="country"
                            className="select select-bordered outline-offset-0 select-borderGray rounded-none h-14 w-full text-regular"
                            value={selectedCountry}
                            onChange={handleChange}>
                            <option value="" disabled>
                                Country *
                            </option>
                            {countries.map((country) => (
                                <option key={country.value} value={country.value}>
                                    {country.name} ({country.code})
                                </option>
                            ))}
                        </select>

                    </div>
                    <label className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                        <BsTelephone className='text-md group-focus-within:text-primary'/>
                        <input type="text" className="grow" placeholder="Phone Number *"/>
                    </label>
                    <div className="relative">
                        <label
                            className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                            <PiPasswordLight className='text-md group-focus-within:text-primary'/>
                            <input type={passwordVisible ? "text" : "password"} className="grow" placeholder="Password *"/>
                        </label>
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                {passwordVisible ? <FiEyeOff size={20}/> : <FiEye size={20}/>}
                         </span>
                    </div>
                </div>
            </div>
            <button
                className='w-full bg-primary h-14 text-4xl text-white hover:bg-primaryHover'> Create An Account
            </button>
        </div>
    );
};

export default RegisterForm;
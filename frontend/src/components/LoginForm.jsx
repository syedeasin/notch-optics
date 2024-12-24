import {TfiEmail} from "react-icons/tfi";
import {PiPasswordLight} from "react-icons/pi";
import {Link} from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {useState} from "react";

const LoginForm = ({isShown}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={`space-y-8 select-none ${isShown ?`space-y-5`:`space-y-8`}`}>
            <div className={isShown ?`space-y-6`:`space-y-[80px]`}>
                <div className={isShown ?`space-y-6`:`space-y-10`}>
                    <label
                        className={`flex input input-bordered outline-offset-0 input-borderGray rounded-none items-center gap-4 group ${isShown ? `h-10` : `h-14`}`}>
                        <TfiEmail className={`group-focus-within:text-primary ${isShown ? `text-regular`:`text-md`}`}/>
                        <input type="text" className={`grow ${isShown ? `text-sm`:`text-regular`}`} placeholder="Email Address *"/>
                    </label>
                    <div className="relative">
                        <label
                            className={`flex input input-bordered outline-offset-0 input-borderGray rounded-none items-center gap-4 group ${isShown ? `h-10` : `h-14`}`}>
                            <PiPasswordLight
                                className={`group-focus-within:text-primary ${isShown ? `text-regular` : `text-md`}`}/>
                            <input type={passwordVisible ? "text" : "password"} className={`grow ${isShown ? `text-sm`:`text-regular`}`}
                                   placeholder="Password *"/>
                            <span
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                {passwordVisible ? <FiEyeOff size={20}/> : <FiEye size={20}/>}
                         </span>
                        </label>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <label className="md:w-2/3 text-gray-500 font-bold flex items-center">
                        <input
                            className={`accent-primary border-borderGray ${isShown ? `mr-2 w-4 h-4` : `mr-3 w-5 h-5`}`}
                            type="checkbox"/>
                        <span
                            className={`text-[#949494] font-normal ${isShown ? `text-sm` : `text-regular`}`}>Remember Me</span>
                    </label>
                    <Link to='./'><span
                        className={`text-black hover:text-primary font-normal underline ${isShown ? `text-xs text-nowrap` : `text-sm`}`}>{isShown ? `Forgot Password?` : `Forgot Your Password?`}</span></Link>
                </div>
            </div>
            <button className={`w-full bg-primary text-white hover:bg-primaryHover ${isShown ? `text-sm leading-[46px] uppercase`:`text-4xl leading-[50px]`}`}>
                Sign In</button>
        </div>
    );
};

export default LoginForm;
import homeContents from './HomeContents.js';

import PrimaryButton from "../../components/Buttons/PrimaryButton.jsx";
import {Link} from "react-router-dom";

const HomeCategorySec = () => {
    return (
        <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-3.5 py-4 xl:py-28">
            {homeContents.categoriesSection.map((item,index) => (
                <Link to={item.url} key={index}>
                    <div key={index}
                         className='bg-white flex flex-col items-center justify-center px-4 pt-9 pb-5 group h-full'>
                        <h3 className='text-regular xl:text-[30px] leading-[20px] xl:leading-[46px] tracking-tight font-medium xl:font-bold text-center group-hover:text-primary pb-2 xl:pb-5'>{item.label}</h3>
                        <PrimaryButton hoverEffect="group-hover:duration-700 group-hover:text-white group-hover:bg-primary"/>
                        <img className='transition mt-3 px-4 xl:mt-5 group-hover:duration-700 group-hover:scale-105' src={item.featuredImage} alt="Eyeglass Frames"/>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default HomeCategorySec;
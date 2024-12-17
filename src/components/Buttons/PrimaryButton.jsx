import {BiChevronsRight} from "react-icons/bi";

const PrimaryButton = ({hoverEffect}) => {
    return (
        <div>
            <button
                className={`transition flex gap-0 items-center border-2 border-primary rounded-[100px] pl-3 pr-1 py-0 font-bold text-[12px] xl:text-regular leading-4 tracking-tight text-primary ${hoverEffect}`}>SHOP
                NOW <BiChevronsRight className='text-md xl:text-xl'/>
            </button>
        </div>
    );
};

export default PrimaryButton;
import {BiChevronsRight} from "react-icons/bi";

const PrimaryButton = ({hoverEffect}) => {
    return (
        <div>
            <button
                className={`flex gap-0 items-center border-2 border-primary rounded-[100px] pl-4 pr-2 font-bold text-md text-primary ${hoverEffect}`}>SHOP
                NOW <BiChevronsRight className='text-3xl'/>
            </button>
        </div>
    );
};

export default PrimaryButton;
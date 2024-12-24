import PrimaryButton from "./Buttons/PrimaryButton.jsx";

const ServiceCard = ({img,label,description}) => {
    return (
        <div className='bg-white hover:bg-primary group'>
            <img src={img} alt="Custom Logo" className='w-full'/>
            <div className='py-8 px-2 flex flex-col items-left text-left lg:text-center lg:mx-auto'>
                <h3 className='text-regular text-left lg:text-center lg:text-lg text-darkGray font-bold pb-2 group-hover:text-white'>{label}</h3>
                <p className='text-darkGray text-sm lg:text-regular leading-5 lg:leading-6 pb-8 group-hover:text-white'>{description}</p>
                <div className='mx-0 lg:mx-auto'>
                    <PrimaryButton ButtonText='DETAILS' hoverEffect='group-hover:duration-400 group-hover:bg-white group-hover:border-white group-hover:text-primary'/>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
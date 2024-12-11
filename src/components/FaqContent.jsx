import React from 'react';

const FaqContent = ({title,description}) => {
    return (
        <div>
            <h4 className='text-left'><span className='w-4 h-4 bg-primary rounded-3xl text-white text-sm tracking-normal px-[8px] py-1 mr-1'>Q</span>{title}</h4>
            <p className='text-left p-sm leading-[25px] mt-5'>{description}</p>
        </div>
    );
};

export default FaqContent;
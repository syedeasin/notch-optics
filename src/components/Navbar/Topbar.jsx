import React from 'react';

const Topbar = () => {
    return (
        <div className='bg-primary py-2'>
            <div className='container m-auto d-flex text-center text-white'>
                <p className="text-[12px] xl:text-lg leading-5 xl:leading-6 font-medium">Free custom Logo on frame over <b>$199</b> <span className="bg-white px-2 md:px-4 py-0 font-medium cursor-pointer rounded-2xl text-primary ml-1 md:ml-2.5">Details</span></p>
            </div>
        </div>
    );
};

export default Topbar;
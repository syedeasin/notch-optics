import React from 'react';
import PriceFilter from "../../components/ProductFilters/PriceFilter.jsx";
import Stopwatch from "../../components/Stopwatch.jsx";

const EyeGlasses = () => {
    return (
        <div className='flex'>
            <div className="filterBar w-2/12 h-[100vh] bg-primaryBackground px-6 py-8">
                <PriceFilter/>
                {/*<Gender/>*/}
                {/*<Frame Shape/>*/}
                {/*<Frame Material/>*/}
                {/*<Size/>*/}
                {/*<Frame Color/>*/}
                {/*<Rim/>*/}
                {/*<Feature/>*/}
            </div>
            <div className="glassProducts w-10/12 h-[100vh] px-6 py-8">
                <Stopwatch/>
            </div>
        </div>
    );
};

export default EyeGlasses;
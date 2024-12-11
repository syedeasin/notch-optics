import { Link } from "react-router-dom";

const MegaMenuLayout = ({categories,images}) => {
    return (
        <div className="container mx-auto px-4 text-black">
            <div className="flex flex-row gap-6">
                <div className="border-r-[1px] border-borderLightGray">
                    <div className='pr-12'>
                        {categories.map((category,index) => (
                            <Link to='#' className='block text-sm mb-6 hover:text-primary' key={index}>{category}</Link>
                        ))}
                    </div>
                </div>
                <div className="imageryMenu flex flex-row gap-6">
                    {images.map((image, index) => (
                        <Link to='#' key={index} className="group">
                            <img src={image.src} alt={image.label} />
                            <p className="text-center text-sm mt-6 group-hover:text-primary">{image.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MegaMenuLayout;
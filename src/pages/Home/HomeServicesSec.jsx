import ServiceCard from "../../components/ServiceCard.jsx";
import homeContents from "../../pages/Home/HomeContents.js";

const HomeServicesSec = () => {
    return (
        <div className='pt-20 pb-28'>
            <h2 className='text-primary text-center  text-md leading-[24px] lg:text-2xl pb-2'>OUR SERVICES</h2>
            <p className='text-sm lg:text-4xl text-center capitalize lg:uppercase text-textColor tracking-tighter mb-4 lg:mb-12'>Comprehensive service guarantee of professional service team</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {homeContents.serviceSection.map((service, index) => (
                    <ServiceCard key={index} img={service.featuredImage} label={service.label} description={service.description} />
                ))}
            </div>
        </div>
    );
};

export default HomeServicesSec;
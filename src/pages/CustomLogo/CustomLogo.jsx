import titleBgImage from '../../assets/pageTitleCustomLogo.webp';
import product1 from '../../assets/products1.webp';
import product2 from '../../assets/products22.webp';
import product3 from '../../assets/products3.webp';
import product4 from '../../assets/products44.webp';
import FaqContent from "@/components/FaqContent.jsx";

const faqContent = [
    {question:"Can you add my private label on eyeglasses frames?", answer:"A: Definitely."},
    {question:"What is the MOQ(minimum order quantity) for logo custom?", answer:"A: 1 PC on Frame."},
    {question:"How do I submit my logo file to you?", answer:"A: Please send the logo file to this email address info@wohuoptical.com or the email of the business person who is connected to you."},
    {question:"What format of logo file do you need?", answer:"A: You can send us the logo file in the following format PDF JPG PNG or AI, CAD. Of course, the best choice is a vector diagram and if you can provide the original vector diagram, that is the best choice."},
    {question:"What is your logo customization technology?", answer:"A: The logo customization technology on eyeglasses frames is silk screening/engraving. The logo customization technology on eyeglasses bags and cloths is silk screening/Hot stamping."},
    {question:"Where do you put the logo?", answer:"A: Normally, we add the logo inside the temple of the right frame. If you want to put the logo at another location, we will produce the logo based on your requirements."},
]

const CustomLogo = () => {
    return (
        <div className="customLogo">
            <div className="page-title bg-gray-400" style={{backgroundImage: `url(${titleBgImage})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                <div className="container mx-auto px-28 pt-20 pb-10">
                    <h2 className='text-[130px] leading-[130px] uppercase text-primary font-black tracking-tighter'>Logo</h2>
                    <h2 className='text-[130px] leading-[130px] uppercase text-primary font-black tracking-tighter mb-6'>Service</h2>
                    <h2 className='text-[24px] leading-[30px] capitalize text-white bg-primary font-medium mx-auto inline px-6 py-1'>Glasses Frame & Packing Custom Logo Service
                    </h2>
                </div>
            </div>
            <div className='bg-white'>
                <div className='container mx-auto px-28 pt-20 pb-32 text-center'>
                    <h2>CUSTOMIZED LOGO ON FRAMES</h2>
                    <p className='p-lg w-1/2 px-28 mx-auto mt-8'>MOQ 1 PC customized logo on frame free on frame for
                        order amount over $199</p>
                    <h2 className='mt-20 mb-12'>EXAMPLES Of Finished Products</h2>
                    <div className="grid grid-cols-4 grid-rows-1 gap-2">
                        {[product1, product2, product3, product4].map((item, index) => (
                            <img key={index} className="object-cover w-full h-full" src={item}
                                 alt={`Product Image ${index + 1}`}/>
                        ))}
                    </div>
                    <h2 className='mt-20 mb-12'>FAQ About Custom Logo</h2>
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-2 gap-20">
                            <div className='flex flex-col pr-20 gap-20 border-r-[1px] border-borderGray'>
                                {faqContent.slice(0,3).map((item,index)=>(
                                    <FaqContent key={index} title={item.question}
                                                description={item.answer}/>
                                ))}
                            </div>
                            <div className='flex flex-col gap-20'>
                                {faqContent.slice(3,6).map((item,index)=>(
                                    <FaqContent key={index} title={item.question}
                                                description={item.answer}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomLogo;
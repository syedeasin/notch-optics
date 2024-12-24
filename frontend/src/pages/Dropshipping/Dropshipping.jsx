import shipping1 from '../../assets/shipping1.jpg'
import shipping2 from '../../assets/shipping2.webp'
import pdf from '../../assets/dropshipping-pdf.webp'
const Dropshipping = () => {
    return (
        <div className='mt-6 lg:mt-24 mb-20 lg:mb-28'>
            <div className="container mx-auto px-28">
                <div className='text-center mb-6 lg:mb-28'>
                    <h2 className='text-regular lg:text-[30px] leading-6 lg:leading-10 capitalize'>GLASSES DROPSHIPPING
                        SERVICE</h2>
                    <p className='text-sm lg:text-semi-md mt-0 lg:mt-2'>Professional ,Fast ,Reliable</p>
                    <img src={shipping1} alt="Shipping" className='w-full'/>
                </div>
            </div>
            <div className="container mx-auto px-28">
                <div className='text-center bg-[#F7F7F7] pt-8'>
                    <h3 className='text-regular font-bold lg:text-[24px] leading-6 lg:leading-9'>What is Drop
                        Shipping</h3>
                    <img src={shipping2} alt="Shipping" className='w-full'/>
                </div>
            </div>
            <div className="container mx-auto px-28">
                <div className='text-left bg-[#28666C] pt-8 flex flex-row gap-12'>
                    <img src={pdf} alt="pdf" className=''/>
                    <div>
                        <h3 className='text-regular font-bold lg:text-[24px] leading-6 lg:leading-9'>DROP SHIPPING AGREEMENT</h3>
                        <input type="text" placeholder="Enter your email to get dropshipping agreement"/>
                        <button className='bg-red-700 px-8 py-2'>Get Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropshipping;
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

import MegaMenuLayout from "@/components/Navbar/MegaMenuLayout.jsx";
import menuContent from './MenuContent.js';
import rxLenses from './RxLenses.js';
import { Link } from "react-router-dom";

const NavigationMenuDemo = () => {
    return (
        <div className="shadow shadow-md">
            {/*Mobile Version */}
            <NavigationMenu.Root className='visible md:hidden relative z-10 flex w-screen overflow-x-auto'>
                <NavigationMenu.List className="mx-2 m-0 flex list-none bg-white gap-4 items-center whitespace-nowrap">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] font-medium leading-10 md:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] ">
                            <Link to='#'>HOME</Link>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] font-medium leading-10 md:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px]">
                            <Link to='#'>EYEGLASS FRAMES</Link>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] leading-[20px] md:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px]">
                            <Link to='#'>RX LENSES</Link>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] leading-[20px] md:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px]">
                            <Link to='#'>SUNGLASSES</Link>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] leading-[20px] md:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px]">
                            <Link to='#'>READING GLASSES</Link>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] leading-[20px] md:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px]">
                            <Link to='#'>BLUE LIGHT GLASSES</Link>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] leading-[20px] md:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px]">
                            <Link to='#'>ACCESSORIES</Link>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                </NavigationMenu.List>

                {/*Desktop Version */}
            </NavigationMenu.Root>
            <NavigationMenu.Root className="hidden md:flex relative z-10 flex w-screen">
                <NavigationMenu.List className="mx-48 center m-0 flex list-none bg-white gap-7 items-center">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            EYEGLASS FRAMES{" "}
                            <CaretDownIcon
                                className="relative h-6 w-6 hover:text-primary transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        {/* Full-screen Navigation Content */}
                        <NavigationMenu.Content className="absolute mx-auto py-5 top-full left-0 w-screen bg-white text-primary border-t-[1px] border-b-[1px]">
                            <MegaMenuLayout categories={menuContent?.eyeglassFrames?.categories} images={menuContent?.eyeglassFrames?.images} />
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            RX LENSES{" "}
                            <CaretDownIcon
                                className="relative h-6 w-6 hover:text-primary transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        {/* Full-screen Navigation Content */}
                        <NavigationMenu.Content
                            className="absolute mx-auto py-5 top-full left-0 w-screen bg-white text-primary border-t-[1px] border-b-[1px]">
                            <div className=" mx-48 text-black">
                                <div className="grid grid-cols-5 gap-6">
                                    {Object.keys(rxLenses).map((rxLense, index) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <div className='flex flex-col items-start gap-2'>
                                            <h4 className='font-bold text-[15px]' key={index}>{rxLenses[rxLense].listLabel}</h4>
                                            <div className="flex flex-col">
                                                {rxLenses[rxLense].listItem.map((item)=>(
                                                    <Link to='#' className='text-sm leading-[37px] text-left block hover:text-primary'>{item}</Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger
                            className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            SUNGLASSES{" "}
                            <CaretDownIcon
                                className="relative h-6 w-6 hover:text-primary transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        {/* Full-screen Navigation Content */}
                        <NavigationMenu.Content className="absolute mx-auto py-5 top-full left-0 w-screen bg-white text-primary border-t-[1px] border-b-[1px]">
                            <MegaMenuLayout categories={menuContent.sunglasses.categories}
                                            images={menuContent.sunglasses.images}/>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger
                            className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            READING GLASSES{" "}
                            <CaretDownIcon
                                className="relative h-6 w-6 hover:text-primary transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        {/* Full-screen Navigation Content */}
                        <NavigationMenu.Content className="absolute mx-auto py-5 top-full left-0 w-screen bg-white text-primary border-t-[1px] border-b-[1px]">
                            <MegaMenuLayout categories={menuContent.readingglasses.categories} images={menuContent.readingglasses.images}/>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            BLUE LIGHT GLASSES{" "}
                            <CaretDownIcon
                                className="relative h-6 w-6 hover:text-primary transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        {/* Full-screen Navigation Content */}
                        <NavigationMenu.Content className="absolute mx-auto py-5 top-full left-0 w-screen bg-white text-primary border-t-[1px] border-b-[1px]">
                            <MegaMenuLayout categories={menuContent.bluelightglasses.categories} images={menuContent.bluelightglasses.images}/>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            ACCESSORIES
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            ABOUT{" "}
                            <CaretDownIcon
                                className="relative h-6 w-6 hover:text-primary transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        {/* Full-screen Navigation Content */}
                        <NavigationMenu.Content className="absolute mx-auto py-5 top-full left-0 w-screen bg-white text-primary border-t-[1px] border-b-[1px]">
                            <MegaMenuLayout categories={menuContent.about.categories} images={menuContent.about.images}/>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            CONTACT US
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    );
};

export default NavigationMenuDemo;

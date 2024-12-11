import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

import MegaMenuLayout from "../../components/Navbar/MegaMenuLayout.jsx";
import menuContent from '../../services/Navbar/MenuContent.js';
import rxLenses from '../../services/Navbar/RxLenses.js';
import { Link } from "react-router-dom";
import mobileMenu from "../../services/Navbar/MobileMenu.js";

const NavigationMenuDemo = () => {
    return (
        <div className="shadow shadow-md">
            {/*Mobile Version */}
            <NavigationMenu.Root className='visible xl:hidden relative z-10 w-screen overflow-x-auto'>
                <NavigationMenu.List className="container mx-auto px-4 m-0 flex list-none bg-white gap-4 items-center whitespace-nowrap">
                    {mobileMenu.menuItems.map((menuItem,index)=>(
                        <NavigationMenu.Item key={index}>
                            <NavigationMenu.Trigger className="group px-1 flex flex-shrink-0 select-none items-center justify-between gap-0.5 whitespace-nowrap text-[12px] font-medium leading-10 lg:leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] ">
                                <Link to='#'>{menuItem.label}</Link>
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                    ))}
                </NavigationMenu.List>
            </NavigationMenu.Root>

            {/*Desktop Version */}
                <NavigationMenu.Root className="hidden xl:grid relative z-10 flex w-screen">
                    <NavigationMenu.List className="container mx-auto px-4 center m-0 flex list-none bg-white gap-7 items-center">
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
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
                            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
                                RX LENSES{" "}
                                <CaretDownIcon
                                    className="relative h-6 w-6 hover:text-primary transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                                    aria-hidden
                                />
                            </NavigationMenu.Trigger>
                            {/* Full-screen Navigation Content */}
                            <NavigationMenu.Content
                                className="absolute py-5 top-full left-0 w-screen bg-white text-primary border-t-[1px] border-b-[1px]">
                                <div className="container mx-auto px-4 text-black">
                                    <div className="grid grid-cols-5 gap-0">
                                        {Object.keys(rxLenses).map((rxLense, index) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <div className='flex flex-col items-start gap-4'>
                                                <h4 className='font-bold text-[15px]' key={index}>{rxLenses[rxLense].listLabel}</h4>
                                                <div className="flex flex-col">
                                                    {rxLenses[rxLense].listItem.map((item)=>(
                                                        <Link to='#' className='text-sm leading-[37px] tracking-tighter text-left block hover:text-primary'>{item}</Link>
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
                                className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
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
                                className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
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
                            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
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
                            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
                                ACCESSORIES
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
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
                            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded text-sm font-thin font-medium leading-[60px] outline-none hover:text-primary focus:shadow-[0_0_0_2px] focus:shadow-none">
                                CONTACT US
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>
        </div>
    );
};

export default NavigationMenuDemo;

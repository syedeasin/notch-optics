import {IoLockClosedSharp, IoMailSharp} from "react-icons/io5";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import {Link} from "react-router-dom";
import {TfiEmail} from "react-icons/tfi";
import {PiPasswordLight} from "react-icons/pi";

const Login = () => {
    return (
        <div className="pt-20 pb-24 bg-primaryBackground">
            <div className="container mx-auto">
                <div className="bg-white mx-[281px] space-y-4">
                    <div role="tablist" className="tabs tabs-bordered w-full">
                        <Tabs defaultValue="login" className="w-full">
                            <TabsList className="w-full flex">
                                <TabsTrigger
                                    value="login"
                                    className="w-1/2 py-3 border-b-2 border-gray-200 data-[state=active]:border-primary text-md data-[state=active]:text-primary data-[state=active]:font-bold uppercase text-black font-medium">
                                    Login</TabsTrigger>
                                <TabsTrigger
                                    value="register"
                                    className="w-1/2 py-3 border-b-2 border-gray-200 data-[state=active]:border-primary text-md data-[state=active]:text-primary data-[state=active]:font-bold uppercase text-black font-medium"
                                >
                                    Register
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <div className="px-[118px] py-12 h-[450px] space-y-8">
                                    <div className='space-y-[80px]'>
                                        <div className='space-y-10'>
                                            <label
                                                className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                                                <TfiEmail className='text-md group-focus-within:text-primary'/>
                                                <input type="text" className="grow" placeholder="Email Address *"/>
                                            </label>
                                            <label
                                                className="flex input input-bordered outline-offset-0 input-borderGray rounded-none h-14 items-center gap-4 group">
                                                <PiPasswordLight className='text-md group-focus-within:text-primary'/>
                                                <input type="password" className="grow" placeholder="Password *"/>
                                            </label>
                                        </div>
                                        <div className='flex flex-row justify-between'>
                                            <label className="md:w-2/3 text-gray-500 font-bold flex items-center">
                                                <input className="mr-3 w-5 h-5 accent-primary border-borderGray" type="checkbox"/>
                                                <span
                                                    className="text-[#949494] text-regular font-normal">Remember Me</span>
                                            </label>
                                            <Link to='./'><span
                                                className='text-black hover:text-primary text-sm font-normal underline'>Forgot Your Password?</span></Link>
                                        </div>
                                    </div>
                                    <button
                                        className='w-full bg-primary h-14 text-4xl text-white hover:bg-primaryHover'>Sign
                                        In
                                    </button>
                                </div>

                            </TabsContent>
                            <TabsContent value="register">
                                <div className='px-24 py-12 h-[450px]'>
                                    Change your password here.
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

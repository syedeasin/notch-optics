import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";

import LoginForm from "../../components/LoginForm.jsx";
import RegisterForm from "../../components/RegisterForm.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const LoginRegister = () => {
    const [activeTab, setActiveTab] = useState("login");

    const location = useLocation()
    console.log(location);
    useEffect(() => {
        if (location.hash === "#register") {
            setActiveTab("register");
        } else {
            setActiveTab("login");
        }
    }, [location.hash]);

    return (
        <div className="pt-20 pb-24 bg-primaryBackground">
            <div className="container mx-auto">
                <div className="bg-white mx-[281px] space-y-4">
                    <div role="tablist" className="tabs tabs-bordered w-full">
                        <Tabs  value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="w-full flex">
                                <TabsTrigger
                                    value="login"
                                    className="w-1/2 py-3 border-b-2 border-gray-200 data-[state=active]:border-primary text-md data-[state=active]:text-primary data-[state=active]:font-bold uppercase text-black font-medium">
                                    Login</TabsTrigger>
                                <TabsTrigger
                                    id="register"
                                    value="register"
                                    className="w-1/2 py-3 border-b-2 border-gray-200 data-[state=active]:border-primary text-md data-[state=active]:text-primary data-[state=active]:font-bold uppercase text-black font-medium"
                                >
                                    Register
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <div className="px-[118px] py-12">
                                    <LoginForm/>
                                </div>
                            </TabsContent>
                            <TabsContent value="register">
                                <div className='px-[118px] py-12'>
                                    <RegisterForm/>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;

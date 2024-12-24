const AccountInfo = () => {

    return (
        <div>
            <div className='p-8 space-y-4'>
                <h3>My Profile</h3>

                <div className='flex flex-row gap-4 border p-8 rounded-2xl'>
                    <div className='w-12 h-12 bg-red-400 rounded-2xl flex items-center justify-center'>A
                    </div>
                    <div className='flex flex-col gap-0 w-full'>
                        <h3 className='text-md leading-5 font-bold'>Syed Mohammad Easin</h3>
                        <p>Role: Administrator</p>
                    </div>
                    <button>xx</button>
                </div>

                <div className='flex flex-col gap-4 border p-8 rounded-2xl'>
                    <div className="flex justify-between">
                        <h3>Personal Information</h3>
                        <button>xx</button>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-row w-full'>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>First Name</h5>
                                <h5 className='text-regular'>Syed Mohammad</h5>
                            </div>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>Last Name</h5>
                                <h5 className='text-regular'>Easin</h5>
                            </div>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>Email Address</h5>
                                <h5 className='text-regular'>syedeasin1000@gmail.com</h5>
                            </div>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>Phone</h5>
                                <h5 className='text-regular'>+880 19411 99607</h5>
                            </div>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>Bio</h5>
                                <h5 className='text-regular'>Administrator</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Address */}
                <div className='flex flex-col gap-4 border p-8 rounded-2xl'>
                    <div className="flex justify-between">
                        <h3>Address</h3>
                        <button>Edit</button>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-row w-full'>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>Country</h5>
                                <h5 className='text-regular'>Bangladesh</h5>
                            </div>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>City/State</h5>
                                <h5 className='text-regular'>Dhaka</h5>
                            </div>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>Postal Code</h5>
                                <h5 className='text-regular'>1349</h5>
                            </div>
                            <div className='w-1/2'>
                                <h5 className='text-sm text-accentGray'>TAX ID</h5>
                                <h5 className='text-regular'>AS1234NFQR34</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
import {useState} from "react";
import AccountInfo from "./AccountInfo.jsx";
import AddNewProduct from "./AddNewProduct.jsx";

const Account = () => {
    const [accountMenuToggle, setAccountMenuToggle] = useState(true);
    const [shopMenuToggle, setShopMenuToggle] = useState(false);
    const [editMenuToggle, setEditMenuToggle] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('AccountInfo');

    return (
        <div>
            <div className='py-20 bg-primaryBackground'>
                <div className="container mx-auto flex space-x-16">
                    <div className='menu-items flex-none w-1/4'>
                        <h2 className='leading-10'>My Account</h2>
                        <ul className="menu w-full mt-8 p-0">
                            <li>
                            <span className="menu-dropdown-toggle" onClick={() => {
                                setAccountMenuToggle(!accountMenuToggle);
                                setShopMenuToggle(false);
                                setEditMenuToggle(false);
                            }}>Account</span>
                                <ul className={accountMenuToggle ? '' : 'menu-dropdown'}>
                                    <li onClick={() => setSelectedMenu('AccountInfo')}><a>Account Information</a></li>
                                    <li><a>Shipping Address</a></li>
                                    <li><a>Billing Address</a></li>
                                </ul>
                            </li>
                            <li>
                            <span className="menu-dropdown-toggle" onClick={() => {
                                setAccountMenuToggle(false);
                                setShopMenuToggle(!shopMenuToggle);
                                setEditMenuToggle(false);
                            }}>Shop</span>
                                <ul className={shopMenuToggle ? '' : 'menu-dropdown'}>
                                    <li onClick={() => setSelectedMenu('AllProducts')}><a>All Products</a></li>
                                    <li onClick={() => setSelectedMenu('AddNewProduct')}><a>Add New Product</a></li>
                                    <li onClick={() => setSelectedMenu('BulkUpload')}><a>Product Bulk Upload</a></li>
                                    <li onClick={() => setSelectedMenu('MyWishlist')}><a>My Wishlist</a></li>
                                    <li onClick={() => setSelectedMenu('MyOrders')}><a>My Orders</a></li>
                                </ul>
                            </li>
                            <li><a>Users</a></li>
                            <li>
                            <span className="menu-dropdown-toggle" onClick={() => {
                                setAccountMenuToggle(false);
                                setShopMenuToggle(false);
                                setEditMenuToggle(!editMenuToggle);
                            }}>Shop</span>
                                <ul className={editMenuToggle ? '' : 'menu-dropdown'}>
                                    <li><a>Edit Information</a></li>
                                    <li><a>Edit Password</a></li>
                                    <li><a>Delete Account</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className='menu-contents flex-grow bg-white'>
                        {selectedMenu === 'AccountInfo' && <AccountInfo />}
                        {selectedMenu === 'AddNewProduct' && <AddNewProduct />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
// import React from 'react'
// import { LiaMarkdown } from 'react-icons/lia';
// import { MdOutlineHome } from "react-icons/md";
// import { MdAddCircle } from "react-icons/md";
// import { FaCartShopping } from "react-icons/fa6";
// import { HiOutlineClipboardList } from "react-icons/hi";
// import { FaRegUserCircle } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// import useLogout from '../hooks/useLogout';

// const AdminDashboard = () => {

//     const {logout} = useLogout()
//   const navigate = useNavigate()
//     return (
//         <div className='h-screen w-full'>
//             <div className="w-full h-15 bg-[#02473b] flex items-center justify-between fixed">
//                 <h3 className="text-white font-sans font-semibold text-2xl pl-7 ">Woodspire</h3>
//                 <button 
//                   onClick={logout}
                  
//                  className='w-20 h-9 rounded-xl text-md text-white bg-emerald-700 hover:bg-emerald-600 shadow-xl hover:scale-105 duration-300'>
//                         LogOut
//                     </button>
//             </div>

//             <div className='flex'>

//                 <div className='w-70 h-screen bg-[#02473b] flex justify-center items-center '>
//                     <div className='w-60 h-110 bg-[#035a4b] opacity-90 gap-5 flex flex-col items-center text-center justify-center rounded-r-xl border-2 border-[#004e08] shadow-gray-900 shadow-2xl'>

//                         {/* <button className='text-white font-medium text-md bg-[#012c25] rounded-xl w-50 h-10 border-[#0fd723] border-2 text-center hover:cursor-pointer hover:scale-105 duration-500 hover:bg-[#00ff1a]' > Dashboard</button> */}



//                         <button onClick={()=>navigate('/admin/category')}  className='text-white font-medium text-md bg-[#012c25] border-[#0fd723] border-2 rounded-xl w-50 h-10 hover:cursor-pointer hover:scale-105 duration-500 hover:bg-[#00ff1a]'>manage category</button>
//                         <button onClick={()=>navigate('/admin/products')} className='text-white font-medium text-md bg-[#012c25] border-[#0fd723] border-2 rounded-xl w-50 h-10 hover:cursor-pointer hover:scale-105 duration-500 hover:bg-[#00ff1a]'>manage product</button>
//                         <button onClick={()=>navigate('/admin/users')}   className='text-white font-medium text-md bg-[#012c25] border-[#0fd723] border-2 rounded-xl w-50 h-10 hover:cursor-pointer hover:scale-105 duration-500 hover:bg-[#00ff1a]'>manage User</button>
//                         <button onClick={()=>navigate('/admin/orders')}className='text-white font-medium text-md bg-[#012c25] border-[#0fd723] border-2 rounded-xl w-50 h-10 hover:cursor-pointer hover:scale-105 duration-500 hover:bg-[#00ff1a]'>manage Order</button>
//                     </div>


//                 </div>


//                 <div className='mt-15 p-10  '>



//                     <h1 className='text-2xl font-semibold font-mono pl-10 '>Admin Dashboard   </h1>

//                     <div className='flex gap-15'>

//                         <div onClick={()=>navigate('/createCategory')} className='w-100 h-55  rounded-xl mt-15 border-2 border-[#e0e5e1] shadow-gray-700 shadow-2xl hover:transform hover:scale-105 duration-500 '>
//                             <MdAddCircle size={50} className='text-[#0fbe2f] ' />
//                             <p className='text-3xl font-semibold pl-10'>  Create Catogory</p>
//                             <p className='pl-10 p-3 text-[#0fbe2f]'>Quickly add new product group.</p>

//                             <button className='pl-10 text-[#012c25] p-5 font-semibold hover:cursor-pointer hover:transform hover:scale-105 duration-500'>Start Now</button>

//                         </div>
//                         <div onClick={()=>navigate('/admin/addproducts')} className='w-100 h-55  rounded-xl mt-15 border-2 border-[#e0e5e1] shadow-gray-700 shadow-2xl hover:transform hover:scale-105 duration-500'>
//                             <FaCartShopping  size={45} className='text-cyan-400 p-1' />
//                             <p className='text-3xl font-semibold pl-10'> Add product</p>
//                             <p className='pl-10 p-3 text-cyan-400'>List new item for sale.</p>

//                             <button className='pl-10 text-[#012c25] p-5 font-semibold hover:cursor-pointer hover:transform hover:scale-105 duration-500'>Add New Product</button>

//                         </div>
                        
//                     </div>

//                     <div className='flex gap-15'>
//                         <div className='w-100 h-55  rounded-xl mt-15 border-2 border-[#e0e5e1] shadow-gray-700 shadow-2xl hover:transform hover:scale-105 duration-500'>
//                             <HiOutlineClipboardList  size={50} className='text-amber-600  ' />
//                             <p className='text-3xl font-semibold pl-10'>Orders</p>
//                             <p className='text-2xl text-amber-600 font-bold pl-10'>210 <br />Total orders</p>
                            

//                             <button className='pl-10 text-[#012c25] p-5 font-semibold hover:cursor-pointer hover:transform hover:scale-105 duration-500'>View All Orders</button>

//                         </div>

//                          <div onClick={()=>navigate('/admin/users')} className='w-100 h-55  rounded-xl mt-15 border-2 border-[#e0e5e1] shadow-gray-700 shadow-2xl hover:transform hover:scale-105 duration-500'>
//                             <FaRegUserCircle size={45} className='text-indigo-600 p-1 ' />
//                             <p className='text-3xl font-semibold pl-10'>Users</p>
//                             <p className='text-2xl text-indigo-600 font-bold pl-10'> 100 <br />Registed Users</p>
                           

//                             <button className='pl-10 text-[#012c25] p-5 font-semibold hover:cursor-pointer hover:transform hover:scale-105 duration-500 '>Manage Users</button>

//                         </div>
//                     </div>



//                 </div>
//             </div>




//         </div>

//     )
// }

// export default AdminDashboard

import React from 'react';
import { LiaMarkdown } from 'react-icons/lia';
import { MdOutlineHome, MdAddCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6"; 
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa"; // 💡 CORRECTED: FaRegUserCircle is typically in 'fa' or 'fa5'
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

const AdminDashboard = () => {
    const { logout } = useLogout();
    const navigate = useNavigate();

    // Helper component for responsive sidebar links
    const SidebarLink = ({ icon: Icon, text, onClick }) => (
        <button 
            onClick={onClick} 
            className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 p-2 md:p-3 text-white font-medium text-sm md:text-md 
                       bg-[#012c25] border-[#0fd723] border-2 rounded-xl w-14 h-14 md:w-56 md:h-12 
                       hover:cursor-pointer hover:scale-105 duration-300 hover:bg-[#00ff1a] hover:text-black transition-all'>
            <Icon size={24} className="min-w-[24px]" />
            <span className='hidden md:inline-block'>{text}</span>
        </button>
    );

    // Helper component for dashboard stat/action cards
    const DashboardCard = ({ icon: Icon, title, description, actionText, iconColor, navigateTo }) => (
        <div 
            onClick={() => navigateTo && navigate(navigateTo)} 
            className={`w-full md:w-[350px] lg:w-[400px] h-auto p-4 rounded-xl mt-6 
                       border-2 border-[#e0e5e1] shadow-gray-700 shadow-2xl 
                       hover:transform hover:scale-105 duration-500 cursor-pointer transition-all`}>
            
            {/* Title & Icon */}
            <div className='flex items-center gap-4'>
                <Icon size={40} className={`${iconColor}`} />
                <p className='text-xl md:text-2xl font-semibold'>{title}</p>
            </div>
            
            {/* Description */}
            <p className={`mt-2 p-1 text-sm md:text-md ${iconColor}`}>{description}</p>

            {/* Metric for Orders/Users */}
            {(title === 'Orders' || title === 'Users') && (
                <p className={`text-xl md:text-2xl ${iconColor} font-bold mt-2`}> 
                    {title === 'Orders' ? '210' : '100'} 
                    <br />
                    {title === 'Orders' ? 'Total orders' : 'Registered Users'}
                </p>
            )}

            {/* Action Button */}
            <button className='mt-4 text-[#012c25] p-2 font-semibold hover:transform hover:scale-105 duration-500'>
                {actionText}
            </button>
        </div>
    );


    return (
        <div className='min-h-screen w-full flex flex-col'>
            {/* Header (Fixed) */}
            <div className="w-full h-16 bg-[#02473b] flex items-center justify-between fixed top-0 left-0 z-20 p-4">
                <h3 className="text-white font-sans font-bold text-xl md:text-2xl pl-3 md:pl-7">Woodspire</h3>
                <button 
                    onClick={logout}
                    className='w-20 h-9 rounded-xl text-md text-white bg-emerald-700 hover:bg-emerald-600 shadow-xl hover:scale-105 duration-300 mr-3 md:mr-7 transition-all'>
                    LogOut
                </button>
            </div>

            <div className='flex flex-1 pt-16'> {/* Added pt-16 to offset fixed header */}

                {/* Sidebar (Fixed and Responsive) */}
                <div className='w-20 md:w-60 min-h-[calc(100vh-64px)] bg-[#02473b] fixed left-0 top-16 z-10 flex flex-col items-center p-3 gap-4'>
                    <div className='flex flex-col items-center gap-4 mt-5 w-full'>
                        {/* Note: Added /admin for dashboard link consistency */}
                        <SidebarLink icon={MdOutlineHome} text="Dashboard" onClick={() => navigate('/admin')} />
                        <SidebarLink icon={LiaMarkdown} text="Manage Category" onClick={() => navigate('/admin/category')} />
                        <SidebarLink icon={FaCartShopping} text="Manage Products" onClick={() => navigate('/admin/products')} />
                        <SidebarLink icon={FaRegUserCircle} text="Manage Users" onClick={() => navigate('/admin/users')} />
                        <SidebarLink icon={HiOutlineClipboardList} text="Manage Orders" onClick={() => navigate('/admin/orders')} />
                    </div>
                </div>

                {/* Main Content Area (Offset by sidebar width) */}
                <div className='flex-1 ml-20 md:ml-60 p-4 md:p-10'> 
                    <h1 className='text-2xl md:text-3xl font-semibold font-mono mb-6 md:mb-10'>
                        Admin Dashboard 
                    </h1>

                    <div className='flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 lg:gap-16'>

                        {/* Card 1: Create Category */}
                        <DashboardCard 
                            icon={MdAddCircle}
                            title="Create Category"
                            description="Quickly add new product group."
                            actionText="Start Now"
                            iconColor="text-[#0fbe2f]"
                            navigateTo="/createCategory"
                        />

                        {/* Card 2: Add Product */}
                        <DashboardCard 
                            icon={FaCartShopping}
                            title="Add Product"
                            description="List new item for sale."
                            actionText="Add New Product"
                            iconColor="text-cyan-400"
                            navigateTo="/admin/addproducts"
                        />
                        
                        {/* Card 3: Orders */}
                        <DashboardCard 
                            icon={HiOutlineClipboardList}
                            title="Orders"
                            description="Manage incoming and existing orders."
                            actionText="View All Orders"
                            iconColor="text-amber-600"
                            navigateTo="/admin/orders"
                        />
                        
                        {/* Card 4: Users */}
                        <DashboardCard 
                            icon={FaRegUserCircle}
                            title="Users"
                            description="View and manage registered users."
                            actionText="Manage Users"
                            iconColor="text-indigo-600"
                            navigateTo="/admin/users"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
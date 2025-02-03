/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
import { SidebarIcon } from './components/sidebar/icons/sidebarIcon'
import { SidebarClass1 } from './components/sidebar/Sidebar1'
import { SettingIcon } from './components/sidebar/icons/settingicon';
import { HomeIcon } from './components/sidebar/icons/Homeicon';
import { WebinarIcon } from './components/sidebar/icons/webinaricon';
import { BillingIcon } from './components/sidebar/icons/billingicon';
import { UserManagementIcon } from './components/sidebar/icons/userManagementicon';
import { Headers1 } from './components/sidebar/icons/logo';


function App() {
  const [sideOpen,setSideOpen]=useState(true);

  return<div className='flex  '>
    <Sidebar  sideOpen={sideOpen} setSideOpen={setSideOpen}></Sidebar>
    <MainContent sideOpen={sideOpen}></MainContent>
   
    
  </div>

}
function Sidebar({sideOpen,setSideOpen}){
  if(!sideOpen){
return<div className='h-screen w-10  shadow-gray-700 shadow-lg '>
   <CloseSideBarContent sideOpen={sideOpen} setSideOpen={setSideOpen}><SidebarIcon/></CloseSideBarContent>
   <CloseSideBarContent ><HomeIcon/></CloseSideBarContent>
   <CloseSideBarContent ><WebinarIcon/></CloseSideBarContent>
   <CloseSideBarContent ><BillingIcon/></CloseSideBarContent>
   <CloseSideBarContent ><UserManagementIcon/></CloseSideBarContent>
   <CloseSideBarContent ><SettingIcon/></CloseSideBarContent>


</div>
  }
 
  return<div className='h-screen w-64 bg-white p-2 absolute md:relative z-50 shadow-gray-700 shadow-lg'>
      <OpenSidebarContent sideOpen={sideOpen} setSideOpen={setSideOpen} label= {<Headers1></Headers1>}><SidebarIcon/></OpenSidebarContent>
      <OpenSidebarContent label="Home"><HomeIcon/></OpenSidebarContent>
      <OpenSidebarContent label="Webinar"><WebinarIcon/></OpenSidebarContent>
      <OpenSidebarContent label="Billing"><BillingIcon/></OpenSidebarContent>
      <OpenSidebarContent label="User Management"><UserManagementIcon/></OpenSidebarContent>
      <OpenSidebarContent label="setting"><SettingIcon/></OpenSidebarContent>

  </div>
}

function OpenSidebarContent({setSideOpen,sideOpen,children,label}){
  
  return<>
   <div className='flex justify-between mb-3  hover:bg-slate-200 hover:text-blue-600 '>
   <span className=' h-6 ' >{label}</span>
<span className='cursor-pointer hover:bg-slate-200' onClick={()=>{
 setSideOpen(!sideOpen);
}}>
 {children}
</span>

</div>
  </>
}
function CloseSideBarContent({setSideOpen,sideOpen,children}){
  return<>
  <div className='cursor-pointer hover:bg-slate-200 mb-3 ' onClick={()=>{
        setSideOpen(!sideOpen);
       }}>{children}</div>
  </>
}
function MainContent(){
  return<div className='w-full ' >
    <div className='bg-black h-32 hidden md:block'></div>
    <div className='grid grid-cols-12  gap-4 p-8  '>
       <div className='bg-pink-200  md:col-span-2 col-span-12 h-96 rounded-xl -translate-y-20  hidden md:block '></div>
       <div className='md:col-span-6 col-span-12'>
       <div className= ' w-64 h-24 bg-orange-300 p-4 rounded-xl  '>
        <div>Monday,14 October</div>
        <div className='text-blue-800 text-xl'>Good morning,Priyanshi!</div>
      
       </div>
       <div className='bg-green-500 h-96  rounded-xl translate-y-8  '>hello</div>
       </div>
       <div className='bg-blue-200 md:col-span-3 col-span-12 h-44 translate-y-8 rounded-xl md:translate-y-32 '>jiii</div>

    </div>
    
     
  </div>
}

export default App

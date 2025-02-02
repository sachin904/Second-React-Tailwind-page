/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
import { SidebarIcon } from './components/sidebar/icons/sidebarIcon'
import { SidebarClass1 } from './components/sidebar/Sidebar1'

function App() {
  const [sideOpen,setSideOpen]=useState(true);
  return<div className='flex '>
    <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen}></Sidebar>
    <MainContent sideOpen={sideOpen}></MainContent>
  </div>

}
function Sidebar({sideOpen,setSideOpen}){
  if(!sideOpen){
return<div>
  
</div>
  }
 
  return<div className='h-screen w-64 bg-red-200'>
    <SidebarIcon></SidebarIcon>

  </div>
}
function MainContent(){
  return<div className='w-full'>
    <div className='bg-black h-32'></div>
    <div className='grid grid-cols-12 gap-8 p-8  '>
       <div className='bg-pink-200 col-span-2 h-96 rounded-xl -translate-y-20'></div>
       
       <div className='bg-green-500 col-span-6 h-96  rounded-xl'></div>
       <div className='bg-blue-200 col-span-3 h-44  rounded-xl'></div>

    </div>
     
  </div>
}

export default App

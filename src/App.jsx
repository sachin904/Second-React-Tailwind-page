/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-constant-condition */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
import { SidebarIcon } from './components/sidebar/icons/sidebarIcon'

import { SettingIcon } from './components/sidebar/icons/settingicon';
import { HomeIcon } from './components/sidebar/icons/Homeicon';
import { WebinarIcon } from './components/sidebar/icons/webinaricon';
import { BillingIcon } from './components/sidebar/icons/billingicon';
import { UserManagementIcon } from './components/sidebar/icons/userManagementicon';
import { Headers1 } from './components/sidebar/icons/logo';
import { CalendarIcon } from './components/sidebar/icons/calendaricon';
import { JoinWebinarIcon } from './components/sidebar/icons/joinWebinaricon';
import { OpenRecordingIcon } from './components/sidebar/icons/openRecordingicon';
import { ProfileContent } from './components/maincontent/prifileComponent';
import { VideoStatusIcon } from './components/sidebar/icons/videoStatusIcon';

import DatePicker from './components/maincontent/datepicker';


function App() {
  const [sideOpen, setSideOpen] = useState(true);

  return <div className='flex  '>
    <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen}></Sidebar>
    <MainContent sideOpen={sideOpen}></MainContent>


  </div>

}
function Sidebar({ sideOpen, setSideOpen }) {
  if (!sideOpen) {
    return <div className='transform-all duration-200 ease-in-out h-screen w-10  shadow-gray-700 shadow-lg '>
      <CloseSideBarContent sideOpen={sideOpen} setSideOpen={setSideOpen}><SidebarIcon /></CloseSideBarContent>
      <CloseSideBarContent ><HomeIcon /></CloseSideBarContent>
      <CloseSideBarContent ><WebinarIcon /></CloseSideBarContent>
      <CloseSideBarContent ><BillingIcon /></CloseSideBarContent>
      <CloseSideBarContent ><UserManagementIcon /></CloseSideBarContent>
      <CloseSideBarContent ><SettingIcon /></CloseSideBarContent>


    </div>
  }

  return <div className='transform-all duration-200 ease-in-out h-screen w-64 bg-white p-2 absolute md:relative z-50 shadow-gray-700 shadow-lg'>
    <OpenSidebarContent sideOpen={sideOpen} setSideOpen={setSideOpen} label={<Headers1></Headers1>}><SidebarIcon /></OpenSidebarContent>
    <OpenSidebarContent label="Home"><HomeIcon /></OpenSidebarContent>
    <OpenSidebarContent label="Webinar"><WebinarIcon /></OpenSidebarContent>
    <OpenSidebarContent label="Billing"><BillingIcon /></OpenSidebarContent>
    <OpenSidebarContent label="User Management"><UserManagementIcon /></OpenSidebarContent>
    <OpenSidebarContent label="setting"><SettingIcon /></OpenSidebarContent>

  </div>
}

function OpenSidebarContent({ setSideOpen, sideOpen, children, label }) {

  return <>
    <div className='flex justify-between mb-3  hover:bg-slate-200 hover:text-blue-600 '>
      <span className=' h-6 ' >{label}</span>
      <span className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setSideOpen(!sideOpen);
      }}>
        {children}
      </span>

    </div>
  </>
}
function CloseSideBarContent({ setSideOpen, sideOpen, children }) {
  return <>
    <div className='cursor-pointer hover:bg-slate-200 mb-3 ' onClick={() => {
      setSideOpen(!sideOpen);
    }}>{children}</div>
  </>
}
function MainContent() {
  const [schedules, setSchedule] = useState([{
    key: 1,
    time: "11:30 AM",
    status: "live",
    Title: "UX Webinar"
  },
  {
    key: 1,
    time: "11:30",
    status: "upcoming",
    Title: "My First Webinar"
  },
  {
    key: 1,
    time: "11:30",
    status: "upcoming",
    Title: "Important Webinar"
  },
  {
    key: 1,
    time: "11:30",
    status: "upcoming",
    Title: "Webinar 1"
  }

  ]);

  const scheduleComponents = schedules.map(schedule =>
    // eslint-disable-next-line react/jsx-key
    <ScheduleComponents
      time={schedule.time}
      status={schedule.status}
      Title={schedule.Title}
    />
  )

  // eslint-disable-next-line no-unused-vars
  const [users, setUser] = useState([{
    image: "/src/profileImage/photo.png",
    name1: "Priyanshi Kaur",
    email: "priyanshi@gmail.com",
    mobile: 9832678277,
    address: "Delhi,India"
  }]);
  const profileComponents = users.map(user => (
    // eslint-disable-next-line react/jsx-key
    <ProfileContent
      image={user.image}
      name1={user.name1}
      email={user.email}
      mobile={user.mobile}
      address={user.address} />

  ));
  return <div className='w-full ' >
    <div className=' h-32 hidden md:block bg-cover bg-[url(/src/profileImage/bakground.jpg)]'> </div>
    <div className='grid grid-cols-12  gap-4 p-8  '>
      <div className='bg-white  shadow-gray-400 font-semibold shadow-lg  md:col-span-2 col-span-12 h-64 rounded-xl -translate-y-20  hidden md:block transform-all duration-200 p-4 text-center text-[12px]
      '>
        {profileComponents}
      </div>
      <div className='md:col-span-6 col-span-12'>
        <div className=' w-64 h-24p-4 rounded-xl  '>
          <div >Monday,14 October</div>
          <div className='text-blue-800 text-lg font-bold'>Good morning,Priyanshi!</div>

        </div>
        <div className=' h-96  shadow-gray-400 shadow-lg rounded-xl translate-y-8 transform-all duration-200 p-4 '>
          <div className='h-10 w-full bg-gray-100 flex justify-between'>
            <DatePicker />
          </div>
          {scheduleComponents}
        </div>

      </div>
      <div className='bg-white  shadow-gray-400 shadow-lg flex justify-between md:col-span-4 col-span-12 h-44 translate-y-8 rounded-xl md:translate-y-32 transform-all duration-200 p-4 flex-wrap '>
        <div className='h-14 w-16 text-center content-center text-[10px] font-semibold'>
          <div className='ml-4 h-8 mt-2'> <CalendarIcon /></div>
          Schedule a webinar
        </div>
        <div className='h-14 w-16 text-center content-center text-[10px] font-semibold'>
          <div className='ml-4 h-8 mt-2'> <JoinWebinarIcon /></div>
          join a Webinar
        </div>
        <div className='h-14 w-16 text-center content-center text-[10px] font-semibold'>
          <div className='ml-4 h-8 mt-2'><OpenRecordingIcon /></div>
          Open Recording
        </div>

      </div>

    </div>


  </div>
}
function ScheduleComponents({ time, status, Title }) {
  return <>
    <div className='h-14 w-full bg-white my-3 flex justify-start p-1'>
      <div className='h-full w-[10rem] pl-4'>
        <div>{time}</div>
        <div className='text-[12px] '>{time}</div>
      </div>
      <div className='h-full w-[3px] bg-green-300'></div>
      <div className='h-full w-full pl-4 pt-1'>
        <div className='text-[12px] flex '><div>{status}</div> <div className={status === "live" ? 'text-red-600' : 'text-blue-600'}><VideoStatusIcon /> </div></div>
        <div>{Title}</div>
      </div>
    </div>
    <hr />
  </>
}

export default App

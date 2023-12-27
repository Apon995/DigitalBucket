import React from 'react';
import Logo from "../../assets/LogoFolder/Logo.png";

function DashboardNav({ setShowTaskModal, ShowTaskModal }) {
  return (
    <>

      <nav className='py-4 px-[2%] bg-white flex items-center justify-between'>


        <div className='flex items-center gap-10'>
          <div className="flex items-center gap-1">
            <img src={Logo} alt="Logo" className="w-[30px]" />
            <h1 className="font-bold text-xl text-black tracking-widest uppercase">
              DigitalBucket
            </h1>

          </div>
          <div>
            <h1 className='text-black font-bold tracking-tighter text-2xl'>Example Task</h1>
          </div>


        </div>
        <div className='flex flex-row items-center gap-5'>
          <button onClick={() => setShowTaskModal(!ShowTaskModal)} className=' px-4 py-2 rounded-md text-base font-medium text-white hover:opacity-90 active:bg-black bg-[#635fc7]'>+ Add New Task</button>
          <button className='text-gray-500 text-3xl font-medium'><i className="fa-solid fa-ellipsis-vertical"></i></button>
        </div>


      </nav>


      {/* bg-[#f4f7fd]  */}











    </>
  )
}

export default DashboardNav
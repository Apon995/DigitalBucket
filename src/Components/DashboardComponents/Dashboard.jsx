import React, { useState } from 'react'
import DashboardNav from './DashboardNav'
import Boardsvg from '../../assets/LogoFolder/Boardicon.svg'
import AddEditBoardModal from '../Modals/AddEditBoardModal';
import AddEditTask from '../Modals/AddEditTask';



function Dashboard() {
    const [ShowBoardModal, setShowBoardModal] = useState(false);
    const [ShowTaskModal, setShowTaskModal] = useState(false);

    return (
        <div className='max-h-screen overflow-hidden'>
            <header >
                <DashboardNav setShowTaskModal={setShowTaskModal} />
            </header>


            <body className='flex flex-row '>
                {/* ---DasboardSideBar--- */}
                <div className='w-[20%]'>

                    <div style={{ maxHeight: "calc(100vh - 10px)" }} className=' overflow-y-auto '>
                        <div className='mb-5'>
                            <h1 className='uppercase text-base text-gray-600 px-3'>All board (0)</h1>
                        </div>


                        {/* ----Dynamic--Board-- */}

                        {/* bg-[#635fc7] */}
                        <div className='pr-5'>
                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center gap-2 px-3 text-base text-black font-medium py-4 border-2 rounded-r-full  '><img src={Boardsvg} c alt="boardsvg" /> Example Board</li>
                                <li className='flex items-center gap-2 px-3 text-base text-black font-medium py-4 border-2 rounded-r-full  '><img src={Boardsvg} c alt="boardsvg" /> Example Board</li>
                                <li className='flex items-center gap-2 px-3 text-base text-black font-medium py-4 border-2 rounded-r-full  '><img src={Boardsvg} c alt="boardsvg" /> Example Board</li>
                                <li className='flex items-center gap-2 px-3 text-base text-black font-medium py-4 border-2 rounded-r-full  '><img src={Boardsvg} c alt="boardsvg" /> Example Board</li>

                            </ul>
                        </div>





                        <div className='pt-5'>
                            <button onClick={() => setShowBoardModal(!ShowBoardModal)} className='flex items-center mx-auto w-fit gap-1 px-4 py-2 rounded-md text-base font-medium text-white hover:opacity-85 active:bg-black bg-[#635fc7] '><img src={Boardsvg} alt="boardsvg" />Create New Board</button>
                        </div>
                    </div>
                </div>
                {/* ----Dasboard-content--- */}
                <div className='w-[80%] bg-[#f4f7fd] min-h-screen overflow-y-auto' style={{ maxHeight: "calc(100vh - 10px)" }}>
                    <div>

                    </div>
                </div>

                {
                    ShowBoardModal && <AddEditBoardModal setShowBoardModal={setShowBoardModal} />
                }
                {
                    ShowTaskModal && <AddEditTask setShowTaskModal={setShowTaskModal} />
                }
            </body>







        </div>
    )
}

export default Dashboard
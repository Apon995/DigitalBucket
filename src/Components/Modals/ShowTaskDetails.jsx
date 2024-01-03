import React, { useState } from 'react'
import Swal from 'sweetalert2';
import useFetch from '../../CustomHooks/useFetch';
import EditBoardpopup from './EditBoardpopup';


function ShowTaskDetails({ setShowDetails, Rcvobj, setShowTaskModal, refetch ,}) {
 
    const [isTask , setIstask ] = useState(false);
    
    const axiosFetch = useFetch();

    const { ID ,title, status, description } = Rcvobj || {};


    const HandleDelete = () => {
        setShowDetails(false)

        Swal.fire({
            title: "Delete this Todo ?",
            text: `are you sure delete ${title} todo ?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosFetch.delete(`/DeleteTask?ID=${ID}&des=${description}&title=${title}&status=${status}`)
                .then(res => {
                    if(res.data.modifiedCount== 1){
                        Swal.fire({
                            title: "Deleted Task",
                            text: "Successfully Delete Task !",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
        
                        });

                        refetch();

                    }
                })
                .catch(() =>{
                    Swal.fire({
                        title: "Error !",
                        text: "Some thing wrong try Again!",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500,
    
                    });
                })

                
                
            }
        });

    }


  





    return (
        <>

            <>
                <div
                    onClick={(e) => {
                        if (e.target !== e.currentTarget) {
                            return;
                        }

                        setShowDetails(false)

                    }}
                    className="fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown"
                >
                    {/* show Task Modal  */}

                    <div className=" scrollbar-hide overflow-y-scroll max-h-[115vh]  my-auto  bg-white dark:bg-white text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-6  py-8 rounded-xl ">
                        <div className='flex flex-row items-center justify-between'>
                            <div className='w-[90%] text-wrap '>
                                <h3 className=" font-bold text-[#635fc7] text-xl  ">{title || 'Example Task'}?</h3>

                            </div>
                            <div className='w-[10%]'>

                                <button   className='text-gray-600 text-xl '><i className="fa-solid fa-pen-to-square"></i></button>


                            </div>
                        </div>
                        <p className="text-gray-700 font-[600] tracking-wide text-sm pt-6">
                            {description || ''}
                        </p>

                        <div className='pt-5'>
                            <span className="  text-base dark:text-black text-black">
                                Current Status
                            </span>
                            <div className=" w-full mt-2 select-status flex-grow px-4 py-2 rounded-md text-base text-gray-700 border-[2px] outline-none border-gray-600  ">
                                {status || 'Todo'}
                            </div>

                        </div>

                        <div className=" flex w-full mt-8 items-center justify-center space-x-4 ">
                            <button onClick={HandleDelete} className="w-full items-center text-white hover:opacity-75 bg-red-500 py-2 rounded-full">
                                Delete
                            </button>
                            <button
                                onClick={() => setShowDetails(false)}
                                className="w-full items-center text-[#635fc7] hover:opacity-75 bg-[#635fc71a]  py-2 rounded-full">
                                Cancel
                            </button>
                        </div>



                    </div>

                </div>



               

            </>











        </>
    )
}

export default ShowTaskDetails
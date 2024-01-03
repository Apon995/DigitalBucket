import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";


function AddEditTask({ setShowTaskModal, isActive }) {

    const [data, setData] = useState();
    const axiosFetch = useFetch();
    useEffect(() => {

        if (isActive) {
            axiosFetch.get(`/Todo?ID=${isActive}`)
                .then((res) => {
                    setData(res?.data)
                })
                .catch(error => {
                    console.log(error);
                })

        }


    }, [isActive])





    const HandleSubmit = (e) => {
        e.preventDefault();


        const from = new FormData(e.currentTarget);


        const TaskName = from.get('Task')
        const Description = from.get('description');
        const status = from.get('status')

        const BoardName = data?.BoardName;

        const obj = {
            "title": TaskName,
            "description": Description,
            "status": status
        };


        axiosFetch.put(`/Todo?ID=${isActive}&BoardName=${BoardName}&status=${status}`, obj)
            .then(res => {

                console.log(res.data)
                if (res?.data?.modifiedCount == 1) {
                    Swal.fire({
                        title: "Added Task",
                        text: "Successfully Added Task !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,

                    });
                    setShowTaskModal(false)


                }
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        title: "Error !",
                        text: "Some thing wrong try Again!",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500,

                    });
                }
            })



    }








    return (
        <div
            className=" py-6 px-6 pb-40  absolute overflow-y-scroll  left-0 flex  right-0 bottom-0 top-0 dropdown "
            onClick={(e) => {
                if (e.target !== e.currentTarget) {

                    return
                }
                setShowTaskModal(false)
            }}


        >
            {/* Modal Section */}

            <div
                className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white dark:bg-white text-black dark:text-black font-bold
       shadow-lg shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl"
            >
                <h3 className="text-lg text-black font-semibold ">
                    Task
                </h3>

                {/* Task Name */}

                <form onSubmit={HandleSubmit}>
                    <div className="mt-8 flex flex-col space-y-1">
                        <label className="  text-sm dark:text-black text-black font-normal">
                            Task Name
                        </label>
                        <input

                            id="Task"
                            name="Task"
                            type="text"
                            required
                            className=" bg-transparent  px-4 py-2 outline-none  rounded-md text-sm  border-[2px] border-gray-600 focus:border-[#635fc7] "
                            placeholder=" e.g Take coffee break"
                        />
                    </div>

                    {/* Description */}
                    <div className="mt-8 flex flex-col space-y-1">
                        <label className="  text-sm dark:text-black  text-black">
                            Description
                        </label>
                        <textarea

                            id="description"
                            name="description"
                            className=" bg-[#f4f7fd] min-h-[100px]  px-4 py-2 rounded-md text-sm  border-2 border-gray-600  focus:border-[#635fc7] placeholder:text-gray-600 font-medium text-black"
                            placeholder="e.g. It's always good to take a break. This 15 minute break will  recharge the batteries a little."
                        />
                    </div>
                    {/* current Status  */}
                    <div className="mt-8 flex flex-col space-y-3">
                        <label className="  text-sm dark:text-black text-black">
                            Current Status
                        </label>

                        <select name="status" id="status" className=" select-status flex-grow px-4 py-2 rounded-md text-sm border-[2px] outline-none border-gray-600 focus:border-[#635fc7] "
                        >
                            {
                                data?.Columns?.map((element, index) => <option key={index} value={element?.columnName}>{element?.columnName}</option>)
                            }


                        </select>
                        <button
                            className=" w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
                        >
                            Create New Task
                        </button>
                    </div>
                </form>
            </div>


            <ToastContainer />
        </div>
    );
}

export default AddEditTask;
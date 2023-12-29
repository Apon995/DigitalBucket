import React, { useState } from "react";


function AddEditTask({ setShowTaskModal }) {








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

                <div className="mt-8 flex flex-col space-y-1">
                    <label className="  text-sm dark:text-black text-black font-normal">
                        Task Name
                    </label>
                    <input

                        id="task-name-input"
                        type="text"
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

                        id="task-description-input"
                        className=" bg-[#f4f7fd] min-h-[100px]  px-4 py-2 rounded-md text-sm  border-2 border-gray-600  focus:border-[#635fc7] placeholder:text-gray-600 font-medium text-black"
                        placeholder="e.g. It's always good to take a break. This 15 minute break will  recharge the batteries a little."
                    />
                </div>
                {/* current Status  */}
                <div className="mt-8 flex flex-col space-y-3">
                    <label className="  text-sm dark:text-black text-black">
                        Current Status
                    </label>

                    <select className=" select-status flex-grow px-4 py-2 rounded-md text-sm border-[2px] outline-none border-gray-600 focus:border-[#635fc7] "
                    >

                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    <button
                        className=" w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
                    >
                        Create New Task
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddEditTask;
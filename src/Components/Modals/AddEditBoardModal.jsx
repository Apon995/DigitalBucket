import React, { useState } from "react";





function AddEditBoardModal({ setShowBoardModal }) {

    return (
        <div
            className="  fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown "

            onClick={(e) => {
                if (e.target !== e.currentTarget) {

                    return
                }
                setShowBoardModal(false)
            }}

        >
            <div
                className=" scrollbar-hide overflow-y-scroll max-h-[95vh] shadow-lg  bg-white dark:bg-white  text-black dark:text-black font-bold
        shadow-[#364e7e1a] max-w-md mx-auto my-auto w-full px-8  py-8 rounded-xl"
            >
                <h3 className=" text-lg ">
                    Board
                </h3>

                {/* Task Name */}

                <div className="mt-4 flex flex-col space-y-1">
                    <label className="  text-sm dark:text-black text-black">
                        Board Name
                    </label>
                    <input
                        className=" bg-transparent  px-4 py-2 rounded-md text-sm border-[2px] outline-none border-gray-600 focus:border-[#635fc7] "
                        placeholder=" e.g Web Design"
                        id="board-name-input"
                    />
                </div>

                {/* Board Columns */}

                <div className="mt-8 flex flex-col space-y-3">
                    <label className=" text-sm dark:text-black text-black">
                        Board Columns
                    </label>

                    <div className=" flex flex-col gap-2 items-center w-full ">
                        <input
                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                            type="text"
                            placeholder="Todo"
                        />
                        <input
                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                            type="text"
                            placeholder="Doing"
                        />
                        <input
                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                            type="text"
                            placeholder="Done"
                        />

                    </div>

                </div>

                <div>

                    <div className="mt-3">
                        <button className=" w-full active:bg-black items-center hover:opacity-85 dark:text-white dark:bg-[#635fc7] mt-8 relative  text-white bg-[#635fc7] py-2 rounded-full"
                        >
                            Add now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEditBoardModal;
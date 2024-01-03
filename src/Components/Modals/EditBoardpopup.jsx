import React from "react";

function EditBoardpopup({
  boardName,
  setEditPopup,
  setType,
  setShowBoardModal,
}) {
  return (
    <>
      <>
        <div
          onClick={(e) => {
            if (e.target !== e.currentTarget) {
              return;
            }
            setEditPopup(false);
          }}
          className="fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown"
        >
          {/* Delete Modal  */}

          <div className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white dark:bg-white text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl ">
            <h3 className=" font-bold text-red-600 text-xl  ">
              Edit this Board?
            </h3>

            <p className="text-gray-700 font-[600] tracking-wide text-sm pt-6">
              Are you sure you want to Edit the {boardName} board? This action
              will be change all columns and your Boards Name .
            </p>

            <div className=" flex w-full mt-4 items-center justify-center space-x-4 ">
              <button
                onClick={() => {
                  setType("edit"), setShowBoardModal(true), setEditPopup(false);
                }}
                className="w-full items-center text-white hover:opacity-75 bg-[#635fc7] py-2 rounded-full"
              >
                Edit
              </button>
              <button
                onClick={() => setEditPopup(false)}
                className="w-full items-center text-[#635fc7] hover:opacity-75 bg-[#635fc71a]  py-2 rounded-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default EditBoardpopup;

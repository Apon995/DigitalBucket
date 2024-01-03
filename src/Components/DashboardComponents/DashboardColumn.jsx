import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import StartOnLoad from "../LoadingComponents/StartOnLoad";
import ShowTaskDetails from "../Modals/ShowTaskDetails";
import AddEditTask from "../Modals/AddEditTask";

function DashboardColumn({ id, Datas, ShowTaskModal , setShowTaskModal  }) {
    const axiosFetch = useFetch();

    const [ShowDetails, setShowDetails] = useState(false);
    const [Rcvobj, setRcvObj] = useState({})




    const {
        isPending,
        error,
        data = [],
        refetch,
    } = useQuery({
        queryKey: ["signleList"],
        queryFn: () => axiosFetch.get(`/Todo?ID=${id}`).then((res) => res?.data),
    });

    useEffect(() => {
        refetch();
    }, [id, Datas, ShowTaskModal]);


    return (
        <>
            <div className="flex  flex-wrap justify-between min-h-screen ">
                {error ? (
                    <div className="flex min-h-screen  w-full justify-center items-center text-xl font-medium text-red-600">
                        Something Worng !
                    </div>
                ) : isPending ? (
                    <StartOnLoad />
                ) : (
                    data?.Columns?.map((element, index) => (
                        <div key={index} className="min-w-[285px]">
                            <div className=" font-semibold flex items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                                <span
                                    className={`rounded-full w-4 h-4 ${element?.id == 3 && "bg-blue-500"
                                        } ${element?.id == 2 && "bg-green-500"}  ${element?.id == 1 && "bg-red-500"
                                        }   `}
                                ></span>
                                {element?.columnName} ({element?.Task?.length})
                            </div>


                            {/* ----columnn-one--- */}

                            {
                                element?.id == 1 && element?.Task?.map((a, index) => <div key={index} onClick={() => {
                                    setShowDetails(!ShowDetails)
                                    setRcvObj({ 'ID': id, 'columnName': element?.columnName, 'title': a?.title, 'status': a?.status, 'description': a?.description })
                                }} draggable={true} className=" max-w-[280px] break-words mt-5 first:my-5 rounded-lg  bg-white  dark:bg-white shadow-[#364e7e1a] py-4 px-3 shadow-lg hover:text-[#635fc7] dark:text-black text-black dark:hover:text-[#635fc7] cursor-pointer ">

                                    <p className=" font-bold tracking-wide ">
                                        {a?.title}

                                    </p>
                                    <p className=" font-bold text-sm tracking-tighter mt-2 text-gray-500">
                                        {a?.status}
                                    </p>
                                </div>)
                            }

                            {/* ----column--two--- */}
                            {
                                element?.id == 2 && element?.Task?.map((a, index) => <div key={index} onClick={() => {
                                    setShowDetails(!ShowDetails)
                                    setRcvObj({ 'ID': id, 'columnName': element?.columnName, 'title': a?.title, 'status': a?.status, 'description': a?.description })
                                }

                                } draggable={true} className="max-w-[280px] break-words mt-5 first:my-5 rounded-lg  bg-white  dark:bg-white shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7] dark:text-black text-black dark:hover:text-[#635fc7] cursor-pointer ">
                                    <p className=" font-bold tracking-wide ">
                                        {a?.title}

                                    </p>
                                    <p className=" font-bold text-sm tracking-tighter mt-2 text-gray-500">
                                        {a?.status}
                                    </p>
                                </div>)
                            }

                            {/* ---column-three--- */}
                            {
                                element?.id == 3 && element?.Task?.map((a, index) => <div key={index} onClick={() => {
                                    setShowDetails(!ShowDetails)
                                    setRcvObj({ 'ID': id, 'columnName': element?.columnName, 'title': a?.title, 'status': a?.status, 'description': a?.description })
                                }

                                } draggable={true} className="max-w-[280px] break-words mt-5 first:my-5 rounded-lg  bg-white  dark:bg-white shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7] dark:text-black text-black dark:hover:text-[#635fc7] cursor-pointer ">
                                    <p className=" font-bold tracking-wide ">
                                        {a?.title}

                                    </p>
                                    <p className=" font-bold text-sm tracking-tighter mt-2 text-gray-500">
                                        {a?.status}
                                    </p>
                                </div>)
                            }

                        </div>


                    ))
                )}
            </div>


            {
                ShowDetails && <ShowTaskDetails refetch={refetch} setShowDetails={setShowDetails} Rcvobj={Rcvobj} setShowTaskModal={setShowTaskModal} />
            }
            {
                ShowTaskModal && <AddEditTask setShowTaskModal={setShowTaskModal} />
            }
        </>
    );
}

export default DashboardColumn;




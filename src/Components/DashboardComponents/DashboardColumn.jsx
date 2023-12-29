import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import useFetch from "../../CustomHooks/useFetch";
import StartOnLoad from "../LoadingComponents/StartOnLoad";

function DashboardColumn({ id, Datas }) {
    const axiosFetch = useFetch();

    const {
        isPending,
        error,
        data = [],
        refetch,
    } = useQuery({
        queryKey: ["signleList"],
        queryFn: () => axiosFetch.get(`/Todo?ID=${id}`).then((res) => res?.data)

    });


    useEffect(() => {
        refetch();


    }, [id, Datas])







    return (
        <>



            <div className="flex  flex-wrap justify-between min-h-screen ">

                {



                    error ? <div className="flex min-h-screen w-full justify-center items-center text-xl font-medium text-red-600">Something Worng !</div> : isPending ? <StartOnLoad /> : data?.Columns?.map(element => <div key={element?.id} className="max-w-[285px] ">
                        <div className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                            <span className={`rounded-full w-4 h-4 ${element?.id == 3 && 'bg-blue-500' } ${element?.id == 2 && 'bg-green-500' }  ${element?.id == 1 && 'bg-red-500' }   `}></span>{element?.columnName} ()
                        </div>


                        <div>
                            <ul>
                                <li><div className="max-w-[280px] first:my-5 rounded-lg  bg-white  dark:bg-white shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7] dark:text-black text-black dark:hover:text-[#635fc7] cursor-pointer ">
                                    <p className=" font-bold tracking-wide ">
                                        Add account management endpoints
                                    </p>
                                    <p className=" font-bold text-xs tracking-tighter mt-2 text-gray-500">
                                        Doing
                                    </p>
                                </div></li>
                            </ul>
                        </div>
                    </div>
                    )

                }





            </div>








        </>
    );
}

export default DashboardColumn;

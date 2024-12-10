import RegistrarHeader from "../../components/RegistrarHeader.jsx";

const RegistrarDashboard = () => {
    return (
        <div>
            <RegistrarHeader />
            <div id="body" className="flex flex-wrap flex-row h-[85vh] w-[100vw] items-center p-[100px] gap-8">
                <div id="leftside" className="flex flex-col gap-5 w-[1100px]">
                    <div id="database" className="border-black border-[3px] px-[4rem] flex flex-col h-[500px] rounded-[50px]">
                        <div id="dbHeader" className="flex justify-between py-[1rem]">
                            <span className="font-bold text-[2rem]">Database</span>
                            <span className="font-semibold text-[1.5rem] underline hover:cursor-pointer">See More</span>
                        </div>
                        <div id="dbBody"></div>
                    </div>
                    <div id="SVP" className="border-black border-[3px] flex flex-col h-[200px] rounded-[50px]"> 
                    </div>
                </div>
                <div id="rightside" className="flex flex-col gap-[55px] justify-between w-[500px]">
                    <div id="verifiedstudents" className="border-black border-[3px] flex flex-col h-[200px] rounded-[40px]">

                    </div>
                    <div id="studentinfo" className="border-black border-[3px] flex flex-col h-[200px] rounded-[40px]">

                    </div>
                    <div id="notice" className="border-black border-[3px] flex flex-col h-[200px] rounded-[40px]">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrarDashboard;
import RegistrarHeader from "../../components/RegistrarHeader.jsx";

const RegistrarDashboard = () => {
    return (
        <div>
            <RegistrarHeader />
            <div id="body" className="flex h-[85vh] w-[100vw]">
                <div id="leftside" className="">
                    <div id="database" className="flex flex-col bg-red-400 border-red-600 border-[5px]">
                        
                    </div>
                    <div id="SVP"> 
                    </div>
                </div>
                <div id="rightside"></div>
            </div>
        </div>
    )
}

export default RegistrarDashboard;
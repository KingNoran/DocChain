import AdminHeader from "../../components/AdminHeader.jsx";


const AdminDashboard = () => {
    return (
        <div>
            <AdminHeader />
            <div id="body" className="flex flex-wrap flex-row h-[85vh] w-[100vw] items-center p-[100px] gap-8">
                <div id="leftside" className="flex flex-col gap-5">

                </div>
                <div id="rightside" className="flex flex-col gap-[55px] justify-between">
                    
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;
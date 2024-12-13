import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import metamaskIcon from "../../assets/metamask-icon.svg";
import HomeButton from "../../components/HomeButton";

const StudentDashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "student") {
      navigate("/login");
    }
  }, [user, navigate]);

  const studentInfo = {
    name: user.name,
    studentId: user.student_number,
    department: user.course
  };

  return user && user.role === "student" ? (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
          <HomeButton destination="/student/dashboard" />
          
          <nav className="flex items-center space-x-8">
            <Link to={`/student/transcript/${studentInfo.studentId}`} className="hidden md:block hover:text-blue-600 transition-all">
              Document
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 hover:text-blue-600 transition-all">
                <span>Profile</span>
              </button>
              <div className="absolute right-0 w-64 p-4 mt-2 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="flex flex-col space-y-2">
                  <span className="font-medium">{studentInfo.name}</span>
                  <span className="text-sm text-gray-600">ID: {studentInfo.studentId}</span>
                  <span className="text-sm text-gray-600">{studentInfo.department}</span>
                  <span className="font-medium ml-auto cursor-pointer" onClick={logout}>Logout</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <IoNotifications className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-all" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section */}
            <div className="flex flex-col flex-grow lg:w-2/3 space-y-8">
              <div className="flex flex-col bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Welcome, {studentInfo.name}!</h2>
                
                <div className="flex flex-col border rounded-xl p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-medium">How's Your Experience?</h3>
                    <p className="text-gray-600">
                      Tell us about it<br />
                      Leave a comment or feedback<br />
                      by scan our QR Code
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="flex items-center justify-center w-56 h-56 border-2 rounded-xl hover:scale-105 transition-transform">
                      <MdOutlineQrCodeScanner className="w-40 h-40 text-gray-700" />
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-600 transition-all"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col lg:w-1/3 space-y-8">
              {/* MetaMask Card */}
              <div className="flex flex-col bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4">MetaMask</h3>
                <div className="flex items-center">
                  <img 
                    src={metamaskIcon} 
                    alt="MetaMask" 
                    className="w-16 h-16 hover:scale-110 transition-transform cursor-pointer" 
                  />
                </div>
              </div>

              {/* Document Card */}
              <div className="flex flex-col bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4">Document</h3>
                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all">
                  <IoMdDocument className="flex-shrink-0 w-12 h-12 p-2 bg-gray-100 rounded-xl text-gray-600" />
                  <Link to={`/student/transcript/${studentInfo.studentId}`}>  
                    <div className="flex flex-col space-y-1">                
                        <span className="font-medium">Updated TOR</span>
                        <span className="text-sm text-gray-600">Date: Jan 24, 2024</span>
                        <span className="text-xs text-gray-500">Public key: f82c5wxt2559xxv</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Verification Card */}
              <div className="flex flex-col bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4">Document Verification</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm">First yet verify please proceed to the school registrar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <nav className="flex flex-wrap justify-center gap-6">
              {['About Us', 'Helpdesk', 'FAQS', 'Privacy', 'Smart Contract'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
                <span
                  key={platform}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer hover:scale-110 transition-all"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
    </div>
  );
};

export default StudentDashboard;
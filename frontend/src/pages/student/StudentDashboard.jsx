import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import metamaskIcon from "../../assets/metamask-icon.svg";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";

const StudentDashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "student") {
      navigate("/login");
    }
  }, [user, navigate]);

  const studentInfo = {
    name: "Ken Reyes",
    studentId: "2024-0001",
    department: "Computer Science"
  };

  return user && user.role === "student" ? (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold italic transform hover:scale-105 transition-transform duration-300">
          Doc. Chain
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">Transaction</a>
          <div className="relative group">
            <div className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
              Profile
            </div>
            <div className="absolute right-0 w-48 bg-white border-2 rounded-lg p-2 hidden group-hover:block shadow-lg">
              <p className="text-sm font-medium">{studentInfo.name}</p>
              <p className="text-xs text-gray-600">ID: {studentInfo.studentId}</p>
              <p className="text-xs text-gray-600">{studentInfo.department}</p>
            </div>
          </div>
          <div className="relative">
            <div className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
              Notifications
            </div>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-2/3">
          <div className="border-2 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold">Welcome, {studentInfo.name}!</h2>
            
            <div className="border-2 rounded-lg p-4 space-y-2">
              <p className="font-medium">How's Your Experience?</p>
              <p className="text-sm text-gray-600">
                Tell us about it<br />
                Leave a comment or feedback<br />
                by scan our QR Code
              </p>
              
              {/* QR Code with animation */}
              <div className="flex justify-center py-4">
                <div className="flex items-center justify-center w-48 h-48 border-2 hover:scale-105 transition-transform duration-300">
                  {/* Replace with actual QR code component */}
                  <MdOutlineQrCodeScanner className=" text-[200px]"/>
                </div>
              </div>
              
              {/* Dots */}
              <div className="flex justify-center space-x-2 pt-4">
                {[1, 2, 3].map((dot) => (
                  <div 
                    key={dot}
                    className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors duration-300"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 space-y-4">
          {/* MetaMask Card */}
          <div className="border-2 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold mb-2">MetaMask</h3>
            <img src={metamaskIcon} alt="MetaMask" className="flex justify-center w-16 h-16 transform hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Transactions Card */}
          <div className="border-2 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold mb-2">Recent Transactions</h3>
            <div className="flex items-start space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
              <div className="flex-shrink-0">
                <IoMdDocument className="w-8 h-8 bg-gray-200 rounded"/>
              </div>
              <div>
                <p className="font-medium">Updated TOR</p>
                <p className="text-sm text-gray-600">Date: Jan 24, 2024</p>
                <p className="text-xs text-gray-500">Public key: f82c5wxt2559xxv</p>
              </div>
            </div>
          </div>

          {/* Verification Card */}
          <div className="border-2 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold mb-2">Document Verification</h3>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm">First yet verify please proceed to the school registrar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {['About Us', 'Helpdesk', 'FAQS', 'Privacy', 'Smart Contract'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex space-x-4">
            {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
              <span 
                key={platform}
                className="cursor-pointer hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  ) : (
    <h1>Unauthorized</h1>
  );
};

export default StudentDashboard;
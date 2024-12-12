import { useUser } from "../../context/UserContext";

const ViewTranscript = () => {
    const { user } = useUser();
    
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Doc. Chain</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please insert a valid public key
              </label>
              <input
                type="text"
                value={publicKey}
                onChange={(e) => setPublicKey(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter public key"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Submit
            </button>
          </div>
        </motion.div>

        {/* View TOR Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">View TOR</h2>
          <div className="space-y-4">
            <div className="text-gray-600">
              <p className="font-medium">Updated TOR</p>
              <p className="text-sm">Date: 28-03-2024</p>
              <div className="mt-4 flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>www.sample.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verified off Chain Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Verified off Chain?</h2>
          <p className="text-gray-600">
            Connect a decentralized off-chain storage solution that validates the document's authenticity, allowing dynamic content retrieval without requiring direct blockchain access.
          </p>
        </motion.div>

        {/* MetaMask Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">MetaMask</h2>
            <img src="/metamask-fox.svg" alt="MetaMask" className="h-12 w-12" />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-6 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">About Us</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Helpdesk</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">FAQS</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Smart Contract</a>
        </div>
      </div>
    </div>
            <embed src={`http://localhost:5555/student/transcript/${user.student_number}`} type="application/pdf" className="w-full h-screen" />
        </div>

    );
};

export default ViewTranscript;

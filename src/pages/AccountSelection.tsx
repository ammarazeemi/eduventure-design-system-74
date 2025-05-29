
import { useParams, useNavigate } from "react-router-dom";

const AccountSelection = () => {
  const { provider } = useParams<{ provider: string }>();
  const navigate = useNavigate();

  const accounts = {
    google: [
      { name: "Iqbal Nadeem", email: "kbd123@gmail.com", color: "bg-purple-500" },
      { name: "Minam Amir", email: "btmam321@gmail.com", color: "bg-green-500" },
      { name: "Mehdi", email: "kthud.123@gmail.com", color: "bg-orange-500" },
      { name: "Ali Zaidi", email: "az1179@gmail.com", color: "bg-red-500" }
    ],
    facebook: [
      { name: "Iqbal Nadeem", email: "kbd123@gmail.com", color: "bg-purple-500" },
      { name: "Minam Amir", email: "btmam321@gmail.com", color: "bg-green-500" },
      { name: "Ali Zaidi", email: "az1179@gmail.com", color: "bg-red-500" },
      { name: "Wasaf Khan", email: "wasafkhan321@gmail.com", color: "bg-blue-500" }
    ],
    apple: [
      { name: "Iqbal Nadeem", email: "kbd123@gmail.com", color: "bg-purple-500" },
      { name: "Minam Amir", email: "btmam321@gmail.com", color: "bg-green-500" },
      { name: "Mehdi", email: "kthud.123@gmail.com", color: "bg-orange-500" },
      { name: "Ali Zaidi", email: "az1179@gmail.com", color: "bg-red-500" }
    ]
  };

  const currentAccounts = accounts[provider as keyof typeof accounts] || accounts.google;

  const handleAccountSelect = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Purple Wave Background */}
      <div className="relative h-80 bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Eduventure
          </h1>
        </div>
      </div>

      {/* Account Selection */}
      <div className="px-6 py-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-center mb-8 text-gray-800">
          Choose an account
        </h2>

        <div className="space-y-4">
          {currentAccounts.map((account, index) => (
            <button
              key={index}
              onClick={handleAccountSelect}
              className="w-full flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className={`w-12 h-12 ${account.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                {account.name.charAt(0)}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">{account.name}</p>
                <p className="text-sm text-gray-600">{account.email}</p>
              </div>
            </button>
          ))}

          <button className="w-full flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-600">
            <div className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 text-xl">
              +
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium">Add New Account</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSelection;

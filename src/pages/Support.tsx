
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/NavigationBar";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Purple Wave Background */}
      <div className="relative h-64 bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        <div className="relative z-10 flex items-center justify-between p-6 text-white">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-purple-700"
          >
            ← Back
          </Button>
          <h1 className="text-2xl font-bold">Eduventure</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/profile")}
            className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-purple-800 font-bold hover:bg-purple-200"
          >
            U
          </Button>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-white pb-8">
          <h1 className="text-3xl font-bold mb-2">Contact Support</h1>
          <div className="text-4xl">📞</div>
        </div>
      </div>

      {/* Support Content */}
      <div className="px-6 py-8 space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Get Help</h2>
          
          <div className="space-y-4">
            <Button
              className="w-full h-16 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg"
              onClick={() => window.open('mailto:support@eduventure.com')}
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📧</span>
                <span>Email Support</span>
              </div>
            </Button>

            <Button
              className="w-full h-16 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white text-lg font-semibold rounded-xl shadow-lg"
              onClick={() => window.open('tel:+1234567890')}
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📱</span>
                <span>Call Support</span>
              </div>
            </Button>

            <Button
              className="w-full h-16 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg"
              onClick={() => navigate("/faq")}
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">❓</span>
                <span>Frequently Asked Questions</span>
              </div>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Support Hours</h3>
          <p className="text-gray-600">
            Monday - Friday: 9:00 AM - 6:00 PM<br/>
            Saturday: 10:00 AM - 4:00 PM<br/>
            Sunday: Closed
          </p>
        </div>
      </div>

      <NavigationBar currentPage="profile" />
    </div>
  );
};

export default Support;

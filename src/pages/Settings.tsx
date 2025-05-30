
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import NavigationBar from "@/components/NavigationBar";

const Settings = () => {
  const navigate = useNavigate();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

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
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <div className="text-4xl">⚙️</div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="px-6 py-8 space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">App Preferences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">Sound Effects</h3>
                <p className="text-sm text-gray-600">Enable sound effects during learning</p>
              </div>
              <Switch
                checked={soundEnabled}
                onCheckedChange={setSoundEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <p className="text-sm text-gray-600">Receive learning reminders</p>
              </div>
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Legal</h2>
          
          <div className="space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-start text-left"
              onClick={() => {/* Navigate to terms */}}
            >
              📄 Terms & Conditions
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start text-left"
              onClick={() => {/* Navigate to privacy */}}
            >
              🔒 Privacy Policy
            </Button>
          </div>
        </div>
      </div>

      <NavigationBar currentPage="profile" />
    </div>
  );
};

export default Settings;

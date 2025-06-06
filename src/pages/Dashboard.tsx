
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useAuth } from "@/contexts/AuthContext";
import { HelpCircle, Settings, MessageCircle, PhoneCall } from "lucide-react";
import NavigationBar from "@/components/NavigationBar";
import { subjects } from "@/data/educationalData";
import LoadingSpinner from "@/components/LoadingSpinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredSubjects = subjects.filter(subject =>
    subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleHelpClick = () => {
    navigate("/support");
  };

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
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6 text-white">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px]">
                ☰
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-6 pt-6">
                  <h2 className="text-2xl font-bold text-purple-800 mb-8 px-6">Menu</h2>
                  
                  <div className="space-y-4 px-6">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left text-lg h-12"
                      onClick={() => navigate("/games")}
                    >
                      🎮 Games
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left text-lg h-12"
                      onClick={() => navigate("/settings")}
                    >
                      <Settings className="mr-2 h-5 w-5" />
                      Settings
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left text-lg h-12"
                      onClick={() => navigate("/feedback")}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Feedback
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left text-lg h-12"
                      onClick={() => navigate("/support")}
                    >
                      <PhoneCall className="mr-2 h-5 w-5" />
                      Contact Support
                    </Button>

                    <div className="border-t border-gray-200 my-4"></div>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left text-lg h-12 text-red-500"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Sign Out
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full">
                      Close Menu
                    </Button>
                  </DrawerClose>
                </div>
              </div>
            </DrawerContent>
          </Drawer>

          <h1 className="text-2xl font-bold">Eduventure</h1>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={handleHelpClick}
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/profile")}
              className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-purple-800 font-bold hover:bg-purple-200"
            >
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </Button>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-8">
          <p className="text-purple-200 text-lg">
            {user?.name ? `Hello, ${user.name} – great to see you again!` : "Hello – great to see you again!"}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-8 relative z-20">
        <Input
          placeholder="Search subjects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white shadow-lg rounded-lg border-0 py-3 px-4"
        />
      </div>

      {/* Subject Cards */}
      <div className="px-6 py-8 space-y-4">
        {isLoading ? (
          <LoadingSpinner message="Loading subjects..." />
        ) : filteredSubjects.length > 0 ? (
          filteredSubjects.map((subject, index) => (
            <button
              key={index}
              onClick={() => navigate(`/learn/${subject.path}`)}
              className={`w-full bg-gradient-to-r ${subject.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {subject.subtitle}
                  </p>
                  <div className="mt-2">
                    <div className="bg-white bg-opacity-50 rounded-full h-2 w-24">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{width: `${Math.floor(Math.random() * 80) + 20}%`}}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-700 mt-1">Progress</p>
                  </div>
                </div>
                <div className="text-4xl">
                  {subject.icon}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No subjects found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      <NavigationBar currentPage="learn" />
    </div>
  );
};

export default Dashboard;

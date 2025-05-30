
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import NavigationBar from "@/components/NavigationBar";
import { allQuizzes } from "@/data/educationalData";
import { ChevronLeft, Menu, User, HelpCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const filteredQuizzes = allQuizzes.filter(quiz =>
    quiz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quiz.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quiz.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuizClick = (quiz: any) => {
    navigate(`/quiz/${quiz.subject}/${quiz.topic}`);
  };

  const handleQuizHelp = () => {
    toast({
      title: "Quiz Tips",
      description: "Take quizzes to test your knowledge and earn points!",
    });
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
        
        <div className="relative z-10 flex items-center justify-between p-6 text-white">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-purple-700"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          
          <h1 className="text-2xl font-bold">All Quizzes</h1>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-purple-700"
              onClick={handleQuizHelp}
            >
              <HelpCircle className="h-5 w-5" />
            </Button>

            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-purple-700"
                >
                  <Menu className="h-5 w-5" />
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
                        ⚙️ Settings
                      </Button>
                      
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left text-lg h-12"
                        onClick={() => navigate("/feedback")}
                      >
                        💬 Feedback
                      </Button>
                      
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left text-lg h-12"
                        onClick={() => navigate("/support")}
                      >
                        📞 Contact Support
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

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/profile")}
              className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-purple-800 font-bold hover:bg-purple-200"
            >
              {user?.name ? user.name.charAt(0).toUpperCase() : <User className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-white pb-8">
          <div className="text-4xl">🏆</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-8 relative z-20">
        <Input
          placeholder="Search Quizzes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white shadow-lg rounded-lg border-0 py-3 px-4"
        />
      </div>

      {/* Quizzes List */}
      <div className="px-6 py-8 space-y-4">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz, index) => (
            <div
              key={index}
              onClick={() => handleQuizClick(quiz)}
              className={`bg-gradient-to-r ${quiz.color} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {quiz.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center">
                    <span>{quiz.score}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{quiz.subject.replace('-', ' ')}</span>
                  </p>
                </div>
                <div className="text-3xl">
                  {quiz.icon}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No quizzes found matching "{searchQuery}"</p>
            <Button
              variant="outline"
              onClick={() => setSearchQuery("")}
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>

      <NavigationBar currentPage="quiz" />
    </div>
  );
};

export default Quiz;

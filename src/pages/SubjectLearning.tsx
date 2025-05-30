
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import NavigationBar from "@/components/NavigationBar";
import { subjects } from "@/data/educationalData";
import { useAuth } from "@/contexts/AuthContext";
import { ChevronLeft, Menu, User, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/LoadingSpinner";

const SubjectLearning = () => {
  const { subject: subjectId } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [subjectId]);

  const currentSubject = subjects.find(s => s.id === subjectId) || subjects[0];
  
  const filteredTopics = currentSubject.topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTopicClick = (topicId: string) => {
    navigate(`/topic/${currentSubject.id}/${topicId}`);
  };

  const handleSubjectHelp = () => {
    toast({
      title: `${currentSubject.title} Learning`,
      description: `Explore topics in ${currentSubject.title.toLowerCase()} and track your progress!`,
    });
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className={`relative h-64 bg-gradient-to-r ${currentSubject.color} overflow-hidden`}>
        <div className="absolute inset-0">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        <div className="relative z-10 flex items-center justify-between p-6 text-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/dashboard")}
            className="text-gray-800 hover:bg-white hover:bg-opacity-20"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          
          <h1 className="text-2xl font-bold">{currentSubject.title}</h1>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-800 hover:bg-white hover:bg-opacity-20"
              onClick={handleSubjectHelp}
            >
              <HelpCircle className="h-5 w-5" />
            </Button>

            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-800 hover:bg-white hover:bg-opacity-20"
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
              className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-gray-800 font-bold hover:bg-opacity-30"
            >
              {user?.name ? user.name.charAt(0).toUpperCase() : <User className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-gray-800 pb-8">
          <div className="text-4xl">{currentSubject.icon}</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-8 relative z-20">
        <Input
          placeholder="Search Topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white shadow-lg rounded-lg border-0 py-3 px-4"
        />
      </div>

      {/* Topics List */}
      <div className="px-6 py-8 space-y-4">
        {isLoading ? (
          <LoadingSpinner message={`Loading ${currentSubject.title.toLowerCase()} topics...`} />
        ) : filteredTopics.length > 0 ? (
          filteredTopics.map((topic, index) => (
            <div
              key={index}
              onClick={() => handleTopicClick(topic.id)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {topic.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {topic.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 rounded-full h-2 flex-1">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                        style={{width: `${topic.progress}%`}}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{topic.progress}%</span>
                  </div>
                </div>
                <div className="text-3xl ml-4">
                  {topic.icon}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No topics found matching "{searchQuery}"</p>
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

      <NavigationBar currentPage="learn" />
    </div>
  );
};

export default SubjectLearning;

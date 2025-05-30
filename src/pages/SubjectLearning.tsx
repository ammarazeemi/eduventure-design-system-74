
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import NavigationBar from "@/components/NavigationBar";

const SubjectLearning = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const subjectData: { [key: string]: any } = {
    biology: {
      title: "BIOLOGY",
      icon: "🧬",
      color: "from-green-300 to-green-400",
      topics: [
        { name: "Cells", icon: "🔬", progress: 75 },
        { name: "DNA", icon: "🧬", progress: 60 },
        { name: "Human Body", icon: "👤", progress: 40 },
        { name: "Photosynthesis", icon: "🌱", progress: 90 },
        { name: "Evolution", icon: "🦕", progress: 25 },
        { name: "Microbes", icon: "🦠", progress: 55 }
      ]
    },
    geography: {
      title: "GEOGRAPHY",
      icon: "🌍",
      color: "from-emerald-300 to-emerald-400",
      topics: [
        { name: "Volcanoes", icon: "🌋", progress: 80 },
        { name: "Maps", icon: "🗺️", progress: 65 },
        { name: "Earth Layers", icon: "🌍", progress: 45 },
        { name: "Climate", icon: "🌤️", progress: 30 },
        { name: "Ecosystems", icon: "🌿", progress: 70 }
      ]
    },
    chemistry: {
      title: "CHEMISTRY",
      icon: "⚛️",
      color: "from-orange-300 to-orange-400",
      topics: [
        { name: "Atoms", icon: "⚛️", progress: 85 },
        { name: "Periodic Table", icon: "📊", progress: 75 },
        { name: "Molecules", icon: "🔬", progress: 60 },
        { name: "Reactions", icon: "⚗️", progress: 40 },
        { name: "Covalent Bonds", icon: "🔗", progress: 55 }
      ]
    },
    maths: {
      title: "MATHEMATICS",
      icon: "📊",
      color: "from-blue-300 to-blue-400",
      topics: [
        { name: "Algebra", icon: "🔢", progress: 90 },
        { name: "Geometry", icon: "📐", progress: 70 },
        { name: "Linear Equations", icon: "📈", progress: 80 },
        { name: "Probability", icon: "🎲", progress: 45 },
        { name: "Number Theory", icon: "🔢", progress: 95 }
      ]
    }
  };

  const currentSubject = subjectData[subject || "biology"] || subjectData.biology;
  
  const filteredTopics = currentSubject.topics.filter((topic: any) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTopicClick = (topicName: string) => {
    navigate(`/topic/${subject}/${encodeURIComponent(topicName)}`);
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
            className="text-gray-800 hover:bg-white hover:bg-opacity-20 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            ← Back
          </Button>
          
          <h1 className="text-2xl font-bold">{currentSubject.title}</h1>
          
          <div className="flex items-center space-x-2">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-800 hover:bg-white hover:bg-opacity-20 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
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
              👤
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
        {filteredTopics.map((topic: any, index: number) => (
          <div
            key={index}
            onClick={() => handleTopicClick(topic.name)}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {topic.name}
                </h3>
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
        ))}
      </div>

      <NavigationBar currentPage="learn" />
    </div>
  );
};

export default SubjectLearning;

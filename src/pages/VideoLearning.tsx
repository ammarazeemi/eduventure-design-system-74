
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const VideoLearning = () => {
  const { subject, topic } = useParams<{ subject: string; topic: string }>();
  const navigate = useNavigate();
  const decodedTopic = decodeURIComponent(topic || "");

  const videoContent: { [key: string]: any } = {
    "biology-cells": {
      title: "Learn: Cells",
      videos: [
        {
          title: "Cell Structure and Function - Introduction",
          duration: "8:30",
          thumbnail: "🔬",
          description: "A comprehensive introduction to cell biology covering basic structure and organelle functions.",
          videoId: "URUJD5NEXC8" // Real cell biology video
        },
        {
          title: "Mitochondria - The Powerhouse of the Cell",
          duration: "6:15",
          thumbnail: "⚡",
          description: "Deep dive into mitochondrial structure and energy production in cells.",
          videoId: "VFJlUYuy7WY"
        }
      ]
    },
    "geography-volcanoes": {
      title: "Learn: Volcanoes",
      videos: [
        {
          title: "How Volcanoes Form and Erupt",
          duration: "10:45",
          thumbnail: "🌋",
          description: "Understanding volcanic formation, types, and eruption processes.",
          videoId: "yoSEJ3oR-p4"
        },
        {
          title: "The Ring of Fire - Pacific Volcanic Activity",
          duration: "7:20",
          thumbnail: "🔥",
          description: "Exploring the Pacific Ring of Fire and its geological significance.",
          videoId: "UwbRp6_NpMw"
        }
      ]
    },
    "chemistry-periodic-table": {
      title: "Learn: Periodic Table",
      videos: [
        {
          title: "Periodic Table Organization and Trends",
          duration: "12:30",
          thumbnail: "⚛️",
          description: "Understanding how elements are organized and periodic trends.",
          videoId: "0RRVV4Diomg"
        }
      ]
    }
  };

  const contentKey = `${subject}-${decodedTopic.toLowerCase().replace(/ /g, '-')}`;
  const currentContent = videoContent[contentKey] || {
    title: `Learn: ${decodedTopic}`,
    videos: [
      {
        title: `${decodedTopic} - Introduction`,
        duration: "5:30",
        thumbnail: "🎬",
        description: `A comprehensive introduction to ${decodedTopic} covering the basic concepts and fundamentals.`,
        videoId: "dQw4w9WgXcQ"
      }
    ]
  };

  const progressValue = 25; // Demo progress

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/topic/${subject}/${encodeURIComponent(decodedTopic)}`)}
            className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            ← Back
          </Button>
          <h1 className="text-xl font-bold text-center flex-1">{currentContent.title}</h1>
          <div className="flex items-center space-x-2">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-purple-800 font-bold hover:bg-purple-200"
            >
              👤
            </Button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Video Progress</span>
            <span>{progressValue}%</span>
          </div>
          <Progress value={progressValue} className="h-2 bg-purple-300" />
        </div>
      </div>

      {/* Video Content */}
      <div className="px-6 py-8">
        <div className="space-y-6">
          {currentContent.videos.map((video: any, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* Video Player Area */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <iframe
                  className="w-full h-full rounded-t-xl"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Duration: {video.duration}</span>
                    <span>•</span>
                    <span>Educational Content</span>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    Add to Playlist
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Learning Section */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-600 mb-3">Continue Your Learning Journey</h3>
          <p className="text-gray-600 mb-4">
            After watching these videos, test your knowledge with our interactive quizzes or explore related topics.
          </p>
          
          <div className="flex space-x-3">
            <Button 
              onClick={() => navigate('/quiz')}
              className="bg-green-600 hover:bg-green-700"
            >
              Take Quiz
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(`/learn/reading/${subject}/${encodeURIComponent(decodedTopic)}`)}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLearning;

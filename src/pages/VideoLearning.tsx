
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { subjects } from "@/data/educationalData";
import { ChevronLeft, Play } from "lucide-react";

const VideoLearning = () => {
  const { subject: subjectId, topic: topicId } = useParams<{ subject: string; topic: string }>();
  const navigate = useNavigate();

  const subject = subjects.find(s => s.id === subjectId);
  const topic = subject?.topics.find(t => t.id === topicId);

  if (!subject || !topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Topic Not Found</h1>
          <Button onClick={() => navigate("/dashboard")}>Return to Dashboard</Button>
        </div>
      </div>
    );
  }

  // Topic-specific video content based on subject and topic
  const getTopicVideos = () => {
    const contentKey = `${subject.id}-${topic.id}`;
    
    // Subject and topic-specific video mappings
    const videoMappings: { [key: string]: any[] } = {
      "mathematics-algebra": [
        {
          title: "Algebra Fundamentals",
          duration: "12:30",
          description: "Introduction to algebraic concepts, variables, and basic equations specific to algebra learning.",
          videoId: "NybHckSEQBI"
        },
        {
          title: "Solving Linear Equations",
          duration: "8:45",
          description: "Step-by-step guide to solving linear algebraic equations with examples.",
          videoId: "9Vmwsg8Ecy4"
        }
      ],
      "mathematics-geometry": [
        {
          title: "Geometry Basics",
          duration: "10:15",
          description: "Understanding shapes, angles, and geometric principles.",
          videoId: "URUJD5NEXC8"
        }
      ],
      "biology-cells": [
        {
          title: "Cell Structure and Function",
          duration: "15:20",
          description: "Comprehensive overview of cell biology, organelles, and cellular processes.",
          videoId: "URUJD5NEXC8"
        },
        {
          title: "Cell Division Process",
          duration: "11:30",
          description: "Understanding mitosis and meiosis in cellular reproduction.",
          videoId: "VFJlUYuy7WY"
        }
      ],
      "biology-ecosystems": [
        {
          title: "Ecosystem Dynamics",
          duration: "13:45",
          description: "How organisms interact within their environment and ecosystem balance.",
          videoId: "yoSEJ3oR-p4"
        }
      ],
      "chemistry-periodic-table": [
        {
          title: "Periodic Table Organization",
          duration: "14:20",
          description: "Understanding element organization and periodic trends in chemistry.",
          videoId: "0RRVV4Diomg"
        }
      ],
      "chemistry-chemical-reactions": [
        {
          title: "Chemical Reactions Explained",
          duration: "12:10",
          description: "Types of chemical reactions and how they occur.",
          videoId: "UwbRp6_NpMw"
        }
      ],
      "geography-continents": [
        {
          title: "World Continents Overview",
          duration: "16:30",
          description: "Geographical features and characteristics of world continents.",
          videoId: "yoSEJ3oR-p4"
        }
      ],
      "geography-volcanoes": [
        {
          title: "Volcanic Formation and Activity",
          duration: "11:40",
          description: "How volcanoes form and the science behind volcanic eruptions.",
          videoId: "UwbRp6_NpMw"
        }
      ]
    };

    return videoMappings[contentKey] || [
      {
        title: `${topic.name} - Educational Video`,
        duration: "10:00",
        description: `Comprehensive video content about ${topic.name} in ${subject.title}.`,
        videoId: topic.videoUrl?.split('/').pop() || "dQw4w9WgXcQ"
      }
    ];
  };

  const videos = getTopicVideos();
  const progressValue = 25;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/topic/${subject.id}/${topic.id}`)}
            className="text-white hover:bg-purple-700"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <h1 className="text-xl font-bold text-center flex-1">Learn: {topic.name}</h1>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-purple-700"
            onClick={() => navigate(`/learn/${subject.id}`)}
          >
            <Play className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="text-purple-200 text-sm mb-2">Video Content for {subject.title}</p>
        
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
          {videos.map((video: any, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* Video Player Area */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <iframe
                  className="w-full h-full rounded-t-xl"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={`${topic.name} - ${video.title}`}
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  {video.description}
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded mb-4">
                  <p className="text-green-700 text-sm">
                    <strong>Topic Focus:</strong> This video is specifically about {topic.name} concepts in {subject.title}.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Duration: {video.duration}</span>
                    <span>•</span>
                    <span>{subject.title} Content</span>
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
          <h3 className="text-lg font-semibold text-purple-600 mb-3">Continue Learning {topic.name}</h3>
          <p className="text-gray-600 mb-4">
            After watching these topic-specific videos, test your knowledge with quizzes or explore additional reading materials about {topic.name}.
          </p>
          
          <div className="flex space-x-3">
            <Button 
              onClick={() => navigate(`/quiz/${subject.id}/${topic.id}`)}
              className="bg-green-600 hover:bg-green-700"
            >
              Take {topic.name} Quiz
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(`/learn/reading/${subject.id}/${topic.id}`)}
            >
              Read More About {topic.name}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLearning;

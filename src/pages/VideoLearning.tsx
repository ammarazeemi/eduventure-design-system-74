
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const VideoLearning = () => {
  const { subject, topic } = useParams<{ subject: string; topic: string }>();
  const navigate = useNavigate();
  const decodedTopic = decodeURIComponent(topic || "");

  const videos = [
    {
      title: `${decodedTopic} - Introduction`,
      duration: "5:30",
      thumbnail: "🎬",
      description: `A comprehensive introduction to ${decodedTopic} covering the basic concepts and fundamentals.`,
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      title: `${decodedTopic} - Deep Dive`,
      duration: "12:45",
      thumbnail: "🔍",
      description: `An in-depth exploration of ${decodedTopic} with detailed explanations and examples.`,
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: `${decodedTopic} - Practical Applications`,
      duration: "8:20",
      thumbnail: "⚡",
      description: `Real-world applications and practical uses of ${decodedTopic} in everyday life.`,
      videoId: "dQw4w9WgXcQ"
    }
  ];

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
          <h1 className="text-xl font-bold text-center flex-1">Learn with Video</h1>
          <div className="w-11 h-11"></div> {/* Spacer for alignment */}
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-center">{decodedTopic}</h2>
        
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
          {videos.map((video, index) => (
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

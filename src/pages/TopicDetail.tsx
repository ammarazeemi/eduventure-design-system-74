
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const TopicDetail = () => {
  const { subject, topic } = useParams<{ subject: string; topic: string }>();
  const navigate = useNavigate();
  const decodedTopic = decodeURIComponent(topic || "");

  const progressValue = Math.floor(Math.random() * 80) + 10; // Random progress for demo

  return (
    <div className="min-h-screen bg-white">
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/learn/${subject}`)}
            className="text-white hover:bg-purple-700"
          >
            ← Back
          </Button>
          <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-purple-800 font-bold">U</span>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {decodedTopic}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{progressValue}%</span>
          </div>
          <Progress value={progressValue} className="h-3" />
        </div>

        {/* Learning Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Choose Your Learning Method</h2>
          
          <Button
            onClick={() => navigate(`/learn/reading/${subject}/${encodeURIComponent(decodedTopic)}`)}
            className="w-full h-20 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📖</span>
              <span>Learn by Reading</span>
            </div>
          </Button>

          <Button
            onClick={() => navigate(`/learn/video/${subject}/${encodeURIComponent(decodedTopic)}`)}
            className="w-full h-20 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white text-lg font-semibold rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📺</span>
              <span>Learn with Video</span>
            </div>
          </Button>
        </div>

        {/* Topic Overview */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About This Topic</h3>
          <p className="text-gray-600 leading-relaxed">
            Explore {decodedTopic} through interactive content, engaging videos, and comprehensive reading materials. 
            Track your progress as you master the fundamentals and advance to more complex concepts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;

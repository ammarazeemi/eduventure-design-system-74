
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/NavigationBar";

const SubjectLearning = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const topicsData = {
    biology: [
      "Cells", "Evolution", "Microbes", "Genetics", "DNA & RNA", "Human Body"
    ],
    maths: [
      "Number Theory", "Integration", "Probability & Stats", "Discrete Maths"
    ],
    chemistry: [
      "Atoms", "Molecules", "Chemical Bonding", "Periodic Table", "States of Matter", "Acids & Bases", "Reactions", "Lab Safety"
    ],
    geography: [
      "Ecosystems", "Countries", "Volcanoes", "Climates", "Earth Layers", "Maps & Coordinates", "Natural Disasters"
    ],
    english: [
      "Grammar", "Literature", "Creative Writing", "Poetry", "Reading Comprehension"
    ],
    physics: [
      "Motion", "Forces", "Energy", "Waves", "Electricity"
    ],
    "computer-science": [
      "Programming", "Algorithms", "Data Structures", "Web Development"
    ],
    history: [
      "Ancient Civilizations", "World Wars", "Renaissance", "Industrial Revolution"
    ],
    "environmental-science": [
      "Climate Change", "Biodiversity", "Pollution", "Conservation", "Renewable Energy"
    ]
  };

  const topics = topicsData[subject as keyof typeof topicsData] || [];
  const subjectTitle = subject?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const filteredTopics = topics.filter(topic =>
    topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTopicClick = (topic: string) => {
    navigate(`/topic/${subject}/${encodeURIComponent(topic)}`);
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/dashboard")}
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
            Welcome to {subjectTitle} World
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-8 relative z-20">
        <Input
          placeholder={`Search ${subject} topics...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white shadow-lg rounded-lg border-0 py-3 px-4"
        />
      </div>

      {/* Topics List */}
      <div className="px-6 py-8 space-y-4">
        {filteredTopics.map((topic, index) => (
          <div
            key={index}
            onClick={() => handleTopicClick(topic)}
            className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {topic}
                </h3>
              </div>
              <div className="text-2xl">
                {subject === "biology" && "🧬"}
                {subject === "maths" && "📊"}
                {subject === "chemistry" && "⚛️"}
                {subject === "geography" && "🌍"}
                {subject === "english" && "📚"}
                {subject === "physics" && "⚡"}
                {subject === "computer-science" && "💻"}
                {subject === "history" && "🏛️"}
                {subject === "environmental-science" && "🌱"}
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

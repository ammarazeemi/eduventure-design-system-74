
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import NavigationBar from "@/components/NavigationBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const subjects = [
    {
      title: "BIOLOGY",
      subtitle: "Cells, Evolution, Microbes",
      color: "from-green-300 to-green-400",
      icon: "🧬",
      path: "biology"
    },
    {
      title: "MATHS",
      subtitle: "Cross, Linear Equations, Probability",
      color: "from-blue-300 to-blue-400",
      icon: "📊",
      path: "maths"
    },
    {
      title: "GEOGRAPHY",
      subtitle: "Natural Hazards & Eco Systems",
      color: "from-emerald-300 to-emerald-400",
      icon: "🌍",
      path: "geography"
    },
    {
      title: "CHEMISTRY",
      subtitle: "Atoms, Molecules & Covalent Bonds",
      color: "from-orange-300 to-orange-400",
      icon: "⚛️",
      path: "chemistry"
    }
  ];

  const filteredSubjects = subjects.filter(subject =>
    subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <button className="text-2xl">☰</button>
          <h1 className="text-2xl font-bold">Eduventure</h1>
          <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-purple-800 font-bold">U</span>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-8">
          <p className="text-purple-200 text-lg">
            Hello, User – great to see you again!
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
        {filteredSubjects.map((subject, index) => (
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
              </div>
              <div className="text-4xl">
                {subject.icon}
              </div>
            </div>
          </button>
        ))}
      </div>

      <NavigationBar currentPage="learn" />
    </div>
  );
};

export default Dashboard;

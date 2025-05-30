
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/NavigationBar";

const Games = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const games = [
    { name: "Periodic Table Match", icon: "⚛️", subject: "chemistry", color: "from-orange-300 to-orange-400" },
    { name: "Cell Parts Quiz", icon: "🧬", subject: "biology", color: "from-green-300 to-green-400" },
    { name: "Volcano Memory Game", icon: "🌋", subject: "geography", color: "from-red-300 to-red-400" },
    { name: "Math Puzzle Challenge", icon: "🔢", subject: "maths", color: "from-blue-300 to-blue-400" },
    { name: "DNA Sequence Game", icon: "🧬", subject: "biology", color: "from-green-300 to-green-400" },
    { name: "Map Explorer", icon: "🗺️", subject: "geography", color: "from-emerald-300 to-emerald-400" },
    { name: "Equation Solver", icon: "📊", subject: "maths", color: "from-blue-300 to-blue-400" },
    { name: "Element Matching", icon: "⚛️", subject: "chemistry", color: "from-orange-300 to-orange-400" }
  ];

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            ← Back
          </Button>
          <h1 className="text-2xl font-bold">Subject Games</h1>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => {/* Show game hints */}}
          >
            ❓
          </Button>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-white pb-8">
          <div className="text-4xl">🎮</div>
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

      {/* Games Grid */}
      <div className="px-6 py-8 grid grid-cols-1 gap-4">
        {filteredGames.map((game, index) => (
          <div
            key={index}
            onClick={() => navigate(`/game/${game.subject}/${encodeURIComponent(game.name)}`)}
            className={`bg-gradient-to-r ${game.color} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {game.name}
                </h3>
                <p className="text-gray-600 text-sm capitalize">
                  {game.subject} Game
                </p>
              </div>
              <div className="text-3xl">
                {game.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <NavigationBar currentPage="learn" />
    </div>
  );
};

export default Games;

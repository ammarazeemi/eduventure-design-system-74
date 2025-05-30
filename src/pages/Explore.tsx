
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import NavigationBar from "@/components/NavigationBar";
import { subjects } from "@/data/educationalData";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredSubjects = subjects.filter(subject =>
    subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.id.toLowerCase().includes(searchQuery.toLowerCase())
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
            className="text-white hover:bg-purple-700"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Explore Subjects</h1>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-white pb-8">
          <div className="text-4xl">🧭</div>
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

      {/* Subjects Grid */}
      <div className="px-6 py-8 grid grid-cols-2 gap-4">
        {filteredSubjects.length > 0 ? (
          filteredSubjects.map((subject, index) => (
            <div
              key={index}
              onClick={() => navigate(`/learn/${subject.path}`)}
              className={`bg-gradient-to-r ${subject.color} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-32 flex flex-col items-center justify-center`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{subject.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {subject.title}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 col-span-2">
            <p className="text-gray-500">No subjects found matching "{searchQuery}"</p>
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

      <NavigationBar currentPage="explore" />
    </div>
  );
};

export default Explore;

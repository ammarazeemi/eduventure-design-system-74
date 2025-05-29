
import { Input } from "@/components/ui/input";
import NavigationBar from "@/components/NavigationBar";

const Explore = () => {
  const subjects = [
    { name: "Biology", icon: "🧬", color: "from-green-300 to-green-400" },
    { name: "Maths", icon: "📊", color: "from-blue-300 to-blue-400" },
    { name: "Chemistry", icon: "⚛️", color: "from-orange-300 to-orange-400" },
    { name: "Geography", icon: "🌍", color: "from-emerald-300 to-emerald-400" },
    { name: "English", icon: "📚", color: "from-pink-300 to-pink-400" },
    { name: "Physics", icon: "⚡", color: "from-yellow-300 to-yellow-400" },
    { name: "Computer Science", icon: "💻", color: "from-indigo-300 to-indigo-400" },
    { name: "History", icon: "🏛️", color: "from-red-300 to-red-400" },
    { name: "Environmental Science", icon: "🌱", color: "from-teal-300 to-teal-400" }
  ];

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
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl font-bold mb-2">Explore Subjects</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-8 relative z-20">
        <Input
          placeholder="Search subjects..."
          className="w-full bg-white shadow-lg rounded-lg border-0 py-3 px-4"
        />
      </div>

      {/* Subjects Grid */}
      <div className="px-6 py-8 grid grid-cols-2 gap-4">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${subject.color} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{subject.icon}</div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {subject.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <NavigationBar currentPage="explore" />
    </div>
  );
};

export default Explore;

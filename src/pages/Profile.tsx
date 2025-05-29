
import NavigationBar from "@/components/NavigationBar";

const Profile = () => {
  const achievements = [
    { name: "Math Master", percentage: 95, badge: "🏆" },
    { name: "Biology Expert", percentage: 88, badge: "🧬" },
    { name: "Quiz Champion", percentage: 92, badge: "🥇" },
    { name: "Study Streak", percentage: 100, badge: "🔥" }
  ];

  const subjects = [
    { name: "Mathematics", progress: 85, color: "bg-blue-500" },
    { name: "Biology", progress: 70, color: "bg-green-500" },
    { name: "Chemistry", progress: 60, color: "bg-orange-500" },
    { name: "Geography", progress: 45, color: "bg-emerald-500" }
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
          <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center mb-4">
            <span className="text-purple-800 font-bold text-2xl">U</span>
          </div>
          <h1 className="text-2xl font-bold">User Profile</h1>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        {/* Achievements Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">🏆</span>
            Achievements
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-4 text-center shadow-md"
              >
                <div className="text-3xl mb-2">{achievement.badge}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  {achievement.name}
                </h3>
                <p className="text-purple-600 font-bold text-lg">
                  {achievement.percentage}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Report Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">📊</span>
            Progress Report
          </h2>
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{subject.name}</h3>
                  <span className="text-sm font-bold text-gray-600">
                    {subject.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${subject.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">⚙️</span>
            Settings
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-800">Notifications</span>
              <div className="w-12 h-6 bg-purple-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-800">Sound Effects</span>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Help & Feedback Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">💬</span>
            Help & Feedback
          </h2>
          <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium py-3 rounded-lg transition-colors duration-200">
            Send Feedback
          </button>
        </div>
      </div>

      <NavigationBar currentPage="profile" />
    </div>
  );
};

export default Profile;

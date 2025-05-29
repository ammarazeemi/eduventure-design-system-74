
import { useNavigate } from "react-router-dom";

interface NavigationBarProps {
  currentPage: string;
}

const NavigationBar = ({ currentPage }: NavigationBarProps) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "learn", label: "Learn", icon: "📚", path: "/dashboard" },
    { id: "explore", label: "Explore", icon: "🧭", path: "/explore" },
    { id: "quiz", label: "Quiz", icon: "🎲", path: "/quiz" },
    { id: "profile", label: "Profile", icon: "👤", path: "/profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-100 border-t border-purple-200 px-4 py-2 rounded-t-3xl">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 ${
              currentPage === item.id
                ? "bg-purple-200 text-purple-800"
                : "text-purple-600 hover:bg-purple-50"
            }`}
          >
            <span className="text-lg mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;

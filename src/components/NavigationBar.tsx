
import { useNavigate } from "react-router-dom";
import { Book, Compass, Award, User, ChevronLeft } from "lucide-react";

interface NavigationBarProps {
  currentPage: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const NavigationBar = ({ currentPage, showBackButton = false, onBackClick }: NavigationBarProps) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "learn", label: "Learn", icon: Book, path: "/dashboard" },
    { id: "explore", label: "Explore", icon: Compass, path: "/explore" },
    { id: "quiz", label: "Quiz", icon: Award, path: "/quiz" },
    { id: "profile", label: "Profile", icon: User, path: "/profile" }
  ];

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-purple-200 px-4 py-2 shadow-lg z-40">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {showBackButton && (
          <button
            onClick={handleBackClick}
            className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 text-gray-500 hover:bg-purple-50"
          >
            <ChevronLeft className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Back</span>
          </button>
        )}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 ${
              currentPage === item.id
                ? "bg-purple-100 text-purple-800"
                : "text-gray-500 hover:bg-purple-50"
            }`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;


import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center z-50 animate-fade-out">
        <div className="text-center text-white animate-scale-out">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">Eduventure</h1>
          <div className="text-2xl">🎓</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center z-50">
      <div className="text-center text-white animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">Eduventure</h1>
        <div className="text-2xl animate-bounce">🎓</div>
        <p className="mt-4 text-lg opacity-80">Your Learning Adventure Begins</p>
      </div>
    </div>
  );
};

export default SplashScreen;


import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SplashScreen from "./components/SplashScreen";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import AccountSelection from "./pages/AccountSelection";
import Dashboard from "./pages/Dashboard";
import SubjectLearning from "./pages/SubjectLearning";
import TopicDetail from "./pages/TopicDetail";
import ReadingLearning from "./pages/ReadingLearning";
import VideoLearning from "./pages/VideoLearning";
import Explore from "./pages/Explore";
import Quiz from "./pages/Quiz";
import QuizGame from "./pages/QuizGame";
import Profile from "./pages/Profile";
import Games from "./pages/Games";
import Settings from "./pages/Settings";
import Feedback from "./pages/Feedback";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import GamePlay from "./pages/GamePlay";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Index />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/account/:provider" element={<AccountSelection />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learn/:subject" element={<SubjectLearning />} />
              <Route path="/topic/:subject/:topic" element={<TopicDetail />} />
              <Route path="/learn/reading/:subject/:topic" element={<ReadingLearning />} />
              <Route path="/learn/video/:subject/:topic" element={<VideoLearning />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/:subject" element={<QuizGame />} />
              <Route path="/quiz/:subject/:topic" element={<QuizGame />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/games" element={<Games />} />
              <Route path="/game/:subject/:gameName" element={<GamePlay />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

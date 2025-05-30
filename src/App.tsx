
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

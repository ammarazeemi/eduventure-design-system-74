
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Simulate login and navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Purple Wave Background */}
      <div className="relative h-80 bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Eduventure
          </h1>
          <p className="text-xl text-purple-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Login
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="px-6 py-8 max-w-md mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-purple-300 text-sm">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-purple-300 text-sm">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0"
              placeholder="Enter your password"
            />
          </div>

          <div className="space-y-4 pt-4">
            <Button
              onClick={handleSignIn}
              className="w-full bg-purple-300 hover:bg-purple-400 text-purple-800 font-medium py-3 rounded-lg shadow-md transition-all duration-200"
            >
              Sign in
            </Button>

            <Button
              onClick={() => navigate("/signup")}
              className="w-full bg-purple-400 hover:bg-purple-500 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-200"
            >
              Sign Up
            </Button>
          </div>

          <div className="text-center">
            <button className="text-black text-sm hover:underline">
              Forgot Password?
            </button>
          </div>

          <div className="text-center">
            <p className="text-black text-xs">OR</p>
            <p className="text-black text-xs mt-1">New User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

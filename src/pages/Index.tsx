
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  const navigate = useNavigate();
  const { login, resetPassword, isLoading } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetting, setIsResetting] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const success = await login(email, password);
    
    if (success) {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsResetting(true);
    const success = await resetPassword(resetEmail);
    setIsResetting(false);

    if (success) {
      toast({
        title: "Reset link sent!",
        description: "Check your email for password reset instructions.",
      });
      setShowForgotPassword(false);
      setResetEmail("");
    } else {
      toast({
        title: "Error",
        description: "No account found with this email address.",
        variant: "destructive",
      });
    }
  };

  const isFormValid = email && password;

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
        {!showForgotPassword ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-600 text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-purple-600 text-sm font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
                placeholder="Enter your password"
                disabled={isLoading}
                onKeyPress={(e) => e.key === 'Enter' && isFormValid && handleSignIn()}
              />
            </div>

            <div className="space-y-4 pt-4">
              {isLoading ? (
                <LoadingSpinner message="Signing in..." />
              ) : (
                <>
                  <Button
                    onClick={handleSignIn}
                    disabled={!isFormValid}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-200"
                  >
                    Sign In
                  </Button>

                  <Button
                    onClick={() => navigate("/signup")}
                    className="w-full bg-purple-400 hover:bg-purple-500 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-200"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>

            <div className="text-center">
              <button 
                onClick={() => setShowForgotPassword(true)}
                className="text-purple-600 text-sm hover:underline font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs">OR</p>
              <p className="text-gray-600 text-sm mt-1 font-medium">New User? Sign up above</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-purple-600 mb-2">Reset Password</h2>
              <p className="text-gray-600 text-sm">Enter your email to receive reset instructions</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resetEmail" className="text-purple-600 text-sm font-medium">Email</Label>
              <Input
                id="resetEmail"
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
                placeholder="Enter your email"
                disabled={isResetting}
              />
            </div>

            <div className="space-y-3 pt-4">
              {isResetting ? (
                <LoadingSpinner message="Sending reset link..." />
              ) : (
                <>
                  <Button
                    onClick={handleForgotPassword}
                    disabled={!resetEmail}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-200"
                  >
                    Send Reset Link
                  </Button>
                  
                  <Button
                    onClick={() => setShowForgotPassword(false)}
                    variant="outline"
                    className="w-full py-3"
                  >
                    Back to Login
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

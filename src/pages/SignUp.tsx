
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/LoadingSpinner";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dob: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return formData.name && formData.username && formData.email && 
           formData.password && formData.dob;
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const success = await signup({
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      provider: 'email'
    });

    if (success) {
      toast({
        title: "Account created!",
        description: "You have been successfully registered.",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Registration failed",
        description: "This email address is already in use.",
        variant: "destructive",
      });
    }
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
            Sign Up
          </p>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="px-6 py-8 max-w-md mx-auto">
        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-purple-600 text-sm font-medium">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
              placeholder="Enter your full name"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username" className="text-purple-600 text-sm font-medium">Username</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
              placeholder="Choose a username"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-purple-600 text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
              placeholder="Enter your email address"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-purple-600 text-sm font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
              placeholder="Create a password"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob" className="text-purple-600 text-sm font-medium">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={(e) => handleInputChange("dob", e.target.value)}
              className="border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-400 focus:ring-0 py-3"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-3 pt-4">
            {isLoading ? (
              <LoadingSpinner message="Creating your account..." />
            ) : (
              <Button
                type="submit"
                disabled={!isFormValid()}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-200"
              >
                Create Account
              </Button>
            )}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">OR</p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => navigate("/account/google")}
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-3 rounded-lg shadow-md transition-all duration-200 flex items-center justify-between px-4"
              disabled={isLoading}
            >
              <span>Continue with</span>
              <span className="text-red-500 font-bold">Google</span>
            </Button>

            <Button
              onClick={() => navigate("/account/facebook")}
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-3 rounded-lg shadow-md transition-all duration-200 flex items-center justify-between px-4"
              disabled={isLoading}
            >
              <span>Continue with</span>
              <span className="text-blue-600 font-bold">Facebook</span>
            </Button>

            <Button
              onClick={() => navigate("/account/apple")}
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-3 rounded-lg shadow-md transition-all duration-200 flex items-center justify-between px-4"
              disabled={isLoading}
            >
              <span>Continue with</span>
              <span className="text-gray-800 font-bold">Apple</span>
            </Button>
          </div>

          <div className="text-center pt-2">
            <Button 
              variant="link" 
              onClick={() => navigate("/")} 
              type="button"
              className="text-purple-600"
              disabled={isLoading}
            >
              Already have an account? Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

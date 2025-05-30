
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  provider?: 'email' | 'google' | 'facebook' | 'apple';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  loginWithProvider: (provider: 'google' | 'facebook' | 'apple', userData: User) => void;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('eduventure_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('eduventure_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('eduventure_user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = JSON.parse(localStorage.getItem('eduventure_users') || '[]');
    const existingUser = users.find((u: any) => u.email === userData.email);
    
    if (existingUser) {
      setIsLoading(false);
      return false; // User already exists
    }
    
    const newUser = {
      ...userData,
      id: Date.now().toString(),
    };
    
    users.push(newUser);
    localStorage.setItem('eduventure_users', JSON.stringify(users));
    
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('eduventure_user', JSON.stringify(userWithoutPassword));
    
    setIsLoading(false);
    return true;
  };

  const loginWithProvider = (provider: 'google' | 'facebook' | 'apple', userData: User) => {
    const userWithProvider = { ...userData, provider };
    setUser(userWithProvider);
    localStorage.setItem('eduventure_user', JSON.stringify(userWithProvider));
    
    // Also save to users list
    const users = JSON.parse(localStorage.getItem('eduventure_users') || '[]');
    const existingUserIndex = users.findIndex((u: any) => u.email === userData.email);
    
    if (existingUserIndex === -1) {
      users.push(userWithProvider);
      localStorage.setItem('eduventure_users', JSON.stringify(users));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduventure_user');
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = JSON.parse(localStorage.getItem('eduventure_users') || '[]');
    const userExists = users.some((u: any) => u.email === email);
    
    setIsLoading(false);
    return userExists;
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    loginWithProvider,
    logout,
    resetPassword,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const AUTH_KEY = 'cake_castle_owner_auth';

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const email = sessionStorage.getItem(`${AUTH_KEY}_user`);
      return email ? { email, role: 'Owner' } : null;
    } catch {
      return null;
    }
  });

  const login = (email, password) => {
    // Demo credentials: owner@demo.com / demo1234
    if (email.trim().toLowerCase() === 'owner@demo.com' && password === 'demo1234') {
      setIsAuthenticated(true);
      setUser({ email: 'owner@demo.com', role: 'Store Owner' });
      sessionStorage.setItem(AUTH_KEY, 'true');
      sessionStorage.setItem(`${AUTH_KEY}_user`, 'owner@demo.com');
      return { success: true };
    } else {
      return {
        success: false,
        error: 'Invalid credentials. Please use demo credentials: owner@demo.com / demo1234'
      };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(`${AUTH_KEY}_user`);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

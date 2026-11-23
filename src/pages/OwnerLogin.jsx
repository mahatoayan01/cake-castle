import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Crown, Lock, Mail, ArrowRight, ShieldAlert, KeyRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function OwnerLogin() {
  const [email, setEmail] = useState('owner@demo.com');
  const [password, setPassword] = useState('demo1234');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24 space-y-8">
      
      {/* Brand Header */}
      <div className="text-center space-y-2">
        <div className="w-14 h-14 rounded-2xl bg-[#7B3F00] text-gold-400 flex items-center justify-center mx-auto shadow-warm">
          <Crown className="w-8 h-8 stroke-[2.2]" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#3D1C00]">
          Owner Portal Login
        </h1>
        <p className="text-xs text-amber-950/70">
          Access store analytics, online order processing, and payment receipts.
        </p>
      </div>

      {/* Demo Credentials Box */}
      <div className="bg-amber-100/90 border border-amber-300 rounded-2xl p-4 text-xs space-y-2 text-amber-950 shadow-xs">
        <div className="flex items-center space-x-1.5 font-bold text-[#7B3F00]">
          <KeyRound className="w-4 h-4" />
          <span>Demo Access Credentials (Visible for Testing):</span>
        </div>
        <div className="bg-white/80 p-2.5 rounded-xl font-mono text-xs space-y-1 border border-amber-200">
          <div>Email: <strong className="text-[#3D1C00]">owner@demo.com</strong></div>
          <div>Password: <strong className="text-[#3D1C00]">demo1234</strong></div>
        </div>
        <p className="text-[11px] text-amber-900/70">
          * Client-side demo authentication. Pre-filled for your convenience.
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E5D5] shadow-warm space-y-6">
        {error && (
          <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="block text-xs font-semibold text-amber-950/80 mb-1">
              Store Owner Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-900/40" />
              <input
                type="email"
                id="login-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="login-password" className="block text-xs font-semibold text-amber-950/80 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-900/40" />
              <input
                type="password"
                id="login-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-warm transition-all flex items-center justify-center space-x-2"
          >
            <span>Sign In to Dashboard</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </form>

        <div className="pt-2 text-center">
          <Link to="/" className="text-xs font-bold text-[#7B3F00] hover:underline">
            ← Return to Customer Storefront
          </Link>
        </div>
      </div>

    </div>
  );
}

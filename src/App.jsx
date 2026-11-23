import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// Routed Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import OwnerLogin from './pages/OwnerLogin';
import OwnerDashboard from './pages/OwnerDashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#2C1810] selection:bg-gold-500 selection:text-white">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/location" element={<Location />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<OwnerLogin />} />
                <Route path="/dashboard" element={<OwnerDashboard />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <FloatingCTA />
          </div>
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  );
}

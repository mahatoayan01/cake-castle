import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'cake_castle_cart_v1';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage:', e);
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (item, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((i) => i.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
    showToast(`Added ${item.name} to cart!`);
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + (typeof item.price === 'number' ? item.price : 0) * item.quantity, 0);
  };

  // Fixed packaging fee / tax for bakery delivery
  const getPackagingFee = () => (cart.length > 0 ? 25 : 0);
  const getTotal = () => getSubtotal() + getPackagingFee();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getItemCount,
        getSubtotal,
        getPackagingFee,
        getTotal,
        toastMessage,
        showToast
      }}
    >
      {children}
      {/* Accessible Floating Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-50 bg-[#7B3F00] text-white px-5 py-3 rounded-xl shadow-warm-lg flex items-center space-x-3 border border-gold-500/30 animate-bounce transition-all duration-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gold-400"></span>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

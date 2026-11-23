import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, 
  CheckCircle2, AlertCircle, ShieldAlert, CreditCard, 
  Smartphone, Banknote, MapPin, Truck, Store 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import PureVegBadge from '../components/PureVegBadge';

export default function Cart() {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    getSubtotal, 
    getPackagingFee, 
    getTotal 
  } = useCart();

  const [orderType, setOrderType] = useState('Delivery'); // 'Delivery' or 'Pickup'
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'UPI', 'Card', 'COD'
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const subtotal = getSubtotal();
  const packagingFee = getPackagingFee();
  const total = getTotal();

  const handleCheckout = (e) => {
    e.preventDefault();
    const orderId = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const orderRecord = {
      orderId,
      items: [...cart],
      total,
      orderType,
      customer: { ...customer },
      paymentMethod,
      timestamp: new Date().toLocaleString()
    };
    setConfirmedOrder(orderRecord);
    clearCart();
  };

  // Order Confirmation View
  if (confirmedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 animate-fadeIn">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-warm text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Demo Order Confirmed
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D1C00]">
              Sweet! Your Order Has Been Placed
            </h1>
            <p className="text-sm text-amber-950/70 max-w-md mx-auto">
              Order ID: <strong className="font-mono text-gold-700">{confirmedOrder.orderId}</strong>
            </p>
          </div>

          {/* Demo Alert Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 text-left flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block text-amber-950">
                Notice: Demonstration Checkout Only
              </strong>
              <span>
                No actual money was charged. This simulated order was processed with method "{confirmedOrder.paymentMethod}". The bakery was not billed.
              </span>
            </div>
          </div>

          {/* Order Summary Receipt */}
          <div className="bg-cream-100 rounded-2xl p-6 text-left space-y-4 border border-[#F1E5D5]">
            <h3 className="font-serif font-bold text-base text-[#3D1C00] border-b border-amber-200 pb-2">
              Order Receipt ({confirmedOrder.orderType})
            </h3>
            
            <div className="space-y-2 text-sm divide-y divide-amber-100">
              {confirmedOrder.items.map((item) => (
                <div key={item.id} className="pt-2 flex justify-between items-center text-xs sm:text-sm">
                  <span>
                    {item.name} <span className="text-amber-900/60 font-medium">× {item.quantity}</span>
                  </span>
                  <span className="font-bold text-[#7B3F00]">
                    ₹{(typeof item.price === 'number' ? item.price : 0) * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-amber-200 flex justify-between items-center font-bold text-base text-[#3D1C00]">
              <span>Total Paid (Simulated)</span>
              <span className="text-xl text-[#7B3F00]">₹{confirmedOrder.total}</span>
            </div>

            <div className="pt-2 text-xs text-amber-900/70 border-t border-amber-200 space-y-1">
              <div><strong>Customer:</strong> {confirmedOrder.customer.name} ({confirmedOrder.customer.phone})</div>
              {confirmedOrder.orderType === 'Delivery' && (
                <div><strong>Delivery Address:</strong> {confirmedOrder.customer.address}</div>
              )}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-sm transition-colors"
            >
              Order More Sweet Treats
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-[#7B3F00] bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Empty Cart View
  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-6">
        <div className="w-20 h-20 bg-amber-100 text-[#7B3F00] rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-[#3D1C00]">Your Cart is Empty</h1>
          <p className="text-sm text-amber-950/70 max-w-md mx-auto">
            You haven’t added any delicious pure veg cakes or pastries yet. Check out our fresh daily menu!
          </p>
        </div>
        <div>
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-warm transition-colors"
          >
            <span>Explore Bakery Menu</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    );
  }

  // Active Cart & Checkout Form
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      <div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D1C00]">
          Your Shopping Cart
        </h1>
        <p className="text-sm text-amber-950/70 mt-1">
          Review your pure-veg treats and enter pickup or delivery details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Cart Items List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl border border-[#F1E5D5] shadow-xs overflow-hidden divide-y divide-amber-100">
            {cart.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-2xl object-cover bg-cream-200 shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-base text-[#3D1C00]">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-0.5">
                        <PureVegBadge showText={false} />
                        <span className="text-xs text-amber-900/60 font-medium">
                          {item.weight || "100% Pure Veg"}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-amber-900/40 hover:text-red-600 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-base font-bold text-[#7B3F00]">
                      ₹{item.price}
                    </span>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 bg-cream-200 px-2 py-1 rounded-xl border border-amber-200">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-[#7B3F00] hover:bg-white rounded-lg transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-xs w-6 text-center text-[#3D1C00]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-[#7B3F00] hover:bg-white rounded-lg transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-amber-900/70 pt-2 px-2">
            <span>Cart persists locally in your browser.</span>
            <button
              type="button"
              onClick={clearCart}
              className="text-red-700 font-bold hover:underline"
            >
              Clear Entire Cart
            </button>
          </div>
        </div>

        {/* Right: Checkout & Customer Details */}
        <div className="lg:col-span-5 space-y-6">
          <form onSubmit={handleCheckout} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E5D5] shadow-xs space-y-6">
            <h2 className="font-serif font-bold text-xl text-[#3D1C00] border-b border-amber-100 pb-3">
              Delivery & Checkout
            </h2>

            {/* Delivery vs Takeaway selector */}
            <div>
              <label className="block text-xs font-bold text-amber-950/80 mb-2">
                Order Fulfillment
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOrderType('Delivery')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                    orderType === 'Delivery'
                      ? 'bg-[#7B3F00] text-white border-[#7B3F00] shadow-xs'
                      : 'bg-cream-100 text-[#4A2E18] border-amber-200'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Local Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('Pickup')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                    orderType === 'Pickup'
                      ? 'bg-[#7B3F00] text-white border-[#7B3F00] shadow-xs'
                      : 'bg-cream-100 text-[#4A2E18] border-amber-200'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>Store Pickup</span>
                </button>
              </div>
            </div>

            {/* Customer Inputs */}
            <div className="space-y-3">
              <div>
                <label htmlFor="customer-name" className="block text-xs font-semibold text-amber-950/80 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="customer-name"
                  required
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="e.g. Ramesh Kulkarni"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                />
              </div>

              <div>
                <label htmlFor="customer-phone" className="block text-xs font-semibold text-amber-950/80 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="customer-phone"
                  required
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="e.g. +91 98220 12345"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                />
              </div>

              {orderType === 'Delivery' && (
                <div>
                  <label htmlFor="customer-address" className="block text-xs font-semibold text-amber-950/80 mb-1">
                    Delivery Address (Yerawada / Pune) *
                  </label>
                  <textarea
                    id="customer-address"
                    required
                    rows={2}
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    placeholder="Building name, flat number, street, nearby landmark..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Simulated Payment Methods */}
            <div>
              <label className="block text-xs font-bold text-amber-950/80 mb-2">
                Simulated Payment Method
              </label>
              <div className="space-y-2">
                <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                  paymentMethod === 'UPI' ? 'border-[#7B3F00] bg-amber-50/80' : 'border-amber-200 bg-cream-50'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    checked={paymentMethod === 'UPI'}
                    onChange={() => setPaymentMethod('UPI')}
                    className="text-[#7B3F00] focus:ring-gold-500"
                  />
                  <Smartphone className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-semibold text-[#3D1C00]">
                    UPI (Google Pay / PhonePe / Paytm Demo)
                  </span>
                </label>

                <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                  paymentMethod === 'Card' ? 'border-[#7B3F00] bg-amber-50/80' : 'border-amber-200 bg-cream-50'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Card"
                    checked={paymentMethod === 'Card'}
                    onChange={() => setPaymentMethod('Card')}
                    className="text-[#7B3F00] focus:ring-gold-500"
                  />
                  <CreditCard className="w-4 h-4 text-blue-700" />
                  <span className="text-xs font-semibold text-[#3D1C00]">
                    Credit / Debit Card (Demo POS)
                  </span>
                </label>

                <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                  paymentMethod === 'COD' ? 'border-[#7B3F00] bg-amber-50/80' : 'border-amber-200 bg-cream-50'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={paymentMethod === 'COD'}
                    onChange={() => setPaymentMethod('COD')}
                    className="text-[#7B3F00] focus:ring-gold-500"
                  />
                  <Banknote className="w-4 h-4 text-amber-800" />
                  <span className="text-xs font-semibold text-[#3D1C00]">
                    Cash on Delivery / Pay at Counter
                  </span>
                </label>
              </div>
            </div>

            {/* Prominent Demo Notice */}
            <div className="bg-amber-100/90 border border-amber-300 rounded-xl p-3 text-xs text-amber-950 flex items-start space-x-2.5">
              <ShieldAlert className="w-4 h-4 text-[#7B3F00] shrink-0 mt-0.5" />
              <p>
                <strong>DEMO CHECKOUT:</strong> No real payment gateway is integrated. No financial charges will be made.
              </p>
            </div>

            {/* Bill Summary */}
            <div className="space-y-2 pt-2 border-t border-amber-100 text-xs">
              <div className="flex justify-between text-amber-900/80">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-amber-900/80">
                <span>Bakery Packaging & Box</span>
                <span>₹{packagingFee}</span>
              </div>
              <div className="flex justify-between font-bold text-base text-[#3D1C00] pt-2 border-t border-amber-200">
                <span>Total Amount</span>
                <span className="text-xl text-[#7B3F00]">₹{total}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-warm transition-all flex items-center justify-center space-x-2"
            >
              <span>Place Demo Order (₹{total})</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}

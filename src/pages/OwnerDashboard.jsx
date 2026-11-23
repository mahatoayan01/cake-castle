import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, IndianRupee, Clock, CheckCircle2, 
  Search, LogOut, Filter, ArrowUpRight, Crown, AlertCircle 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { sampleDashboardData } from '../data/sampleOrders';

export default function OwnerDashboard() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'payments'

  // Route protection
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const { stats, orders, payments } = sampleDashboardData;

  // Filter orders
  const filteredOrders = orders.filter((ord) => {
    const matchesStatus = statusFilter === 'All' || ord.status === statusFilter;
    const matchesQuery =
      ord.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.phone.includes(searchQuery);
    return matchesStatus && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      
      {/* Top Header & Logout */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F1E5D5]">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#7B3F00] text-gold-400 flex items-center justify-center font-bold">
              <Crown className="w-5 h-5" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D1C00]">
              Cake Castle Owner Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              Logged in as owner@demo.com
            </span>
            <span className="text-amber-900/40">|</span>
            <span className="font-bold text-gold-800 bg-amber-100/90 px-2 py-0.5 rounded">
              Sample Data Mode
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Orders Today */}
        <div className="bg-white rounded-2xl p-5 border border-[#F1E5D5] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-amber-900/60">
            <span className="text-xs font-bold uppercase tracking-wider">Orders Today</span>
            <ShoppingBag className="w-4 h-4 text-[#7B3F00]" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-[#3D1C00]">
            {stats.ordersToday}
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold block">
            +3 from yesterday
          </span>
        </div>

        {/* Revenue Today */}
        <div className="bg-white rounded-2xl p-5 border border-[#F1E5D5] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-amber-900/60">
            <span className="text-xs font-bold uppercase tracking-wider">Today's Revenue</span>
            <IndianRupee className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-[#7B3F00]">
            ₹{stats.revenueToday.toLocaleString()}
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold block">
            ₹200 avg order value
          </span>
        </div>

        {/* Pending Orders */}
        <div className="bg-white rounded-2xl p-5 border border-[#F1E5D5] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-amber-900/60">
            <span className="text-xs font-bold uppercase tracking-wider">Pending / Baking</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-amber-600">
            {stats.pendingOrders}
          </div>
          <span className="text-[11px] text-amber-800/80 font-semibold block">
            Requires kitchen attention
          </span>
        </div>

        {/* Delivered Today */}
        <div className="bg-white rounded-2xl p-5 border border-[#F1E5D5] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-amber-900/60">
            <span className="text-xs font-bold uppercase tracking-wider">Completed / Delivered</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-700">
            {stats.deliveredToday}
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold block">
            100% on-time delivery
          </span>
        </div>

      </div>

      {/* Main Content: Orders Table vs Payment History Tabs */}
      <div className="bg-white rounded-3xl border border-[#F1E5D5] shadow-xs overflow-hidden space-y-6 p-4 sm:p-6">
        
        {/* Navigation Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-amber-100 pb-4">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'orders'
                  ? 'bg-[#7B3F00] text-white shadow-xs'
                  : 'bg-cream-100 text-[#4A2E18] hover:bg-amber-100'
              }`}
            >
              All Online Orders ({orders.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('payments')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'payments'
                  ? 'bg-[#7B3F00] text-white shadow-xs'
                  : 'bg-cream-100 text-[#4A2E18] hover:bg-amber-100'
              }`}
            >
              Payment History ({payments.length})
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {activeTab === 'orders' && (
              <div className="flex items-center space-x-1.5">
                <span className="text-xs text-amber-900/60 font-semibold hidden md:inline">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-amber-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Baking">Baking</option>
                  <option value="Ready">Ready</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            )}

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-900/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ID, customer..."
                className="pl-8 pr-3 py-1.5 rounded-xl border border-amber-200 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 w-36 sm:w-48"
              />
            </div>
          </div>
        </div>

        {/* Tab 1: All Online Orders Table */}
        {activeTab === 'orders' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-amber-50/70 text-amber-900/70 font-semibold border-b border-amber-200/80 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Items</th>
                  <th className="py-3 px-4">Fulfillment</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-amber-900/60">
                      No orders match the current filter or search.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((ord) => {
                    const statusColors = {
                      Pending: 'bg-amber-100 text-amber-900 border-amber-300',
                      Baking: 'bg-blue-100 text-blue-900 border-blue-300',
                      Ready: 'bg-purple-100 text-purple-900 border-purple-300',
                      Delivered: 'bg-emerald-100 text-emerald-900 border-emerald-300',
                    };
                    return (
                      <tr key={ord.id} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#7B3F00]">
                          {ord.id}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-[#3D1C00]">{ord.customerName}</div>
                          <div className="text-[11px] text-amber-900/60 font-mono">{ord.phone}</div>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          {ord.items.map((i, idx) => (
                            <div key={idx} className="truncate text-amber-950/80">
                              {i.quantity}× {i.name}
                            </div>
                          ))}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-medium text-amber-900/80 block">{ord.orderType}</span>
                          <span className="text-[10px] text-amber-900/60 truncate block max-w-[150px]">
                            {ord.address}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#7B3F00] text-sm">
                          ₹{ord.total}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[10px] border ${
                              statusColors[ord.status] || 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-amber-900/60 whitespace-nowrap">
                          {ord.createdAt}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Payment History Table */}
        {activeTab === 'payments' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-amber-50/70 text-amber-900/70 font-semibold border-b border-amber-200/80 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Payment ID</th>
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Method</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                {payments.map((pay) => (
                  <tr key={pay.paymentId} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#3D1C00]">
                      {pay.paymentId}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#7B3F00]">
                      {pay.orderId}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-amber-950/80">
                      {pay.customerName}
                    </td>
                    <td className="py-3.5 px-4 text-amber-900/80">
                      {pay.method}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-emerald-800 text-sm">
                      ₹{pay.amount}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {pay.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-amber-900/60 whitespace-nowrap">
                      {pay.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Sample data footer notice */}
        <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-xs text-amber-900/60">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>Loaded from <code className="font-mono text-amber-900">src/data/sampleOrders.js</code></span>
          </div>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold text-[10px]">
            DEMO MODE
          </span>
        </div>

      </div>

    </div>
  );
}

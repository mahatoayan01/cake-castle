/**
 * Sample Orders and Payment Transactions for Owner Dashboard
 * Labeled visibly with "Sample data" in the UI.
 */

export const sampleDashboardData = {
  stats: {
    ordersToday: 18,
    revenueToday: 7420,
    pendingOrders: 4,
    deliveredToday: 14,
    currency: "₹"
  },
  orders: [
    {
      id: "ORD-2026-1041",
      customerName: "Pooja Kulkarni",
      phone: "+91 98221 44521",
      email: "pooja.k@example.com",
      items: [
        { name: "White Forest Cake (500g)", quantity: 1, price: 399 },
        { name: "Cupcake (Pack of 2)", quantity: 2, price: 79 }
      ],
      total: 557,
      status: "Pending", // Pending, Baking, Ready, Delivered, Cancelled
      orderType: "Delivery",
      address: "Flat 402, Ganga Carnation, Tingre Nagar, Pune",
      paymentMethod: "UPI (Google Pay)",
      paymentStatus: "Paid",
      createdAt: "2026-11-23 13:42"
    },
    {
      id: "ORD-2026-1040",
      customerName: "Rahul Shinde",
      phone: "+91 94220 89102",
      email: "rshinde@example.com",
      items: [
        { name: "Chocolate Mawa Cake", quantity: 2, price: 159 },
        { name: "Pastry Cake (Black Forest)", quantity: 4, price: 39 }
      ],
      total: 474,
      status: "Baking",
      orderType: "Takeaway Pickup",
      address: "Store Pickup (Yerawada)",
      paymentMethod: "UPI (PhonePe)",
      paymentStatus: "Paid",
      createdAt: "2026-11-23 13:15"
    },
    {
      id: "ORD-2026-1039",
      customerName: "Sneha Deshmukh",
      phone: "+91 97654 32189",
      email: "sneha.d@example.com",
      items: [
        { name: "Custom Designer Birthday Cake (1kg)", quantity: 1, price: 850 },
        { name: "Candles & Celebration Pack", quantity: 1, price: 50 }
      ],
      total: 900,
      status: "Ready",
      orderType: "Delivery",
      address: "B-12, Hariganga Society, Yerawada, Pune",
      paymentMethod: "Card (POS)",
      paymentStatus: "Paid",
      createdAt: "2026-11-23 12:20"
    },
    {
      id: "ORD-2026-1038",
      customerName: "Amitabh Joshi",
      phone: "+91 98812 77650",
      email: "ajoshi@example.com",
      items: [
        { name: "Plum Cake", quantity: 2, price: 149 },
        { name: "Chocolate Truffle Cake (500g)", quantity: 1, price: 420 }
      ],
      total: 718,
      status: "Delivered",
      orderType: "Delivery",
      address: "Shop 4, Alandi Road, Vishrantwadi, Pune",
      paymentMethod: "Cash on Delivery",
      paymentStatus: "Paid",
      createdAt: "2026-11-23 11:30"
    },
    {
      id: "ORD-2026-1037",
      customerName: "Vikram Gaikwad",
      phone: "+91 99230 11244",
      email: "vgaikwad@example.com",
      items: [
        { name: "Pastry Cake (Pineapple)", quantity: 6, price: 39 },
        { name: "Cupcake (Vanilla Cream)", quantity: 3, price: 79 }
      ],
      total: 471,
      status: "Delivered",
      orderType: "Takeaway Pickup",
      address: "Store Pickup (Yerawada)",
      paymentMethod: "UPI (Paytm)",
      paymentStatus: "Paid",
      createdAt: "2026-11-23 10:45"
    },
    {
      id: "ORD-2026-1036",
      customerName: "Anjali Mehta",
      phone: "+91 98234 55678",
      email: "amehta@example.com",
      items: [
        { name: "White Forest Cake (1kg)", quantity: 1, price: 750 }
      ],
      total: 750,
      status: "Delivered",
      orderType: "Delivery",
      address: "Row House 7, Ram Society, Yerawada, Pune",
      paymentMethod: "UPI (Google Pay)",
      paymentStatus: "Paid",
      createdAt: "2026-11-23 09:15"
    }
  ],
  payments: [
    {
      paymentId: "PAY-98412",
      orderId: "ORD-2026-1041",
      customerName: "Pooja Kulkarni",
      method: "UPI (Google Pay)",
      amount: 557,
      status: "Success",
      timestamp: "2026-11-23 13:42:10"
    },
    {
      paymentId: "PAY-98411",
      orderId: "ORD-2026-1040",
      customerName: "Rahul Shinde",
      method: "UPI (PhonePe)",
      amount: 474,
      status: "Success",
      timestamp: "2026-11-23 13:15:22"
    },
    {
      paymentId: "PAY-98410",
      orderId: "ORD-2026-1039",
      customerName: "Sneha Deshmukh",
      method: "Credit Card (Visa)",
      amount: 900,
      status: "Success",
      timestamp: "2026-11-23 12:20:45"
    },
    {
      paymentId: "PAY-98409",
      orderId: "ORD-2026-1038",
      customerName: "Amitabh Joshi",
      method: "Cash on Delivery",
      amount: 718,
      status: "Collected",
      timestamp: "2026-11-23 12:05:14"
    },
    {
      paymentId: "PAY-98408",
      orderId: "ORD-2026-1037",
      customerName: "Vikram Gaikwad",
      method: "UPI (Paytm)",
      amount: 471,
      status: "Success",
      timestamp: "2026-11-23 10:45:08"
    },
    {
      paymentId: "PAY-98407",
      orderId: "ORD-2026-1036",
      customerName: "Anjali Mehta",
      method: "UPI (Google Pay)",
      amount: 750,
      status: "Success",
      timestamp: "2026-11-23 09:15:50"
    }
  ]
};

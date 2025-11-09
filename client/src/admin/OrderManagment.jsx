
// import React, { useEffect, useMemo, useCallback, useState } from 'react';
// import { 
//   Eye, Truck, CheckCircle, XCircle, Search, X, IndianRupee, 
//   User, MapPin, Phone, Mail, Package, Calendar, CreditCard,
//   ChevronDown, ChevronUp, Edit, Save, X as XIcon
// } from 'lucide-react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { 
//   setOrders, 
//   setOrder, 
//   setLoading, 
//   setUpdatingStatus, 
//   updateOrderStatus, 
//   clearOrder 
// } from '../redux/orderSlice';

// const OrderManagement = () => {
//   const { orders, order, loading, updatingStatus } = useSelector((state) => state.orders);
//   const dispatch = useDispatch();
  
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [paymentFilter, setPaymentFilter] = useState('all');
//   const [dateFilter, setDateFilter] = useState('all');
//   const [showOrderDetails, setShowOrderDetails] = useState(false);
//   const [expandedRows, setExpandedRows] = useState(new Set());
//   const [editingStatus, setEditingStatus] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

//   // Handle window resize for responsive design
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Fetch all orders
//   const fetchOrders = useCallback(async () => {
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.get(`http://localhost:5000/api/payments/orders`, {
//         withCredentials: true,
//       });
      
//       if (res.data.success) {
//         dispatch(setOrders(res.data.orders));
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       toast.error('Failed to fetch orders');
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     fetchOrders();
//   }, [fetchOrders]);

//   const handleUpdateOrderStatus = useCallback(async (orderId, newStatus) => {
//     try {
//       console.log('Updating order:', orderId, 'to status:', newStatus);
      
//       dispatch(setUpdatingStatus(true));
//       const res = await axios.put(
//         `http://localhost:5000/api/payments/updateOrderStatus/${orderId}`,
//         { orderStatus: newStatus },
//         { 
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       console.log('Update response:', res.data);
      
//       if (res.data.success) {
//         dispatch(updateOrderStatus({ orderId, newStatus }));
//         setEditingStatus(null);
//         toast.success('Order status updated successfully');
        
//         // Refresh the orders list
//         fetchOrders();
//       }
//     } catch (error) {
//       console.error('Error updating order status:', error);
//       console.error('Error response:', error.response);
      
//       if (error.response?.status === 404) {
//         toast.error('Order not found. It may have been deleted.');
//       } else {
//         toast.error(error.response?.data?.message || 'Failed to update order status');
//       }
//     } finally {
//       dispatch(setUpdatingStatus(false));
//     }
//   }, [dispatch, fetchOrders]);

//   const closeOrderDetails = useCallback(() => {
//     setShowOrderDetails(false);
//     dispatch(clearOrder());
//   }, [dispatch]);

//   // Toggle row expansion
//   const toggleRowExpansion = useCallback((orderId) => {
//     setExpandedRows(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(orderId)) {
//         newSet.delete(orderId);
//       } else {
//         newSet.add(orderId);
//       }
//       return newSet;
//     });
//   }, []);

//   // Filter orders
//   const filteredOrders = useMemo(() => {
//     return orders.filter(order => {
//       const matchesSearch = 
//         order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.customerDetails.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.customerDetails.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.customerDetails.phone.toLowerCase().includes(searchTerm.toLowerCase());
    
//       const matchesOrderStatus = statusFilter === 'all' || order.orderStatus === statusFilter;
//       const matchesPaymentStatus = paymentFilter === 'all' || order.paymentStatus === paymentFilter;
      
//       let matchesDate = true;
//       if (dateFilter !== 'all') {
//         const orderDate = new Date(order.createdAt);
//         const today = new Date();
        
//         if (dateFilter === 'today') {
//           matchesDate = orderDate.toDateString() === today.toDateString();
//         } else if (dateFilter === 'week') {
//           const oneWeekAgo = new Date(today);
//           oneWeekAgo.setDate(today.getDate() - 7);
//           matchesDate = orderDate >= oneWeekAgo;
//         } else if (dateFilter === 'month') {
//           const oneMonthAgo = new Date(today);
//           oneMonthAgo.setMonth(today.getMonth() - 1);
//           matchesDate = orderDate >= oneMonthAgo;
//         }
//       }
      
//       return matchesSearch && matchesOrderStatus && matchesPaymentStatus && matchesDate;
//     });
//   }, [orders, searchTerm, statusFilter, paymentFilter, dateFilter]);

//   // Order statistics
//   const orderStats = useMemo(() => {
//     const totalOrders = orders.length;
//     const processingOrders = orders.filter(o => o.orderStatus === 'processing').length;
//     const shippedOrders = orders.filter(o => o.orderStatus === 'shipped').length;
//     const deliveredOrders = orders.filter(o => o.orderStatus === 'delivered').length;
//     const cancelledOrders = orders.filter(o => o.orderStatus === 'cancelled').length;
    
//     const totalRevenue = orders
//       .filter(o => o.paymentStatus === 'completed')
//       .reduce((sum, order) => sum + order.totalAmount, 0);
    
//     return {
//       totalOrders,
//       processingOrders,
//       shippedOrders,
//       deliveredOrders,
//       cancelledOrders,
//       totalRevenue: totalRevenue.toFixed(2)
//     };
//   }, [orders]);

//   // Status badge component
//   const StatusBadge = ({ status, type = 'order' }) => {
//     const statusConfig = {
//       order: {
//         processing: { color: 'bg-blue-100 text-blue-800 border border-blue-200', label: 'Processing' },
//         shipped: { color: 'bg-purple-100 text-purple-800 border border-purple-200', label: 'Shipped' },
//         delivered: { color: 'bg-emerald-100 text-emerald-800 border border-emerald-200', label: 'Delivered' },
//         cancelled: { color: 'bg-red-100 text-red-800 border border-red-200', label: 'Cancelled' }
//       },
//       payment: {
//         pending: { color: 'bg-amber-100 text-amber-800 border border-amber-200', label: 'Pending' },
//         completed: { color: 'bg-emerald-100 text-emerald-800 border border-emerald-200', label: 'Completed' },
//         failed: { color: 'bg-red-100 text-red-800 border border-red-200', label: 'Failed' }
//       }
//     };
    
//     const config = statusConfig[type][status] || { 
//       color: 'bg-gray-100 text-gray-800 border border-gray-200', 
//       label: 'Unknown' 
//     };
    
//     return (
//       <span className={`px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm font-medium rounded-full ${config.color} flex items-center gap-1 md:gap-2`}>
//         {type === 'payment' && (
//           <CreditCard className="w-3 h-3 md:w-3 md:h-3" />
//         )}
//         <span className="truncate">{config.label}</span>
//       </span>
//     );
//   };

//   // Order details modal
//   const OrderDetailsModal = useMemo(() => (
//     showOrderDetails && order && (
//       <div className="fixed inset-0 z-50 overflow-y-auto">
//         <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeOrderDetails}></div>
//         <div className={`absolute top-0 h-full bg-white shadow-2xl overflow-y-auto transition-all duration-300 ${
//           isMobile ? 'right-0 left-0 w-full' : 'right-0 w-full max-w-2xl'
//         }`}>
//           <div className="h-full flex flex-col">
//             <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 bg-slate-50">
//               <div>
//                 <h3 className="text-lg md:text-xl font-semibold text-slate-800">Order Details</h3>
//                 <p className="text-xs md:text-sm text-slate-600 mt-1">#{order.orderId}</p>
//               </div>
//               <button
//                 onClick={closeOrderDetails}
//                 className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
//                 aria-label="Close"
//               >
//                 <X className="w-5 h-5 md:w-5 md:h-5" />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4 md:p-6">
//               <div className="space-y-4 md:space-y-6">
//                 {/* Order Status Section */}
//                 <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
//                   <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
//                     <Truck className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
//                     Order & Payment Status
//                   </h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                     <div className="space-y-2 md:space-y-3">
//                       <label className="block text-sm font-medium text-slate-700">Order Status</label>
//                       <div className="flex items-center gap-2 md:gap-3">
//                         <StatusBadge status={order.orderStatus} />
//                         <select
//                           value={order.orderStatus}
//                           onChange={(e) => handleUpdateOrderStatus(order._id, e.target.value)}
//                           disabled={updatingStatus}
//                           className="px-3 py-1.5 md:px-4 md:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-sm"
//                         >
//                           <option value="processing">Processing</option>
//                           <option value="shipped">Shipped</option>
//                           <option value="delivered">Delivered</option>
//                           <option value="cancelled">Cancelled</option>
//                         </select>
//                         {updatingStatus && (
//                           <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
//                         )}
//                       </div>
//                     </div>
//                     <div className="space-y-2 md:space-y-3">
//                       <label className="block text-sm font-medium text-slate-700">Payment Status</label>
//                       <StatusBadge status={order.paymentStatus} type="payment" />
//                     </div>
//                   </div>
//                   <div className="mt-3 md:mt-4 p-2 md:p-3 bg-slate-50 rounded-lg">
//                     <p className="text-xs text-slate-600 font-mono truncate">
//                       Payment ID: {order.paymentId}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Customer Information */}
//                 <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
//                   <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
//                     <User className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
//                     Customer Information
//                   </h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                     <div className="space-y-2 md:space-y-3">
//                       <div>
//                         <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
//                         <p className="font-medium text-slate-800">{order.customerDetails.name}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-slate-600 mb-1 flex items-center gap-2">
//                           <Mail className="w-3 h-3 md:w-4 md:h-4" />
//                           Email Address
//                         </label>
//                         <p className="text-slate-800 truncate">{order.customerDetails.email}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-slate-600 mb-1 flex items-center gap-2">
//                           <Phone className="w-3 h-3 md:w-4 md:h-4" />
//                           Phone Number
//                         </label>
//                         <p className="text-slate-800">{order.customerDetails.phone}</p>
//                       </div>
//                     </div>
//                     <div className="space-y-2 md:space-y-3">
//                       <div>
//                         <label className="block text-sm font-medium text-slate-600 mb-1 flex items-center gap-2">
//                           <MapPin className="w-3 h-3 md:w-4 md:h-4" />
//                           Shipping Address
//                         </label>
//                         <p className="text-slate-800 leading-relaxed text-sm">
//                           {order.customerDetails.address}<br />
//                           {order.customerDetails.city}, {order.customerDetails.state}<br />
//                           PIN: {order.customerDetails.pincode}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Order Items */}
//                 <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
//                   <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
//                     <Package className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
//                     Order Items ({order.products.length})
//                   </h4>
//                   <div className="space-y-3 md:space-y-4">
//                     {order.products.map((item, index) => (
//                       <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-50 rounded-lg border border-slate-200">
//                         <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
//                           <img
//                             src={item.imageUrl || '/placeholder-image.jpg'}
//                             alt={item.name}
//                             className="w-full h-full object-cover rounded-lg border-2 border-slate-200 shadow-sm"
//                           />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h5 className="font-semibold text-slate-800 text-sm truncate">{item.name}</h5>
//                           <p className="text-xs md:text-sm text-slate-600 mt-1">Quantity: {item.quantity}</p>
//                           <p className="text-xs text-slate-500 font-mono mt-1 truncate">
//                             Product ID: {item.product?.toString().substring(0, 8)}...
//                           </p>
//                         </div>
//                         <div className="text-right flex-shrink-0">
//                           <p className="font-semibold text-emerald-600 text-sm">
//                             <IndianRupee className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
//                             {(item.price * item.quantity).toFixed(2)}
//                           </p>
//                           <p className="text-xs text-slate-500 mt-1">
//                             <IndianRupee className="w-3 h-3 inline mr-1" />
//                             {item.price} each
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
//                   <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg">Order Summary</h4>
//                   <div className="space-y-2 md:space-y-3">
//                     <div className="flex justify-between items-center py-2 border-b border-slate-200">
//                       <span className="text-slate-600 text-sm md:text-base">Items Total</span>
//                       <span className="font-medium text-slate-800 text-sm md:text-base">
//                         <IndianRupee className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
//                         {order.products.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center py-2">
//                       <span className="font-semibold text-slate-800 text-base md:text-lg">Total Amount</span>
//                       <span className="font-bold text-emerald-600 text-base md:text-lg">
//                         <IndianRupee className="w-4 h-4 md:w-5 md:h-5 inline mr-1" />
//                         {order.totalAmount.toFixed(2)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Order Timeline */}
//                 <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
//                   <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
//                     <Calendar className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
//                     Order Timeline
//                   </h4>
//                   <div className="space-y-3 md:space-y-4">
//                     <div className="flex items-start gap-3 md:gap-4">
//                       <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="font-medium text-slate-800 text-sm md:text-base">Order Created</p>
//                         <p className="text-xs md:text-sm text-slate-600 mt-1">
//                           {new Date(order.createdAt).toLocaleString('en-IN', {
//                             weekday: 'short',
//                             year: 'numeric',
//                             month: 'short',
//                             day: 'numeric',
//                             hour: '2-digit',
//                             minute: '2-digit'
//                           })}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3 md:gap-4">
//                       <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <Truck className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="font-medium text-slate-800 text-sm md:text-base">Last Updated</p>
//                         <p className="text-xs md:text-sm text-slate-600 mt-1">
//                           {new Date(order.updatedAt).toLocaleString('en-IN', {
//                             weekday: 'short',
//                             year: 'numeric',
//                             month: 'short',
//                             day: 'numeric',
//                             hour: '2-digit',
//                             minute: '2-digit'
//                           })}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   ), [showOrderDetails, order, updatingStatus, handleUpdateOrderStatus, closeOrderDetails, isMobile]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-96">
//         <div className="text-center">
//           <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-slate-600">Loading orders...</p>
//         </div>
//       </div>
//     );
//   }

//   // Mobile Card View
//   const MobileOrderCard = ({ order }) => (
//     <div className="bg-white rounded-lg shadow-md border border-slate-200 mb-4 overflow-hidden">
//       <div 
//         className="p-4 flex justify-between items-center cursor-pointer"
//         onClick={() => toggleRowExpansion(order._id)}
//       >
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-2">
//             <p className="text-sm font-semibold text-slate-800">#{order.orderId}</p>
//             <p className="text-xs text-slate-500">
//               {new Date(order.createdAt).toLocaleDateString('en-IN')}
//             </p>
//           </div>
//           <p className="text-sm font-medium text-slate-800 mb-1">{order.customerDetails.name}</p>
//           <p className="text-xs text-slate-500 truncate">{order.customerDetails.email}</p>
//         </div>
//         <div className="ml-2">
//           {expandedRows.has(order._id) ? (
//             <ChevronUp className="w-5 h-5 text-slate-400" />
//           ) : (
//             <ChevronDown className="w-5 h-5 text-slate-400" />
//           )}
//         </div>
//       </div>
      
//       <div className="px-4 pb-4 grid grid-cols-2 gap-2">
//         <div>
//           <p className="text-xs text-slate-600 mb-1">Amount</p>
//           <p className="text-sm font-semibold text-emerald-600">
//             <IndianRupee className="w-3 h-3 inline mr-1" />
//             {order.totalAmount.toFixed(2)}
//           </p>
//         </div>
//         <div>
//           <p className="text-xs text-slate-600 mb-1">Order Status</p>
//           <StatusBadge status={order.orderStatus} />
//         </div>
//         <div>
//           <p className="text-xs text-slate-600 mb-1">Payment Status</p>
//           <StatusBadge status={order.paymentStatus} type="payment" />
//         </div>
//         <div className="flex items-end justify-end">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setEditingStatus(editingStatus === order._id ? null : order._id);
//             }}
//             className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//             title="Edit Status"
//           >
//             <Edit className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
      
//       {expandedRows.has(order._id) && (
//         <div className="px-4 pb-4 border-t border-slate-200 pt-4">
//           <div className="space-y-4">
//             <div>
//               <h4 className="font-semibold text-slate-700 text-sm mb-2">Customer Information</h4>
//               <div className="space-y-2 text-xs">
//                 <p><span className="text-slate-600">Name:</span> {order.customerDetails.name}</p>
//                 <p>
//                   <span className="text-slate-600">Email:</span>{' '}
//                   <a 
//                     href={`mailto:${order.customerDetails.email}`} 
//                     className="text-blue-600 hover:underline"
//                   >
//                     {order.customerDetails.email}
//                   </a>
//                 </p>
//                 <p>
//                   <span className="text-slate-600">Phone:</span>{' '}
//                   <a 
//                     href={`tel:${order.customerDetails.phone}`} 
//                     className="text-blue-600 hover:underline"
//                   >
//                     {order.customerDetails.phone}
//                   </a>
//                 </p>
//                 <p><span className="text-slate-600">Address:</span> {order.customerDetails.address}</p>
//                 <p><span className="text-slate-600">City:</span> {order.customerDetails.city}</p>
//                 <p><span className="text-slate-600">State:</span> {order.customerDetails.state}</p>
//                 <p><span className="text-slate-600">PIN:</span> {order.customerDetails.pincode}</p>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-slate-700 text-sm mb-2">Order Items</h4>
//               <div className="space-y-2">
//                 {order.products.map((item, index) => (
//                   <div key={index} className="flex items-center justify-between text-xs">
//                     <span className="truncate max-w-[70%]">{item.name} (x{item.quantity})</span>
//                     <span className="font-semibold whitespace-nowrap">
//                       <IndianRupee className="w-3 h-3 inline mr-1" />
//                       {(item.price * item.quantity).toFixed(2)}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {editingStatus === order._id && (
//               <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
//                 <h5 className="font-semibold text-slate-700 text-sm mb-2">Update Order Status</h5>
//                 <div className="flex items-center gap-2">
//                   <select
//                     value={order.orderStatus}
//                     onChange={(e) => handleUpdateOrderStatus(order._id, e.target.value)}
//                     disabled={updatingStatus}
//                     className="px-3 py-1.5 border border-slate-300 rounded text-sm flex-1"
//                   >
//                     <option value="processing">Processing</option>
//                     <option value="shipped">Shipped</option>
//                     <option value="delivered">Delivered</option>
//                     <option value="cancelled">Cancelled</option>
//                   </select>
//                   <button
//                     onClick={() => setEditingStatus(null)}
//                     className="p-1.5 text-slate-500 hover:text-slate-700"
//                   >
//                     <XIcon className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="space-y-4 md:space-y-6 p-4 md:p-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h2 className="text-xl md:text-2xl font-bold text-slate-800">Order Management</h2>
//           <p className="text-xs md:text-sm text-slate-600 mt-1">Manage customer orders and track order status</p>
//         </div>
//         <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 bg-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
//           <Truck className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
//           <span>{orders.length} orders</span>
//         </div>
//       </div>

//       {/* Stats Overview */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
//         {[
//           { label: 'Total Orders', value: orderStats.totalOrders, icon: Truck, color: 'slate' },
//           { label: 'Processing', value: orderStats.processingOrders, icon: Package, color: 'blue' },
//           { label: 'Shipped', value: orderStats.shippedOrders, icon: Truck, color: 'purple' },
//           { label: 'Delivered', value: orderStats.deliveredOrders, icon: CheckCircle, color: 'emerald' },
//           { label: 'Cancelled', value: orderStats.cancelledOrders, icon: XCircle, color: 'red' },
//           { label: 'Revenue', value: `₹${orderStats.totalRevenue}`, icon: IndianRupee, color: 'amber' }
//         ].map((stat, index) => (
//           <div key={index} className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-3 md:p-4 rounded-xl shadow-lg border border-${stat.color}-200`}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-xs md:text-sm font-semibold text-slate-700">{stat.label}</h3>
//                 <p className={`text-lg md:text-xl font-bold text-${stat.color}-600 mt-1`}>{stat.value}</p>
//               </div>
//               <div className={`p-1.5 md:p-2 bg-${stat.color}-500 rounded-lg`}>
//                 <stat.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Filters and Search */}
//       <div className="bg-white rounded-xl shadow-lg border border-slate-200">
//         <div className="p-4 md:p-6 border-b border-slate-200">
//           <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
//             <div className="flex-1 relative w-full">
//               <Search className="w-4 h-4 md:w-5 md:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="Search orders by ID, name, email, or phone..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base"
//               />
//             </div>
            
//             <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="px-3 py-2 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base min-w-[130px] md:min-w-[150px]"
//               >
//                 <option value="all">All Status</option>
//                 <option value="processing">Processing</option>
//                 <option value="shipped">Shipped</option>
//                 <option value="delivered">Delivered</option>
//                 <option value="cancelled">Cancelled</option>
//               </select>
              
//               <select
//                 value={paymentFilter}
//                 onChange={(e) => setPaymentFilter(e.target.value)}
//                 className="px-3 py-2 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base min-w-[130px] md:min-w-[150px]"
//               >
//                 <option value="all">All Payments</option>
//                 <option value="pending">Pending</option>
//                 <option value="completed">Completed</option>
//                 <option value="failed">Failed</option>
//               </select>
              
//               <select
//                 value={dateFilter}
//                 onChange={(e) => setDateFilter(e.target.value)}
//                 className="px-3 py-2 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base min-w-[130px] md:min-w-[150px]"
//               >
//                 <option value="all">All Time</option>
//                 <option value="today">Today</option>
//                 <option value="week">Last 7 Days</option>
//                 <option value="month">Last 30 Days</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Orders Table/Cards */}
//         <div className="p-4 md:p-6">
//           {filteredOrders.length === 0 ? (
//             <div className="text-center py-8 md:py-12">
//               <Truck className="w-12 h-12 md:w-16 md:h-16 text-slate-300 mx-auto mb-4" />
//               <h3 className="text-base md:text-lg font-medium text-slate-600 mb-2">No orders found</h3>
//               <p className="text-slate-500 text-sm md:text-base">Try adjusting your search or filter criteria</p>
//             </div>
//           ) : isMobile ? (
//             // Mobile Card View
//             <div className="space-y-4">
//               {filteredOrders.map((order) => (
//                 <MobileOrderCard key={order._id} order={order} />
//               ))}
//             </div>
//           ) : (
//             // Desktop/Tablet Table View
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-slate-200">
//                     <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Order Details</th>
//                     <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Customer</th>
//                     <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Amount</th>
//                     <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Order Status</th>
//                     <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Payment Status</th>
//                     <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-200">
//                   {filteredOrders.map((order) => (
//                     <React.Fragment key={order._id}>
//                       <tr className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => toggleRowExpansion(order._id)}>
//                         <td className="px-3 py-3 md:px-4 md:py-4">
//                           <div className="flex items-center gap-2 md:gap-3">
//                             <div className={`transform transition-transform ${expandedRows.has(order._id) ? 'rotate-180' : ''}`}>
//                               {expandedRows.has(order._id) ? (
//                                 <ChevronUp className="w-4 h-4 text-slate-400" />
//                               ) : (
//                                 <ChevronDown className="w-4 h-4 text-slate-400" />
//                               )}
//                             </div>
//                             <div>
//                               <p className="text-xs md:text-sm font-medium text-slate-800">#{order.orderId}</p>
//                               <p className="text-xs text-slate-700 mt-1 md:mt-2">
//                                 {new Date(order.createdAt).toLocaleDateString('en-IN')}
//                               </p>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-3 py-3 md:px-4 md:py-4">
//                           <div>
//                             <p className="text-xs md:text-sm font-medium text-slate-800">{order.customerDetails.name}</p>
//                             <p className="text-xs text-slate-500 truncate max-w-[120px] md:max-w-none">{order.customerDetails.email}</p>
//                           </div>
//                         </td>
//                         <td className="px-3 py-3 md:px-4 md:py-4">
//                           <p className="text-xs md:text-sm font-semibold text-emerald-600">
//                             <IndianRupee className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
//                             {order.totalAmount.toFixed(2)}
//                           </p>
//                         </td>
//                         <td className="px-3 py-3 md:px-4 md:py-4">
//                           <div className="flex flex-col">
//                             <StatusBadge status={order.orderStatus} />
//                           </div>
//                         </td>
//                         <td className="px-3 py-3 md:px-4 md:py-4">
//                           <div className="flex flex-col">
//                             <StatusBadge status={order.paymentStatus} type="payment" />
//                           </div>
//                         </td>
//                         <td className="px-3 py-3 md:px-4 md:py-4">
//                           <div className="flex items-center">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 setEditingStatus(editingStatus === order._id ? null : order._id);
//                               }}
//                               className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                               title="Edit Status"
//                             >
//                               <Edit className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
                      
//                       {/* Expanded Row Content */}
//                       {expandedRows.has(order._id) && (
//                         <tr>
//                           <td colSpan={6} className="px-3 py-3 md:px-4 md:py-4 bg-slate-50">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-3 md:p-4">
//                               {/* Customer Details */}
//                               <div className="space-y-2 md:space-y-3">
//                                 <h4 className="font-semibold text-slate-700 text-xs md:text-sm">Customer Information</h4>
//                                 <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
//                                   <p><span className="text-slate-600">Name:</span> {order.customerDetails.name}</p>
//                                   <p>
//                                     <span className="text-slate-600">Email:</span>{' '}
//                                     <a 
//                                       href={`mailto:${order.customerDetails.email}`} 
//                                       className="text-blue-600 hover:underline"
//                                     >
//                                       {order.customerDetails.email}
//                                     </a>
//                                   </p>
//                                   <p>
//                                     <span className="text-slate-600">Phone:</span>{' '}
//                                     <a 
//                                       href={`tel:${order.customerDetails.phone}`} 
//                                       className="text-blue-600 hover:underline"
//                                     >
//                                       {order.customerDetails.phone}
//                                     </a>
//                                   </p>
//                                   <p><span className="text-slate-600">Address:</span> {order.customerDetails.address}</p>
//                                   <p><span className="text-slate-600">City:</span> {order.customerDetails.city}</p>
//                                   <p><span className="text-slate-600">State:</span> {order.customerDetails.state}</p>
//                                   <p><span className="text-slate-600">PIN:</span> {order.customerDetails.pincode}</p>
//                                 </div>
//                               </div>
                              
//                               {/* Order Items */}
//                               <div className="space-y-2 md:space-y-3">
//                                 <h4 className="font-semibold text-slate-700 text-xs md:text-sm">Order Items</h4>
//                                 <div className="space-y-1 md:space-y-2">
//                                   {order.products.map((item, index) => (
//                                     <div key={index} className="flex items-center justify-between text-xs md:text-sm">
//                                       <span className="truncate max-w-[60%]">{item.name} (x{item.quantity})</span>
//                                       <span className="font-semibold whitespace-nowrap">
//                                         <IndianRupee className="w-3 h-3 inline mr-1" />
//                                         {(item.price * item.quantity).toFixed(2)}
//                                       </span>
//                                     </div>
//                                   ))}
//                                 </div>
                                
//                                 {/* Status Update */}
//                                 {editingStatus === order._id && (
//                                   <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
//                                     <h5 className="font-semibold text-slate-700 text-xs md:text-sm mb-2">Update Order Status</h5>
//                                     <div className="flex items-center gap-2">
//                                       <select
//                                         value={order.orderStatus}
//                                         onChange={(e) => handleUpdateOrderStatus(order._id, e.target.value)}
//                                         disabled={updatingStatus}
//                                         className="px-3 py-1.5 border border-slate-300 rounded text-sm flex-1"
//                                       >
//                                         <option value="processing">Processing</option>
//                                         <option value="shipped">Shipped</option>
//                                         <option value="delivered">Delivered</option>
//                                         <option value="cancelled">Cancelled</option>
//                                       </select>
//                                       <button
//                                         onClick={() => setEditingStatus(null)}
//                                         className="p-1.5 text-slate-500 hover:text-slate-700"
//                                       >
//                                         <XIcon className="w-4 h-4" />
//                                       </button>
//                                     </div>
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </td>
//                         </tr>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>

//       {OrderDetailsModal}
//     </div>
//   );
// };

// export default OrderManagement;

import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { 
  Eye, Truck, CheckCircle, XCircle, Search, X, IndianRupee, 
  User, MapPin, Phone, Mail, Package, Calendar, CreditCard,
  ChevronDown, ChevronUp, Edit, Save, X as XIcon, AlertTriangle
} from 'lucide-react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { 
  setOrders, 
  setOrder, 
  setLoading, 
  setUpdatingStatus, 
  updateOrderStatus, 
  clearOrder 
} from '../redux/orderSlice';

const OrderManagement = () => {
  const { orders, order, loading, updatingStatus } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [editingStatus, setEditingStatus] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch all orders
  const fetchOrders = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/payments/orders`, {
        withCredentials: true,
      });
      
      if (res.data.success) {
        dispatch(setOrders(res.data.orders));
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Failed to fetch orders');
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleUpdateOrderStatus = useCallback(async (orderId, newStatus) => {
    try {
      console.log('Updating order:', orderId, 'to status:', newStatus);
      
      dispatch(setUpdatingStatus(true));
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/payments/updateOrderStatus/${orderId}`,
        { orderStatus: newStatus },
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Update response:', res.data);
      
      if (res.data.success) {
        dispatch(updateOrderStatus({ orderId, newStatus }));
        setEditingStatus(null);
        setShowConfirmModal(false);
        toast.success('Order status updated successfully');
        
        // Refresh the orders list
        fetchOrders();
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      console.error('Error response:', error.response);
      
      if (error.response?.status === 404) {
        toast.error('Order not found. It may have been deleted.');
      } else {
        toast.error(error.response?.data?.message || 'Failed to update order status');
      }
    } finally {
      dispatch(setUpdatingStatus(false));
    }
  }, [dispatch, fetchOrders]);

  const closeOrderDetails = useCallback(() => {
    setShowOrderDetails(false);
    dispatch(clearOrder());
  }, [dispatch]);

  // Toggle row expansion
  const toggleRowExpansion = useCallback((orderId) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(orderId)) {
        newSet.delete(orderId);
      } else {
        newSet.add(orderId);
      }
      return newSet;
    });
  }, []);

  // Open confirmation modal for status update
  const openConfirmModal = useCallback((order, status) => {
    setSelectedOrder(order);
    setNewStatus(status);
    setShowConfirmModal(true);
  }, []);

  // Close confirmation modal
  const closeConfirmModal = useCallback(() => {
    setShowConfirmModal(false);
    setSelectedOrder(null);
    setNewStatus('');
  }, []);

  // Filter orders
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesSearch = 
        order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerDetails.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerDetails.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerDetails.phone.toLowerCase().includes(searchTerm.toLowerCase());
    
      const matchesOrderStatus = statusFilter === 'all' || order.orderStatus === statusFilter;
      const matchesPaymentStatus = paymentFilter === 'all' || order.paymentStatus === paymentFilter;
      
      let matchesDate = true;
      if (dateFilter !== 'all') {
        const orderDate = new Date(order.createdAt);
        const today = new Date();
        
        if (dateFilter === 'today') {
          matchesDate = orderDate.toDateString() === today.toDateString();
        } else if (dateFilter === 'week') {
          const oneWeekAgo = new Date(today);
          oneWeekAgo.setDate(today.getDate() - 7);
          matchesDate = orderDate >= oneWeekAgo;
        } else if (dateFilter === 'month') {
          const oneMonthAgo = new Date(today);
          oneMonthAgo.setMonth(today.getMonth() - 1);
          matchesDate = orderDate >= oneMonthAgo;
        }
      }
      
      return matchesSearch && matchesOrderStatus && matchesPaymentStatus && matchesDate;
    });
  }, [orders, searchTerm, statusFilter, paymentFilter, dateFilter]);

  // Order statistics
  const orderStats = useMemo(() => {
    const totalOrders = orders.length;
    const processingOrders = orders.filter(o => o.orderStatus === 'processing').length;
    const shippedOrders = orders.filter(o => o.orderStatus === 'shipped').length;
    const deliveredOrders = orders.filter(o => o.orderStatus === 'delivered').length;
    const cancelledOrders = orders.filter(o => o.orderStatus === 'cancelled').length;
    
    const totalRevenue = orders
      .filter(o => o.paymentStatus === 'completed')
      .reduce((sum, order) => sum + order.totalAmount, 0);
    
    return {
      totalOrders,
      processingOrders,
      shippedOrders,
      deliveredOrders,
      cancelledOrders,
      totalRevenue: totalRevenue.toFixed(2)
    };
  }, [orders]);

  // Status badge component
  const StatusBadge = ({ status, type = 'order' }) => {
    const statusConfig = {
      order: {
        processing: { color: 'bg-blue-100 text-blue-800 border border-blue-200', label: 'Processing' },
        shipped: { color: 'bg-purple-100 text-purple-800 border border-purple-200', label: 'Shipped' },
        delivered: { color: 'bg-emerald-100 text-emerald-800 border border-emerald-200', label: 'Delivered' },
        cancelled: { color: 'bg-red-100 text-red-800 border border-red-200', label: 'Cancelled' }
      },
      payment: {
        pending: { color: 'bg-amber-100 text-amber-800 border border-amber-200', label: 'Pending' },
        completed: { color: 'bg-emerald-100 text-emerald-800 border border-emerald-200', label: 'Completed' },
        failed: { color: 'bg-red-100 text-red-800 border border-red-200', label: 'Failed' }
      }
    };
    
    const config = statusConfig[type][status] || { 
      color: 'bg-gray-100 text-gray-800 border border-gray-200', 
      label: 'Unknown' 
    };
    
    return (
      <span className={`px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm font-medium rounded-full ${config.color} flex items-center gap-1 md:gap-2`}>
        {type === 'payment' && (
          <CreditCard className="w-3 h-3 md:w-3 md:h-3" />
        )}
        <span className="truncate">{config.label}</span>
      </span>
    );
  };

  // Confirmation Modal Component
  const ConfirmationModal = useMemo(() => (
    showConfirmModal && selectedOrder && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-amber-100 mr-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Confirm Status Update</h3>
          </div>
          
          <p className="text-slate-600 mb-4">
            Are you sure you want to update order <span className="font-semibold">#{selectedOrder.orderId}</span> status from{' '}
            <span className="font-semibold text-blue-600">{selectedOrder.orderStatus}</span> to{' '}
            <span className="font-semibold text-emerald-600">{newStatus}</span>?
          </p>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={closeConfirmModal}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleUpdateOrderStatus(selectedOrder._id, newStatus)}
              disabled={updatingStatus}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              {updatingStatus ? 'Updating...' : 'Confirm Update'}
            </button>
          </div>
        </div>
      </div>
    )
  ), [showConfirmModal, selectedOrder, newStatus, updatingStatus, handleUpdateOrderStatus, closeConfirmModal]);

  // Order details modal
  const OrderDetailsModal = useMemo(() => (
    showOrderDetails && order && (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeOrderDetails}></div>
        <div className={`absolute top-0 h-full bg-white shadow-2xl overflow-y-auto transition-all duration-300 ${
          isMobile ? 'right-0 left-0 w-full' : 'right-0 w-full max-w-2xl'
        }`}>
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800">Order Details</h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1">#{order.orderId}</p>
              </div>
              <button
                onClick={closeOrderDetails}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="space-y-4 md:space-y-6">
                {/* Order Status Section */}
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                    Order & Payment Status
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2 md:space-y-3">
                      <label className="block text-sm font-medium text-slate-700">Order Status</label>
                      <div className="flex items-center gap-2 md:gap-3">
                        <StatusBadge status={order.orderStatus} />
                        <select
                          value={order.orderStatus}
                          onChange={(e) => openConfirmModal(order, e.target.value)}
                          disabled={updatingStatus}
                          className="px-3 py-1.5 md:px-4 md:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-sm"
                        >
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        {updatingStatus && (
                          <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label className="block text-sm font-medium text-slate-700">Payment Status</label>
                      <StatusBadge status={order.paymentStatus} type="payment" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 p-2 md:p-3 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-600 font-mono truncate">
                      Payment ID: {order.paymentId}
                    </p>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
                    <User className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    Customer Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                        <p className="font-medium text-slate-800">{order.customerDetails.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1 flex items-center gap-2">
                          <Mail className="w-3 h-3 md:w-4 md:h-4" />
                          Email Address
                        </label>
                        <p className="text-slate-800 truncate">{order.customerDetails.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1 flex items-center gap-2">
                          <Phone className="w-3 h-3 md:w-4 md:h-4" />
                          Phone Number
                        </label>
                        <p className="text-slate-800">{order.customerDetails.phone}</p>
                      </div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1 flex items-center gap-2">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                          Shipping Address
                        </label>
                        <p className="text-slate-800 leading-relaxed text-sm">
                          {order.customerDetails.address}<br />
                          {order.customerDetails.city}, {order.customerDetails.state}<br />
                          PIN: {order.customerDetails.pincode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
                    <Package className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                    Order Items ({order.products.length})
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    {order.products.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                          <img
                            src={item.imageUrl || '/placeholder-image.jpg'}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg border-2 border-slate-200 shadow-sm"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-slate-800 text-sm truncate">{item.name}</h5>
                          <p className="text-xs md:text-sm text-slate-600 mt-1">Quantity: {item.quantity}</p>
                          <p className="text-xs text-slate-500 font-mono mt-1 truncate">
                            Product ID: {item.product?.toString().substring(0, 8)}...
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-semibold text-emerald-600 text-sm">
                            <IndianRupee className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                            {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            <IndianRupee className="w-3 h-3 inline mr-1" />
                            {item.price} each
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg">Order Summary</h4>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-600 text-sm md:text-base">Items Total</span>
                      <span className="font-medium text-slate-800 text-sm md:text-base">
                        <IndianRupee className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                        {order.products.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-slate-800 text-base md:text-lg">Total Amount</span>
                      <span className="font-bold text-emerald-600 text-base md:text-lg">
                        <IndianRupee className="w-4 h-4 md:w-5 md:h-5 inline mr-1" />
                        {order.totalAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Timeline */}
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-700 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                    Order Timeline
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 text-sm md:text-base">Order Created</p>
                        <p className="text-xs md:text-sm text-slate-600 mt-1">
                          {new Date(order.createdAt).toLocaleString('en-IN', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Truck className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 text-sm md:text-base">Last Updated</p>
                        <p className="text-xs md:text-sm text-slate-600 mt-1">
                          {new Date(order.updatedAt).toLocaleString('en-IN', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ), [showOrderDetails, order, updatingStatus, openConfirmModal, closeOrderDetails, isMobile]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  // Mobile Card View
  const MobileOrderCard = ({ order }) => (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 mb-4 overflow-hidden">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => toggleRowExpansion(order._id)}
      >
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-slate-800">#{order.orderId}</p>
            <p className="text-xs text-slate-500">
              {new Date(order.createdAt).toLocaleDateString('en-IN')}
            </p>
          </div>
          <p className="text-sm font-medium text-slate-800 mb-1">{order.customerDetails.name}</p>
          <p className="text-xs text-slate-500 truncate">{order.customerDetails.email}</p>
        </div>
        <div className="ml-2">
          {expandedRows.has(order._id) ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </div>
      
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        <div>
          <p className="text-xs text-slate-600 mb-1">Amount</p>
          <p className="text-sm font-semibold text-emerald-600">
            <IndianRupee className="w-3 h-3 inline mr-1" />
            {order.totalAmount.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-600 mb-1">Order Status</p>
          <StatusBadge status={order.orderStatus} />
        </div>
        <div>
          <p className="text-xs text-slate-600 mb-1">Payment Status</p>
          <StatusBadge status={order.paymentStatus} type="payment" />
        </div>
        <div className="flex items-end justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditingStatus(editingStatus === order._id ? null : order._id);
            }}
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit Status"
          >
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {expandedRows.has(order._id) && (
        <div className="px-4 pb-4 border-t border-slate-200 pt-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-700 text-sm mb-2">Customer Information</h4>
              <div className="space-y-2 text-xs">
                <p><span className="text-slate-600">Name:</span> {order.customerDetails.name}</p>
                <p>
                  <span className="text-slate-600">Email:</span>{' '}
                  <a 
                    href={`mailto:${order.customerDetails.email}`} 
                    className="text-blue-600 hover:underline"
                  >
                    {order.customerDetails.email}
                  </a>
                </p>
                <p>
                  <span className="text-slate-600">Phone:</span>{' '}
                  <a 
                    href={`tel:${order.customerDetails.phone}`} 
                    className="text-blue-600 hover:underline"
                  >
                    {order.customerDetails.phone}
                  </a>
                </p>
                <p><span className="text-slate-600">Address:</span> {order.customerDetails.address}</p>
                <p><span className="text-slate-600">City:</span> {order.customerDetails.city}</p>
                <p><span className="text-slate-600">State:</span> {order.customerDetails.state}</p>
                <p><span className="text-slate-600">PIN:</span> {order.customerDetails.pincode}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-700 text-sm mb-2">Order Items</h4>
              <div className="space-y-2">
                {order.products.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <span className="truncate max-w-[70%]">{item.name} (x{item.quantity})</span>
                    <span className="font-semibold whitespace-nowrap">
                      <IndianRupee className="w-3 h-3 inline mr-1" />
                      {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {editingStatus === order._id && (
              <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
                <h5 className="font-semibold text-slate-700 text-sm mb-2">Update Order Status</h5>
                <div className="flex flex-col gap-2">
                  <select
                    value={order.orderStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="px-3 py-1.5 border border-slate-300 rounded text-sm"
                  >
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openConfirmModal(order, newStatus || order.orderStatus)}
                      className="px-3 py-1.5 text-sm bg-emerald-500 text-white rounded flex-1 hover:bg-emerald-600 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditingStatus(null)}
                      className="px-3 py-1.5 text-sm bg-slate-200 text-slate-700 rounded flex-1 hover:bg-slate-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4 md:space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">Order Management</h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">Manage customer orders and track order status</p>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 bg-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
          <Truck className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
          <span>{orders.length} orders</span>
        </div>
      </div>

     
{/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
  {[
    { label: 'Total Orders', value: orderStats.totalOrders, icon: Truck, color: 'slate' },
    { label: 'Processing', value: orderStats.processingOrders, icon: Package, color: 'blue' },
    { label: 'Shipped', value: orderStats.shippedOrders, icon: Truck, color: 'purple' },
    { label: 'Delivered', value: orderStats.deliveredOrders, icon: CheckCircle, color: 'emerald' },
    { label: 'Cancelled', value: orderStats.cancelledOrders, icon: XCircle, color: 'red' },
    { label: 'Revenue', value: `₹${orderStats.totalRevenue}`, icon: IndianRupee, color: 'amber' }
  ].map((stat, index) => (
    <div
      key={index}
      className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-4 md:p-5 rounded-xl shadow-lg border border-${stat.color}-200 min-w-[120px] md:min-w-[140px]`}
    >
      <div className="flex items-center justify-between">
        <div className="truncate">
          <h3 className="text-xs md:text-sm font-semibold text-slate-700 truncate">{stat.label}</h3>
          <p className={`text-lg md:text-xl font-bold text-${stat.color}-600 mt-1 truncate`}>{stat.value}</p>
        </div>
        <div className={`p-2 md:p-3 bg-${stat.color}-500 rounded-lg flex-shrink-0`}>
          <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
      </div>
    </div>
  ))}
</div> */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
  {[
    { 
      label: 'Total Orders', 
      value: orderStats.totalOrders, 
      icon: Truck, 
      bgClass: 'bg-gradient-to-br from-slate-50 to-slate-100',
      borderClass: 'border-slate-200',
      textClass: 'text-slate-600',
      iconBgClass: 'bg-slate-500'
    },
    { 
      label: 'Processing', 
      value: orderStats.processingOrders, 
      icon: Package, 
      bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderClass: 'border-blue-200',
      textClass: 'text-blue-600',
      iconBgClass: 'bg-blue-500'
    },
    { 
      label: 'Shipped', 
      value: orderStats.shippedOrders, 
      icon: Truck, 
      bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100',
      borderClass: 'border-purple-200',
      textClass: 'text-purple-600',
      iconBgClass: 'bg-purple-500'
    },
    { 
      label: 'Delivered', 
      value: orderStats.deliveredOrders, 
      icon: CheckCircle, 
      bgClass: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      borderClass: 'border-emerald-200',
      textClass: 'text-emerald-600',
      iconBgClass: 'bg-emerald-500'
    },
    { 
      label: 'Cancelled', 
      value: orderStats.cancelledOrders, 
      icon: XCircle, 
      bgClass: 'bg-gradient-to-br from-red-50 to-red-100',
      borderClass: 'border-red-200',
      textClass: 'text-red-600',
      iconBgClass: 'bg-red-500'
    },
    { 
      label: 'Revenue', 
      value: `₹${orderStats.totalRevenue}`, 
      icon: IndianRupee, 
      bgClass: 'bg-gradient-to-br from-amber-50 to-amber-100',
      borderClass: 'border-amber-200',
      textClass: 'text-amber-600',
      iconBgClass: 'bg-amber-500'
    }
  ].map((stat, index) => (
    <div
      key={index}
      className={`${stat.bgClass} p-5 rounded-xl shadow-lg border ${stat.borderClass}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</h3>
          <p className={`text-2xl font-bold ${stat.textClass}`}>{stat.value}</p>
        </div>
        <div className={`p-2 ${stat.iconBgClass} rounded-lg flex-shrink-0 mb-9 gap-1`}>
          <stat.icon className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  ))}
</div>
      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-lg border border-slate-200">
        <div className="p-4 md:p-6 border-b border-slate-200">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex-1 relative w-full">
              <Search className="w-4 h-4 md:w-5 md:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search orders by ID, name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base min-w-[130px] md:min-w-[150px]"
              >
                <option value="all">All Status</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className="px-3 py-2 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base min-w-[130px] md:min-w-[150px]"
              >
                <option value="all">All Payments</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
              
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-3 py-2 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm md:text-base min-w-[130px] md:min-w-[150px]"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table/Cards */}
        <div className="p-4 md:p-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <Truck className="w-12 h-12 md:w-16 md:h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-base md:text-lg font-medium text-slate-600 mb-2">No orders found</h3>
              <p className="text-slate-500 text-sm md:text-base">Try adjusting your search or filter criteria</p>
            </div>
          ) : isMobile ? (
            // Mobile Card View
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <MobileOrderCard key={order._id} order={order} />
              ))}
            </div>
          ) : (
            // Desktop/Tablet Table View
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Order Details</th>
                    <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Customer</th>
                    <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Amount</th>
                    <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Order Status</th>
                    <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Payment Status</th>
                    <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredOrders.map((order) => (
                    <React.Fragment key={order._id}>
                      <tr className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => toggleRowExpansion(order._id)}>
                        <td className="px-3 py-3 md:px-4 md:py-4">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className={`transform transition-transform ${expandedRows.has(order._id) ? 'rotate-180' : ''}`}>
                              {expandedRows.has(order._id) ? (
                                <ChevronUp className="w-4 h-4 text-slate-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-slate-400" />
                              )}
                            </div>
                            <div>
                              <p className="text-xs md:text-sm font-medium text-slate-800">#{order.orderId}</p>
                              <p className="text-xs text-slate-700 mt-1 md:mt-2">
                                {new Date(order.createdAt).toLocaleDateString('en-IN')}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3 md:px-4 md:py-4">
                          <div>
                            <p className="text-xs md:text-sm font-medium text-slate-800">{order.customerDetails.name}</p>
                            <p className="text-xs text-slate-500 truncate max-w-[120px] md:max-w-none">{order.customerDetails.email}</p>
                          </div>
                        </td>
                        <td className="px-3 py-3 md:px-4 md:py-4">
                          <p className="text-xs md:text-sm font-semibold text-emerald-600">
                            <IndianRupee className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                            {order.totalAmount.toFixed(2)}
                          </p>
                        </td>
                        <td className="px-3 py-3 md:px-4 md:py-4">
                          <div className="flex flex-col">
                            <StatusBadge status={order.orderStatus} />
                          </div>
                        </td>
                        <td className="px-3 py-3 md:px-4 md:py-4">
                          <div className="flex flex-col">
                            <StatusBadge status={order.paymentStatus} type="payment" />
                          </div>
                        </td>
                        <td className="px-3 py-3 md:px-4 md:py-4">
                          <div className="flex items-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingStatus(editingStatus === order._id ? null : order._id);
                              }}
                              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit Status"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Row Content */}
                      {expandedRows.has(order._id) && (
                        <tr>
                          <td colSpan={6} className="px-3 py-3 md:px-4 md:py-4 bg-slate-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-3 md:p-4">
                              {/* Customer Details */}
                              <div className="space-y-2 md:space-y-3">
                                <h4 className="font-semibold text-slate-700 text-xs md:text-sm">Customer Information</h4>
                                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                                  <p><span className="text-slate-600">Name:</span> {order.customerDetails.name}</p>
                                  <p>
                                    <span className="text-slate-600">Email:</span>{' '}
                                    <a 
                                      href={`mailto:${order.customerDetails.email}`} 
                                      className="text-blue-600 hover:underline"
                                    >
                                      {order.customerDetails.email}
                                    </a>
                                  </p>
                                  <p>
                                    <span className="text-slate-600">Phone:</span>{' '}
                                    <a 
                                      href={`tel:${order.customerDetails.phone}`} 
                                      className="text-blue-600 hover:underline"
                                    >
                                      {order.customerDetails.phone}
                                    </a>
                                  </p>
                                  <p><span className="text-slate-600">Address:</span> {order.customerDetails.address}</p>
                                  <p><span className="text-slate-600">City:</span> {order.customerDetails.city}</p>
                                  <p><span className="text-slate-600">State:</span> {order.customerDetails.state}</p>
                                  <p><span className="text-slate-600">PIN:</span> {order.customerDetails.pincode}</p>
                                </div>
                              </div>
                              
                              {/* Order Items */}
                              <div className="space-y-2 md:space-y-3">
                                <h4 className="font-semibold text-slate-700 text-xs md:text-sm">Order Items</h4>
                                <div className="space-y-1 md:space-y-2">
                                  {order.products.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between text-xs md:text-sm">
                                      <span className="truncate max-w-[60%]">{item.name} (x{item.quantity})</span>
                                      <span className="font-semibold whitespace-nowrap">
                                        <IndianRupee className="w-3 h-3 inline mr-1" />
                                        {(item.price * item.quantity).toFixed(2)}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Status Update */}
                                {editingStatus === order._id && (
                                  <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
                                    <h5 className="font-semibold text-slate-700 text-xs md:text-sm mb-2">Update Order Status</h5>
                                    <div className="flex flex-col gap-2">
                                      <select
                                        value={newStatus || order.orderStatus}
                                        onChange={(e) => setNewStatus(e.target.value)}
                                        className="px-3 py-1.5 border border-slate-300 rounded text-sm"
                                      >
                                        <option value="processing">Processing</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="cancelled">Cancelled</option>
                                      </select>
                                      <div className="flex gap-2">
                                        <button
                                          onClick={() => openConfirmModal(order, newStatus || order.orderStatus)}
                                          className="px-3 py-1.5 text-sm bg-emerald-500 text-white rounded flex-1 hover:bg-emerald-600 transition-colors"
                                        >
                                          Update
                                        </button>
                                        <button
                                          onClick={() => {
                                            setEditingStatus(null);
                                            setNewStatus('');
                                          }}
                                          className="px-3 py-1.5 text-sm bg-slate-200 text-slate-700 rounded flex-1 hover:bg-slate-300 transition-colors"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {OrderDetailsModal}
      {ConfirmationModal}
    </div>
  );
};

export default OrderManagement;
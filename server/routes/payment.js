// const express = require('express');
// const router = express.Router();
// const {
//   createOrder,
//   verifyPayment,
//   createOrderRecord,
//   getOrderById,
//   getAllOrders,
//   updateOrderStatus
// } = require('../controllers/paymentController.js');
import express from "express";
import { createOrder, verifyPayment, createOrderRecord, getOrderById, getAllOrders, updateOrderStatus } from "../controllers/paymentController.js";
const router = express.Router();
// Create Razorpay order
router.post('/create-order', createOrder);

// Verify payment signature
router.post('/verify-payment', verifyPayment);

// Create order record in database
router.post('/create-order-record', createOrderRecord);

// Get order by ID
router.get('/order/:orderId', getOrderById);

// Get all orders
router.get('/orders', getAllOrders);

// Update order status
router.put('/updateOrderStatus/:orderId', updateOrderStatus);


export default router;
import asyncHandler from "express-async-handler";
import { Order } from "../models";
import { OrderItems, ShippingAddress, Request, Response } from "../types";

/**
 * @description Create new order
 * @route GET /api/orders
 * @access Private
 */
export const addOrderItems = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = req.body as {
      orderItems: OrderItems[];
      shippingAddress: ShippingAddress;
      paymentMethod: string;
      itemsPrice: number;
      taxPrice: number;
      shippingPrice: number;
      totalPrice: number;
    };

    if (!req.user) {
      res.status(400);
      throw new Error("User not authorized.");
    }

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items.");
    } else {
      const order = new Order({
        user: req.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  }
);

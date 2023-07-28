import { Request,Response } from "express";
const { Cart } = require('../model/Cart');

exports.fetchCartByUser = async (req:Request, res:Response) => {
    const { id } = req.user;
    try {
        const cartItems = await Cart.find({ user: id }).populate('product');

        res.status(200).json(cartItems);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.addToCart = async (req:Request, res:Response) => {
    const { id } = req.user;
    const cart = new Cart({ ...req.body, user: id });
    try {
        const doc = await cart.save();
        const result = await doc.populate('product');
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.deleteFromCart = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const doc = await Cart.findByIdAndDelete(id);
        res.status(200).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.updateCart = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        const result = await cart.populate('product');

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};
import { Request,Response } from "express";
const { Category } = require('../model/Category');

exports.fetchCategories = async (req:Request, res:Response) => {
    try {
        const categories = await Category.find({}).exec();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.createCategory = async (req:Request, res:Response) => {
    const category = new Category(req.body);
    try {
        const doc = await category.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};



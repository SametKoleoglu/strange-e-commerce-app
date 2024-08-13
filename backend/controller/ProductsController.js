const mongoose = require("mongoose");
const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    if (products.length === 0) {
      return res.status(404).json({ error: "No products found" });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such ID" });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ error: "Product not valid !" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      price,
      priceBeforeDeal,
      priceOff,
      stars,
      numberOfReview,
      ukSide,
      tags,
      status,
    } = req.body;
    const { icon, name } = status;

    const newProduct = await Product.create({
      image,
      title,
      description,
      price,
      priceBeforeDeal,
      priceOff,
      stars,
      numberOfReview,
      ukSide,
      tags,
      status: { icon, name },
    });
    return res.status(200).json(newProduct);
  } catch (error) {
    let errorMessage = "";
    if (error.errors) {
      errorMessage = Object.values(error.errors)
        .map((error) => error.message)
        .join(",");
    } else {
      errorMessage = error.message;
    }
    return res.status(500).json({ message: errorMessage });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      price,
      priceBeforeDeal,
      priceOff,
      stars,
      numberOfReview,
      ukSide,
      tags,
      status,
    } = req.body;
    const { icon, name } = status;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such ID" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(400).json({
        error:
          "Couldn't update product, make sure you filled the required fields",
      });
    }

    return res.status(201).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such ID" });
    }
    const deletedProduct = await Product.findByIdAndDelete({ _id: id });
    if (!deletedProduct) {
      return res.status(400).json({ error: "Couldn't delete product" });
    }
    return res.status(204).json(deletedProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

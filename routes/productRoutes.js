const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/add', async (req, res) => {
    try {
        const { name, price, description } = req.body;

        if (!name || !price) {
            return res.status(400).json({ message: 'Tên và giá sản phẩm là bắt buộc' });
        }

        const newProduct = new Product({ name, price, description });
        const savedProduct = await newProduct.save();

        res.status(201).json({ message: 'Thêm sản phẩm thành công', product: savedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/search', async (req, res) => {
    try {
      const keyword = req.query.name || ''; 
      const regex = new RegExp(keyword, 'i'); 
  
      const products = await Product.find({ name: { $regex: regex } });
      res.json(products);
    } catch (error) {
      console.error('Lỗi tìm kiếm:', error.message);
      res.status(500).json({ error: error.message || 'Lỗi máy chủ' });
    }
});

module.exports = router;

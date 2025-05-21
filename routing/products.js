const express = require("express");

const productsController = require("../controllers/productsController");

const router = express.Router();

// Ürün listeleme
router.get("/", productsController.getProductsView);

// Ürün ekleme sayfası (form)
router.get("/add", productsController.getAddProductView);

// Ürün verisini kaydetme (form post)
router.post("/add", productsController.addProduct);

// Yeni eklenen ürünü gösterme
router.get("/new", productsController.getNewProductView);

// Ürün detay sayfası
router.get("/:name", productsController.getProductView);

// Ürün silme
router.delete("/:name", productsController.deleteProduct);

module.exports = router;

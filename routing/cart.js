const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

// Sepet sayfasını göster
router.get("/", cartController.getCartView);

// Sepete ürün ekleme (AJAX post)
router.post("/add", cartController.addProductToCart);

module.exports = router;


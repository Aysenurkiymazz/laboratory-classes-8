const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { STATUS_CODE } = require("../constants/statusCode");
const { MENU_LINKS } = require("../constants/navigation");

// Sepete ürün ekleme
exports.addProductToCart = async (req, res) => {
  try {
    const { productName } = req.body;

    if (!productName) {
      return res.status(STATUS_CODE.BAD_REQUEST).send("Missing product name");
    }

    await Cart.add(productName);
    res.sendStatus(STATUS_CODE.OK);
  } catch (error) {
    console.error("❌ Error adding product to cart:", error);
    res.sendStatus(STATUS_CODE.INTERNAL_SERVER_ERROR);
  }
};

// Sepetteki ürün sayısını alma (badge için)
exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};

// Sepet sayfasını gösterme
exports.getCartView = async (req, res) => {
  try {
    const cartItems = await Cart.getItems();
    const totalPrice = await Cart.getTotalPrice();
    const cartCount = await Cart.getProductsQuantity();

    res.render("cart", {
      headTitle: "Your Cart",
      path: "/cart",
      activeLinkPath: "/cart",
      cartItems,
      totalPrice,
      cartCount,
      menuLinks: MENU_LINKS,
    });
  } catch (error) {
    console.error("❌ Error rendering cart view:", error);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send("Cart could not be displayed.");
  }
};

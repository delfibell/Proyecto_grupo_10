const db = require("../database/models");

const apiControllers = {
  users: async (req, res) => {
    const count = await db.Users.count();
    const allUsers = await db.Users.findAll();
    const users = allUsers.map((user) => {
      return {
        id: user.id,
        name: user.firstName,
        surname: user.lastName,
        email: user.email,
        detail: `http://localhost:3030/api/users/${user.id}`,
      };
    });
    res.status(200).json({
      count,
      users,
    });
  },

  usersDetails: async (req, res) => {
    const allUsers = await db.Users.findAll();
    const usersDetails = allUsers.map((user) => {
      return {
        id: user.id,
        name: user.firstName,
        surname: user.lastName,
        email: user.email,
        username: user.username,
        img: `http://localhost:3030/img/users/${user.profilePic}`,
      };
    });
    res.status(200).json({
      usersDetails,
    });
  },

  products: async (req, res) => {
    const count = await db.Products.count();
    const allProducts = await db.Products.findAll();
    const products = allProducts.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        categories: product.category,
        detail: `http://localhost:3030/api/products/${product.id}`,
      };
    });

    const categories = [
      "exterior",
      "interior",
      "neumaticos",
      "vidrios",
      "accesorios",
    ];
    let productsCategories = {};

    for (const category of categories) {
      const products = await db.Products.findAndCountAll({
        where: { category: category },
      });
      productsCategories[category] = products.count;
    }

    res.status(200).json({
      count,
      productsCategories,
      products,
    });
  },

  productsDetails: async (req, res) => {
    const productDetail = await db.Products.findOne({
      where: { id: req.params.id },
      raw: true,
      include: [{ model: db.ProductFragance }],
    });

    res.status(200).json({
      productDetail,
    });
  },
};

module.exports = apiControllers;

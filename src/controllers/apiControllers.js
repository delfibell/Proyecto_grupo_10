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
    const count = await db.Users.count();
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
      count,
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
    const exteriorProducts = await db.Products.count({
      where: { category: "exterior" },
    });
    const interiorProducts = await db.Products.findAndCountAll({
      where: { category: "interior" },
    });
    const neumaticosProducts = await db.Products.findAndCountAll({
      where: { category: "neumaticos" },
    });
    const vidriosProducts = await db.Products.findAndCountAll({
      where: { category: "vidrios" },
    });
    const accesoriosProducts = await db.Products.findAndCountAll({
      where: { category: "accesorios" },
    });

    res.status(200).json({
      count,
      exteriorProducts,
      interiorProducts,
      neumaticosProducts,
      vidriosProducts,
      accesoriosProducts,
      products,
    });
  },

  productsDetails: async (req, res) => {
    const count = await db.Products.count();
    const allProducts = await db.Products.findAll();
    const productsDetails = allProducts.map((product) => {
      return {
        image: `http://localhost:3030/img/catalogo/${product.image}`,
      };
    });

    res.status(200).json({
      count,
      productsDetails,
    });
  },
};

module.exports = apiControllers;

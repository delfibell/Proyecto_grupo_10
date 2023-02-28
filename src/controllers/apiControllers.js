const db = require("../database/models");

const apiControllers = {
  users: async (req, res) => {
    const count = await db.Users.count();
    const allUsers = await db.Users.findAll();
    const users = allUsers.map((user) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
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
    const userDetail = await db.Users.findOne({
      where: { id: req.params.id },
      raw: true,
    });

    res.status(200).json({
      id: userDetail.id,
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      email: userDetail.email,
      username: userDetail.username,
      img: `http://localhost:3030/img/users/${userDetail.profilePic}`,
    });
  },

  reactUsers: async (req, res) => {
    const count = await db.Users.count();
    const allUsers = await db.Users.findAll();
    const users = allUsers.map((user) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        img: `http://localhost:3030/img/users/${user.profilePic}`,
      };
    });
    res.status(200).json({
      count,
      users,
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
        image: `http://localhost:3030/img/catalogo/${product.image}`,
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
      include: [
        { association: "productFragance" },
        { association: "productType" },
        { association: "productDiscount" },
        { association: "productSize" },
      ],
    });
    console.log(productDetail);
    console.log(productDetail["productFragance.id"]);
    res.status(200).json({
      id: productDetail.id,
      name: productDetail.name,
      description: productDetail.description,
      category: productDetail.category,
      price: productDetail.price,
      type: productDetail["productType.type"],
      discount: productDetail["productDiscount.discount"] + " %",
      fragance: productDetail["productFragance.fragance"],
      size: productDetail["productSize.size"],
      image: `http://localhost:3030/img/users/${productDetail.image}`,
    });
  },
};

module.exports = apiControllers;

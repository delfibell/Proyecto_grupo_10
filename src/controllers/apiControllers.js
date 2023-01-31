const db = require("../database/models");

// console.log("hola"); 
const apiControllers = {
    products: async (req, res) => {
        console.log("Hola");
        // const count = await db.Products.findAll();
        // res.status(200).json({
        //     count
        // });
    }
}
//http://localhost/3030/api/products
module.exports = apiControllers;

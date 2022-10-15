let notFoundControllers = {
  notFound: (req, res) => {
    res.send("Página no encontrada");
  },
};

module.exports = notFoundControllers;
import { Component } from "react";

class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      //page: 0,
      //hasPrevPage: false,
      //hasNextPage: false,
    };
  }

  async updateProducts() {
    const response = await fetch(`http://localhost:3000/api/products`);
    const productsData = await response.json();

    this.setState({
      products: productsData.products,
      //hasNextPage: productsData.meta.hasNextPage,
      //hasPrevPage: productsData.meta.hasPrevPage,
    });
  }

  componentDidMount() {
    this.updateProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.updateProducts();
    }
  }

  render() {
    return (
      <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Listado de productos</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Año</th>
              <th scope="col">Color</th>
              <th scope="col">Puertas</th>
              <th scope="col">Transmision</th>
              <th scope="col">Motor</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio de lista</th>
              <th scope="col">Descuento</th>
              <th scope="col">Precio final</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.manufacture_year}</td>
                  <td>{product.color}</td>
                  <td>{product.door_number}</td>
                  <td>{product.transmission}</td>
                  <td>{product.motor_type}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.discount} %</td>
                  <td>{product.price * ((100 - product.discount) / 100)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/*{" "}
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            disabled={!this.state.hasPrevPage}
            onClick={() => {
              this.setState({
                page: this.state.page - 1,
              });
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <p className="p-3">Pagina: {this.state.page + 1}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({
                page: this.state.page + 1,
              });
            }}
            disabled={!this.state.hasNextPage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        */}
      </>
    );
  }
}

export default ProductsList;

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
    const response = await fetch(`http://localhost:3030/api/products`);
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
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
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

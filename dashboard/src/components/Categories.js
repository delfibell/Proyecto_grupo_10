import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      bgColor: "",
    };
  }

  render() {
    if (!this.state.categories) {
      return "Cargando...";
    }

    return (
      <div className={`row ${this.state.bgColor}`}>
        {this.state.categories.map((category) => {
          return (
            <div key={category.id} className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  <h5>{category.cat}</h5>
                  <p>{category.products.length}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/categories/detail");
    const categoriesListData = await response.json();
    this.setState({
      categories: categoriesListData.categories,
    });
  }
}

export default Categories;

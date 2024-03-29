import "../assets/styles.css";
function BigCard({ product }) {
  return (
    <div>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              {product.name}
            </h5>
          </div>
          <div className="card-body">
            <div className="lastProduct">
              <img
                className="lastProductImage"
                src={product.image}
                alt="image"
              />
            </div>
            {product.description}
          </div>
        </div>

        <div className="text-center">
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{
              width: "40rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BigCard;

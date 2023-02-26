import BigCard from "./BigCard";
import { useEffect, useState } from "react";

export default function LastProductInDb() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((value) => value.json())
      .then((value) => {
        const product = value;
        setProduct(product.products[Number(product.count - 1)]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BigCard title="Ultimo producto en base de datos">
      <div className="text-center">
        <h4>{product.name}</h4>
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{
            width: "40rem",
          }}
          src={product.image}
          alt={product.name}
        />
      </div>
      <p>{product.description}</p>
    </BigCard>
  );
}

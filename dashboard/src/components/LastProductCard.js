import BigCard from "./BigCard";
import { useEffect, useState } from "react";

export default function LastProductInDb() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products/")
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
    <div>
      <BigCard product={product} />
    </div>
  );
}

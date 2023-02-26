import SmallCard from "./SmallCard";
import { useEffect, useState } from "react";

function SmallCardRow() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/api/products").then((value) => value.json()),
      fetch("http://localhost:3000/api/users").then((value) => value.json()),
      fetch("http://localhost:3000/api/categories").then((value) =>
        value.json()
      ),
    ])
      .then((value) => {
        setCard([
          {
            title: "Cantidad de productos",
            value: value[0].count,
            icon: "fa-car",
            color: "primary",
          },
          {
            title: "Cantidad de usuarios",
            value: value[1].count,
            icon: "fa-user",
            color: "success",
          },
          {
            title: "Cantidad de categorias",
            value: value[2].count,
            icon: "fa-list",
            color: "warning",
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      {card.map((stat) => {
        return <SmallCard key={stat.title} {...stat} />;
      })}
    </div>
  );
}

export default SmallCardRow;

import BigCard from "./BigCard";
import Categories from "./Categories";

export default function UsersInDbCard() {
  return (
    <BigCard title="Total de productos por categorias">
      <Categories />
    </BigCard>
  );
}

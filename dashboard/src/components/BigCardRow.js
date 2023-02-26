import UsersInDbCard from "./UsersInDBCard";
import LastProductInDb from "./LastProductCard";

function BigCardRow() {
  return (
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      <LastProductInDb />
      <UsersInDbCard />
    </div>
  );
}

export default BigCardRow;

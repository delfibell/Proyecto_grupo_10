import BigCardRow from "./BigCardRow";
import SmallCardRow from "./SmallCardRow";

function DashboardContent() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4 pt-20">
        <h1 className="h3 mb-0 text-gray-800 mt 20">App Dashboard</h1>
      </div>
      <SmallCardRow />
      <BigCardRow />
    </>
  );
}

export default DashboardContent;

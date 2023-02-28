import "../assets/styles.css";
function BigCard2({ user }) {
  return (
    <div>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              {user.username}
            </h5>
          </div>
          <div className="card-body">
            <div className="lastUser">
              <img className="lastUserImage" src={user.img} alt="image" />
            </div>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.email}</div>
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

export default BigCard2;

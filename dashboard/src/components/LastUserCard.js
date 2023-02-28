import BigCard2 from "./BigCard2";
import { useEffect, useState } from "react";

export default function LastUserInDb() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/reactUsers/")
      .then((value) => value.json())
      .then((value) => {
        const user = value;
        setUser(user.users[Number(user.count - 1)]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <BigCard2 user={user} />
    </div>
  );
}

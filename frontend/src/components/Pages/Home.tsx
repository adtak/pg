import { useContext } from "react";
import { UserContext } from "./Root";

function Home() {
  const user = useContext(UserContext);
  return <h2>Hello {user?.username} </h2>;
}

export default Home;

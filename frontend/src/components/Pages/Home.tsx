import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Root";

function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Hello {user?.username} </h2>
      <Link to="/upload">Upload</Link>
    </>
  );
}

export default Home;

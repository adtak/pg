import { Authenticator } from "@aws-amplify/ui-react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Authenticator hideSignUp>
      {({ signOut }) => (
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <button onClick={signOut}>Sign out</button>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </Authenticator>
  );
}

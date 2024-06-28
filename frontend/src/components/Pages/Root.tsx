import { createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";

export const UserContext = createContext<AuthUser | undefined>(undefined);

export default function Root() {
  return (
    <Authenticator hideSignUp>
      {({ user, signOut }) => (
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
          <UserContext.Provider value={user}>
            <Outlet />
          </UserContext.Provider>
        </>
      )}
    </Authenticator>
  );
}

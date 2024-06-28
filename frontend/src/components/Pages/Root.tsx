import { createContext } from "react";
import { Outlet, useMatches } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { Breadcrumbs } from "@mui/material";

export const UserContext = createContext<AuthUser | undefined>(undefined);

type HandleType = {
  crumb: () => React.ReactNode;
};

export default function Root() {
  const matches = useMatches();
  const handles = matches
    .filter((match) => Boolean(match.handle))
    .map((match) => match.handle) as HandleType[];
  const crumbs = handles.map((handle) => handle.crumb);

  return (
    <Authenticator hideSignUp>
      {({ user, signOut }) => (
        <>
          <Breadcrumbs aria-label="breadcrumb">
            {crumbs.map((crumb, index) => (
              <li key={index}>{crumb()}</li>
            ))}
          </Breadcrumbs>
          <UserContext.Provider value={user}>
            <Outlet />
          </UserContext.Provider>
        </>
      )}
    </Authenticator>
  );
}

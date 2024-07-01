import { Authenticator } from "@aws-amplify/ui-react";
import { Box, Container, CssBaseline } from "@mui/material";
import type { AuthUser } from "aws-amplify/auth";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../Container/Breadcrumbs";
import Header from "../Container/Header";

export const UserContext = createContext<AuthUser | undefined>(undefined);

function Root() {
  return (
    <Authenticator hideSignUp>
      {({ user, signOut }) => (
        <>
          <CssBaseline />
          <Header signOut={signOut} />
          <Box sx={{ mt: 2 }}>
            <Container maxWidth="md">
              <Breadcrumbs />
              <UserContext.Provider value={user}>
                <Outlet />
              </UserContext.Provider>
            </Container>
          </Box>
        </>
      )}
    </Authenticator>
  );
}

export default Root;

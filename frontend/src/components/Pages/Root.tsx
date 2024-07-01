import { Authenticator } from "@aws-amplify/ui-react";
import { NavigateNext } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import type { AuthUser } from "aws-amplify/auth";
import { createContext } from "react";
import { Outlet, useMatches } from "react-router-dom";

export const UserContext = createContext<AuthUser | undefined>(undefined);

type HandleType = {
  crumb: () => React.ReactNode;
};

function Root() {
  const matches = useMatches();
  const handles = matches
    .filter((match) => Boolean(match.handle))
    .map((match) => match.handle) as HandleType[];
  const crumbs = handles.map((handle) => handle.crumb);

  return (
    <Authenticator hideSignUp>
      {({ user, signOut }) => (
        <>
          <CssBaseline />
          <Box>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Image Drawer
                </Typography>
                <Button color="inherit" onClick={signOut}>
                  SignOut
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Container maxWidth="md">
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<NavigateNext fontSize="small" />}
              >
                {crumbs.map((crumb, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey:
                  <li key={`crumb-${index}`}>{crumb()}</li>
                ))}
              </Breadcrumbs>
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

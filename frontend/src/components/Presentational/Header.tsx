import type { AuthEventData } from "@aws-amplify/ui";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function Header({
  signOut,
}: { signOut: ((data?: AuthEventData | undefined) => void) | undefined }) {
  return (
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
  );
}

export default Header;

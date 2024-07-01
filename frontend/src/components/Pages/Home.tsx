import { Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FileList from "../Container/FileList";
import { UserContext } from "./Root";

function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
        Hello {user?.username}
      </Typography>
      <Grid container spacing={2} sx={{ mb: 1 }}>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth component={Link} to="/upload">
            Upload
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth component={Link} to="/download">
            Download
          </Button>
        </Grid>
      </Grid>
      <FileList />
    </>
  );
}

export default Home;

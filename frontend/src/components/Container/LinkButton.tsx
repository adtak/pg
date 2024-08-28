import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function LinkButton() {
  return (
    <Grid container spacing={2} sx={{ mb: 1 }}>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth component={Link} to="/upload">
          Upload
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth component={Link} to="/download">
          Download
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth component={Link} to="/list">
          List
        </Button>
      </Grid>
    </Grid>
  );
}

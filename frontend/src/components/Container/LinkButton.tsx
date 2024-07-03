import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function LinkButton() {
  return (
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
  );
}

export default LinkButton;

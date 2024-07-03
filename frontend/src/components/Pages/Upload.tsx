import { Typography } from "@mui/material";
import UploadButton from "../Container/UploadButton";

function Upload() {
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
        Please select upload file
      </Typography>
      <UploadButton />
    </>
  );
}

export default Upload;

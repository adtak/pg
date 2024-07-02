import { Button, Typography } from "@mui/material";
import { useRef } from "react";

function Upload() {
  const { inputRef, onClickInput } = useUploadRef();
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
        Please select upload file
      </Typography>
      <Button variant="contained" fullWidth onClick={onClickInput}>
        Upload File
      </Button>
      <input hidden type="file" ref={inputRef} onChange={uploadFile} />
    </>
  );
}

const useUploadRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickInput = () => {
    inputRef.current?.click();
  };
  return { inputRef, onClickInput };
};

const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.files);
};

export default Upload;

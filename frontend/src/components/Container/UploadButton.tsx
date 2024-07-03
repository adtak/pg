import { Button } from "@mui/material";
import { useRef } from "react";

export default function UploadButton() {
  const { inputRef, onClickInput } = useUploadRef();
  return (
    <>
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

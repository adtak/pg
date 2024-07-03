import { Typography } from "@mui/material";
import { useContext } from "react";
import FileList from "../Container/FileList";
import LinkButton from "../Container/LinkButton";
import { UserContext } from "./Root";

export default function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
        Hello {user?.username}
      </Typography>
      <LinkButton />
      <FileList />
    </>
  );
}

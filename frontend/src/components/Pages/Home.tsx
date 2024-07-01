import { Typography } from "@mui/material";
import { useContext } from "react";
import ButtonLink from "../Container/ButtonLink";
import FileList from "../Container/FileList";
import { UserContext } from "./Root";

function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
        Hello {user?.username}
      </Typography>
      <ButtonLink />
      <FileList />
    </>
  );
}

export default Home;

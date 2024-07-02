import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const errorMessage = useErrorText();
  return (
    <>
      <CssBaseline />
      <Box sx={{ mt: 2 }}>
        <Container maxWidth="sm">
          <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            Sorry, an unexpected error has occurred.
          </Typography>
          <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            {errorMessage}
          </Typography>
        </Container>
      </Box>
    </>
  );
}

const useErrorText = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return error.statusText;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Unknown Error";
};

export default ErrorPage;

import "@aws-amplify/ui-react/styles.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link as MuiLink } from "@mui/material";
import { Amplify } from "aws-amplify";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import config from "./amplify-config";
import Download from "./components/Pages/Download";
import Home from "./components/Pages/Home";
import Root from "./components/Pages/Root";
import Upload from "./components/Pages/Upload";

Amplify.configure(config);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      handle: {
        crumb: () => (
          <MuiLink
            component={Link}
            to="/"
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </MuiLink>
        ),
      },
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "upload",
          element: <Upload />,
          handle: {
            crumb: () => (
              <MuiLink
                component={Link}
                to="/upload"
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
              >
                Upload
              </MuiLink>
            ),
          },
        },
        {
          path: "download",
          element: <Download />,
          handle: {
            crumb: () => (
              <MuiLink
                component={Link}
                to="/download"
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
              >
                Download
              </MuiLink>
            ),
          },
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

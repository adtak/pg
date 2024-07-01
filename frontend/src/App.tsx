import "@aws-amplify/ui-react/styles.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@mui/material";
import { Amplify } from "aws-amplify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
          <Link
            href="/"
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
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
              <Link
                href="/upload"
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
              >
                Upload
              </Link>
            ),
          },
        },
        {
          path: "download",
          element: <Download />,
          handle: {
            crumb: () => (
              <Link
                href="/download"
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
              >
                Download
              </Link>
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

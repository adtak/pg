import "@aws-amplify/ui-react/styles.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link as MuiLink } from "@mui/material";
import { Amplify } from "aws-amplify";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import config from "./amplify-config";
import Dashboard from "./components/page/Dashboard";
import Download from "./components/page/Download";
import ErrorPage from "./components/page/Error";
import Home from "./components/page/Home";
import Root from "./components/page/Root";
import Upload from "./components/page/Upload";

Amplify.configure(config);

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      handle: createHundle({
        to: "/",
        inner: (
          <>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </>
        ),
      }),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "upload",
          element: <Upload />,
          handle: createHundle({ to: "/upload", inner: "Upload" }),
        },
        {
          path: "download",
          element: <Download />,
          handle: createHundle({ to: "/download", inner: "Download" }),
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          handle: createHundle({ to: "/dashboard", inner: "Dashboard" }),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export type HandleType = {
  crumb: ({ index }: { index: number }) => React.ReactNode;
};

const createHundle = ({
  to,
  inner,
}: { to: string; inner: React.ReactNode }): HandleType => {
  return {
    crumb: ({ index }) => (
      <MuiLink
        component={Link}
        to={to}
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        key={index}
      >
        {inner}
      </MuiLink>
    ),
  };
};

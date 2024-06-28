import "@aws-amplify/ui-react/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Pages/Root";
import Home from "./components/Pages/Home";
import Upload from "./components/Pages/Upload";

import { Amplify } from "aws-amplify";
import config from "./amplify-config";
Amplify.configure(config);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "upload",
          element: <Upload />,
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

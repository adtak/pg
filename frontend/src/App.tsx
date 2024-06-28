import "@aws-amplify/ui-react/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";

import { Amplify } from "aws-amplify";
import config from "./amplify-config";
Amplify.configure(config);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

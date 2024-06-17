import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/RootLayout";
import Store from "./Screens/Store/Store";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [{ path: "", element: <Store /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

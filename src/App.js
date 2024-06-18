import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/RootLayout";
import Store from "./Screens/Store/Store";
import ProductDetail from "./Screens/ProductDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <Store /> },
      { path: "prodDetail", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

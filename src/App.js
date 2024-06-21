import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/RootLayout";
import Store from "./Screens/Store/Store";
import ProductDetail from "./Screens/ProductDetail/ProductDetail";
import Cart from "./Screens/Cart/Cart";
import Success from "./Screens/Success/Success";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <Store /> },
      { path: "prodDetail", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "success", element: <Success /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;

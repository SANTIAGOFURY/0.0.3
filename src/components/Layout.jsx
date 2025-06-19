import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      {/* Container div to offset fixed header height */}
      <div style={{ marginTop: "10vh", marginLeft: "10vh" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const showFooterPaths = ["/", "/about", "/support"];
  const shouldShowFooter = showFooterPaths.includes(location.pathname);
  return (
    <>
      <Header />
      <div style={{ marginTop: "10vh" }}>
        <Outlet />
      </div>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default Layout;

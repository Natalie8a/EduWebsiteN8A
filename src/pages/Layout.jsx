import { Outlet } from "react-router-dom/dist";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollRestoration from "../components/ScrollRestoration";
// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
  return (
    <>
      <ScrollToTop>
        <Navbar />
        <ScrollRestoration>
          <Outlet />
        </ScrollRestoration>
        <Footer />
      </ScrollToTop>
    </>
  );
};

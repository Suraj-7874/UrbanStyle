import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Layout = ({ onSearch, searchQuery }) => (
  <>
    <Navbar onSearch={onSearch} />
    <Outlet />
    {(!searchQuery || searchQuery.trim() === "") && <Footer />}
  </>
);

export default Layout;

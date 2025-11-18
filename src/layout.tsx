import { Outlet } from "react-router-dom";
import { Navbar01 } from "./components/ui/shadcn-io/navbar-01";
import Footer from "./components/footer";

export default function Layout() {
  return (
    <div className="text-(--dark-blue)">
      <Navbar01 />
      <div className="container m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

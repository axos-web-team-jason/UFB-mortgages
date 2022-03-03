import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import mortgagesPage from "../../data/mortgagesPage";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      No
      <main>{children}</main>
      <Footer />
    </>
  );
}

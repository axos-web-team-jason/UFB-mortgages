import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import mortgagesPage from "../../data/mortgagesPage";

export default function NestedLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer info={mortgagesPage.footer} />
    </>
  );
}

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import mortgagesPage from "../../data/mortgagesPage";
import Speedbump from "../Speedbump/Speedbump";
import "../../utils/utils";

export default function NestedLayout({ children }) {
  return (
    <>
      <Speedbump />
      <Navbar />
      <main>{children}</main>
      <Footer info={mortgagesPage.footer} />
    </>
  );
}

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Speedbump from "../Speedbump/Speedbump";
import "../../utils/utils";

export default function Layout({ children }) {
  return (
    <>
      <Speedbump />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import pageConstants from "../data/pageConstants";
import Mortgages from "../views/Mortgages";
import Layout from "../components/Layout/Layout";
import Sublinks from "../components/Footer/Sublinks";
import NestedLayout from "../components/Layout/NestedLayout";

export default function Home() {
  return (
    <>
      <Mortgages />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <NestedLayout>
      {page}
      <Sublinks linksArr={pageConstants.linksArr} />
    </NestedLayout>
  );
};

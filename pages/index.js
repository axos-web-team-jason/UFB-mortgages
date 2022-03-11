import { createClient } from "contentful";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import pageConstants from "../data/pageConstants";
import Mortgages from "../views/Mortgages";
import Layout from "../components/Layout/Layout";
import Sublinks from "../components/Footer/Sublinks";
import NestedLayout from "../components/Layout/NestedLayout";

// export async function getStaticProps() {
//   // Login to contentful using provided keys
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "mortgages" }); // const response = get items from contentful space
//   return {
//     props: {
//       mortgages: res.items,
//     },
//   };
// }

export default function Home({ mortgages }) {
  // console.log(mortgages); // pass in items to Mortgage Page component
  return (
    <>
      {/* <Mortgages mortgages={mortgages} /> */}
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

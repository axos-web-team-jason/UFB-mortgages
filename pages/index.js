import { createClient } from "contentful";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import pageConstants from "../data/pageConstants";
import Mortgages from "./mortgages";

import Layout from "../components/Layout/Layout";
import Sublinks from "../components/Footer/Sublinks";
import { useRouter } from "next/router";

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
  // const router = useRouter();
  // const {
  //   query: { id },
  // } = router;
  // console.log(mortgages); // pass in items to Mortgage Page component

  return (
    <>
      {
        /* <Mortgages mortgages={mortgages} /> */ <div>
          <Mortgages />
        </div>
      }
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

import Head from "next/head";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import TwoUpBlockContainer from "../containers/TwoUpBlockContainer/TwoUpBlockContainer";
import MainBlockContainer from "../containers/MainContentBlockContainer/MainContentBlockContainer";
import CTA from "../components/CTA/CTA";
import TertiaryBlockContainer from "../containers/TertiaryBlockContainer/TertiaryBlockContainer";
import Articles from "../components/Articles/Articles";
import SecondaryBlockContainer from "../containers/SecondaryBlockContainer/SecondaryBlockContainer";
import MortgageLayout from "../components/Layout/MortgageLayout";
import mortgagesPage from "../data/mortgagesPage";
import Lucky from "../assets/lucky-promo-LP.png";
import styles from "./Mortgages.module.css";

export default function Mortgages({ mortgages }) {
  // const { heroBannerHeader } = mortgages[0].fields; // access the data fields from Contentful
  return (
    <section>
      <Head>
        <title>Low Interest Mortgage Options</title>
      </Head>
      <HeroBanner
        heroBanner={mortgagesPage.heroBanner} // from JSON
        // header={heroBannerHeader} // from Contentful
        img={Lucky}
        link={mortgagesPage.heroBanner.buttonLink}
      />
      <div className="grayBg section">
        <h1 className={`${styles.twoUpHeader} centeredHeader`}>
          {mortgagesPage.twoUpHeader}
        </h1>
        <TwoUpBlockContainer blocks={mortgagesPage.twoUpBlock} />
      </div>
      <div className="section">
        <h1 className={`${styles.mainContentHeader} centeredHeader`}>
          {mortgagesPage.mainContent.pageHeader}
        </h1>
        <MainBlockContainer block={mortgagesPage.mainContent} img={Lucky} />
      </div>
      <CTA content={mortgagesPage.CTA} />
      <div className="section">
        <h1 className={`${styles.mainContentHeader} centeredHeader`}>
          {mortgagesPage.tertBlockHeader}
        </h1>
        <div className={`${styles.sectionBody} `}>
          {mortgagesPage.tertTestimonial}
        </div>
        <TertiaryBlockContainer blocks={mortgagesPage.tile} />
      </div>
      <Articles />
    </section>
  );
}

Mortgages.getLayout = function getLayout(page) {
  return (
    <MortgageLayout disclosures={mortgagesPage.footer}>{page}</MortgageLayout>
  );
};

import styles from "./Footer.module.css";
import Image from "next/image";
import pageConstants from "../../data/pageConstants";

export default function Footer({ ...data }) {
  const { info } = data;

  const printDisclosures = (info) => {
    if (info.disclosures.length > 0) {
      return info.disclosures.map((key, index) => {
        return (
          <p key={key.id}>
            <sup>{info.disclosures[index].superscript} </sup>
            {info.disclosures[index].text}
          </p>
        );
      });
    } else {
      return "";
    }
  };

  const EHLLoader = () => {
    return `https://www.ufbdirect.com/Assets/EHL-Logo.svg`;
  };

  const FDICLoader = () => {
    return `https://www.ufbdirect.com/Assets/FDIC-Logo.svg`;
  };

  return (
    <div>
      <footer className={`${styles.section}`}>
        <div className="utils-container">
          <p>{pageConstants.footer.copyright}</p>
          <p>{pageConstants.footer.fdic}</p>
          <p>{pageConstants.footer.nmls}</p>
          {printDisclosures(info)}
          <div className={styles.imgContainer}>
            <Image
              loader={EHLLoader}
              src="EHLlogo.png"
              width={157}
              height={29}
            />
            <Image
              loader={FDICLoader}
              src="FDICLogo.png"
              width={84}
              height={30}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

import styles from "./Sublinks.module.css";
import Link from "next/link";

export default function Sublinks({ ...data }) {
  const { linksArr } = data;

  const printLinks = () => {
    return linksArr.map((link, index) => {
      return (
        <div key={link.id}>
          <Link href={link.link} passHref>
            <a className={styles.color}>{link.page}</a>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={`${styles.links} utils-container`}>{printLinks()}</div>
  );
}

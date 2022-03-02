import styles from "./Sublinks.module.css";
import Link from "next/link";

export default function Sublinks({ ...data }) {
  const linksArr = [
    { page: "Savings", link: "https://www.ufbdirect.com/Savings", id: 1 },
    { page: "Mortgages", link: "https://www.ufbdirect.com/Mortgages", id: 2 },
    { page: "Blog", link: "https://www.ufbdirect.com/ufb-blog", id: 3 },
    { page: "Digital Tools", link: "https://www.ufbdirect.com/tools", id: 4 },
    { page: "About Us", link: "https://www.ufbdirect.com/About-Us", id: 5 },
    {
      page: "Disclosures",
      link: "https://www.ufbdirect.com/Disclosures",
      id: 6,
    },
    {
      page: "Privacy and Security",
      link: "https://www.ufbdirect.com/privacy-security",
      id: 7,
    },
  ];

  const printLinks = () => {
    return linksArr.map((link, index) => {
      return (
        <div key={link.id}>
          <Link href={link.link}>
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

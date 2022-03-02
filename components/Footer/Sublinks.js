import styles from "./Sublinks.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className={`${styles.links} utils-container`}>
        <div>
          <Link href="https://www.ufbdirect.com/Savings">
            <a>Savings</a>
          </Link>
        </div>
        <div>
          <Link href="https://www.ufbdirect.com/Mortgages">
            <a>Mortgages</a>
          </Link>
        </div>
        <div>
          <Link href="https://www.ufbdirect.com/ufb-blog">
            <a>Blog</a>
          </Link>
        </div>
        <div>
          <Link href="https://www.ufbdirect.com/tools">
            <a>Digital Tools</a>
          </Link>
        </div>
        <div>
          <Link href="https://www.ufbdirect.com/About-Us">
            <a>About Us</a>
          </Link>
        </div>
        <div>
          <Link href="https://www.ufbdirect.com/disclosures">
            <a>Disclosures</a>
          </Link>
        </div>
        <div>
          <Link href="https://www.ufbdirect.com/privacy-security">
            <a>Privacy and Security</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

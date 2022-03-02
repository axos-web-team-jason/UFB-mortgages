import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import ufbLogo from "../../assets/ufb-w-logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className={`${styles.nav}`}>
        <div className={styles.imgContainer}>
          <Image src={ufbLogo} width={192} height={32} />
        </div>
      </div>
    </nav>
  );
}

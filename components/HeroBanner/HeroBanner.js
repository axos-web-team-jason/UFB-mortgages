import styles from "./HeroBanner.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HeroBanner({ ...data }) {
  const { heroBanner, img } = data;
  return (
    <div id="__next" data-reactroot="">
      <section className={`${styles.Hero_bannerHero}`}>
        <div className={`${styles.utils_container}`}>
          <div className={`${styles.utils_flexRow} ${styles.utils_middle}`}>
            <div className={`${styles.Hero_textWrapper}`}>
              <div className={`${styles.Hero_superTag}`}>
                {heroBanner.superHeader}
              </div>
              <h1 className={`${styles.utils_mainTitle}`}>
                {heroBanner.header}
              </h1>
              <p className={`${styles.utils_mb0}`}>{heroBanner.body}</p>
              <div
                className={`${styles.Hero_heroBtns} ${styles.utils_flexRow} ${styles.utils_middle}`}
              >
                <Link href="https://www.axosbank.com" passHref>
                  <a
                    className={`${styles.utils_btnPrimary} ${styles.utils_mb0}`}
                    role="button"
                  >
                    {heroBanner.button}
                  </a>
                </Link>
                <Link href="https://www.disney.com" passHref>
                  <a className={`${styles.utils_btnSecondary}`}>
                    {heroBanner.link}
                  </a>
                </Link>
              </div>
            </div>
            <div className={`${styles.Hero_imgWrapper}`} role="figure">
              <Image src={img} priority={true} width={744} height={760} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

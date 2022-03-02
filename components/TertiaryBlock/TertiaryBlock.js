import styles from "./TertiaryBlock.module.css";
import Link from "next/link";

export default function TertiaryBlock({ ...data }) {
  const { preHeader, mainHeader, body, linkText, color } = data;

  const arr = [styles.bodyWrapper, styles.lightText];
  const selectorUtil = (params) => {
    let selectionArr = [];
    selectionArr = params.map((element) => {
      return `\${${element}}`;
    });
    return selectionArr.join();
  };

  const classSelector = (color, arr) => {
    let parsedArr = selectorUtil(arr);
    console.log(parsedArr);
    const prefix = parsedArr[0];
    console.log(prefix);

    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${parsedArr[1]}`;
    }
  };

  const blockColor = (color) => {
    const prefix = `${styles.primaryBlock}`;
    if (color === "primaryStyle") {
      return `${prefix}`;
    } else if (color === "lightStyle") {
      return `${prefix} ${styles.lightBlock}`;
    } else {
      return `${prefix} ${styles.darkBlock}`;
    }
  };

  const preHeaderColor = (color) => {
    const prefix = `${styles.preHeader}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.lightText}`;
    }
  };

  const headerColor = (color) => {
    const prefix = `${styles.mainHeader}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.darkText}`;
    }
  };

  const bodyColor = (color) => {
    const prefix = `${styles.bodyWrapper}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.whiteBody}`;
    }
  };

  const linkColor = (color) => {
    const prefix = `${styles.container} ${styles.linkContainer}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.secondaryMode} ${styles.secondaryText}`;
    }
  };

  const arrowColor = (color) => {
    const prefix = `${styles.container} ${styles.centerLinkContainer}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.secondaryMode} `;
    }
  };

  return (
    <div className={blockColor(color)}>
      <div className={preHeaderColor(color)}>
        <span>{preHeader}</span>
      </div>
      <div className={headerColor(color)}>{mainHeader}</div>
      <div className={bodyColor(color)}>
        <p>{body}</p>
      </div>
      {/* <div className={classSelector(color, arr)}>
        <p>{body}</p>
      </div> */}
      <div className={arrowColor(color)}>
        <Link href="/">
          <a className={linkColor(color)}>{linkText}</a>
        </Link>
      </div>
    </div>
  );
}

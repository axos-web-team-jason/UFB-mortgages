import MainContentBlock from "../../components/MainContentBlock/MainContentBlock";
import styles from "./MainContentBlockContainer.module.css";

export default function MainBlockContainer({ ...data }) {
  const { block, img } = data;
  return (
    <section className="">
      <div className={`${styles.twoUpBlockTest} utils-container`}>
        <MainContentBlock
          superHeader={block.superHeader}
          header={block.header}
          body={block.body}
          checks={block.checks}
          links={block.links}
          button={block.button}
          sublink={block.sublink}
          img={img}
        />
      </div>
    </section>
  );
}

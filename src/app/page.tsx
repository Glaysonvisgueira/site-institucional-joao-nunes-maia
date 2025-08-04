import styles from "./page.module.scss";

//Sections
import Homepage from "./_pages-sections/Homepage";
import Contacts from "./_pages-sections/Contacts";

import ButtonGoToTop from '@components/ButtonToTop';

export default function Home() {
  return (
    <div className={styles.page}>
      <Homepage />
      <Contacts />
      <ButtonGoToTop />
    </div>
  );
}

import styles from "./page.module.scss";

//Sections
import Homepage from "./_pages-sections/Homepage";
import Blog from "./_pages-sections/Blog";
import Contacts from "./_pages-sections/Contacts";
import Footer from "./_pages-sections/Footer";

import ButtonGoToTop from '@components/ButtonToTop';

export default function Home() {
  return (
    <div className={styles.page}>
      <ButtonGoToTop />
      <Homepage />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

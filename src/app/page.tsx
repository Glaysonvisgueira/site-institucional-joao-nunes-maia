import styles from "./page.module.scss";

//Sections
import Homepage from "../components/PagesSections/Homepage";
import Blog from "../components/PagesSections/Blog";
import AboutUs from "../components/PagesSections/AboutUs";
import Faq from "../components/PagesSections/Faq";
import Contacts from "../components/PagesSections/Contacts";
import Footer from "../components/PagesSections/Footer";

import ButtonGoToTop from '@components/ButtonToTop';

export default function Home() {
  return (
    <div className={styles.page}>
      <ButtonGoToTop />
      <Homepage />
      <AboutUs />      
      <Blog />
      <Contacts />
      <Faq />
      <Footer />
    </div>
  );
}

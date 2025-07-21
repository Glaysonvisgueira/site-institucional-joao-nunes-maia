import styles from "./page.module.scss";

//UI components
import { Button } from "@/components/ui/Button";

//Icons
import { FaHandHoldingHeart } from "react-icons/fa6";

//Sections
import Contacts from "./_pages-sections/Contacts";

export default function Home() {
  return (
    <div className={styles.page}>
      <Contacts />
      {/* <main className={styles.main}>

        <Button 
          icon={<FaHandHoldingHeart />}
          variant="contained"
        >
          Como doar?
        </Button>

        <Button 
          icon={<FaHandHoldingHeart />}
          variant="outlined"
        >
          Como doar?
        </Button>

        <Button 
          icon={<FaHandHoldingHeart />}
          variant="text"
        >
          Como doar?
        </Button>
        
      </main>
      <footer className={styles.footer}>
        
      </footer> */}
    </div>
  );
}

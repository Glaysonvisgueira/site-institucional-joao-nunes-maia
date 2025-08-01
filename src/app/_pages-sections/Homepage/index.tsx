
import styles from './index.module.scss';

//Custom components
import NavigationMenuDropdown from './NavigationMenu';
import { Button } from '@/components/ui/Button';

//Icons
import { FaHandHoldingHeart } from "react-icons/fa";


const AppBar = () => {
  return (
    <div className={styles.appbar}>
      <div>LOGO</div>

      <NavigationMenuDropdown />

      <div><Button icon={<FaHandHoldingHeart />}>Como ajudar?</Button></div>
    </div>
  )
}


export default function Homepage() {
  return (
    <div
      className={`${styles.page}`}
    >
      <AppBar />
      <h2>HOMEPAGE</h2>
    </div>
  )
}

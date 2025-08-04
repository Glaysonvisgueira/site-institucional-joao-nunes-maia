
import styles from './index.module.scss';

//Custom components
import { Button } from '@/components/ui/Button';
import NavigationMenuDropdown from '../NavigationMenu';

//Icons
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



export default function AppBar() {
  return (
    <>
      <div className={styles.barContacts}>
        <div className={styles.container}>


          <div className={styles.socialNetworks}>
            <div className={styles.socialNetworkButton}>
              <FaInstagram />
            </div>
            <div className={styles.socialNetworkButton}>
              <FaYoutube />

            </div>
            <div className={styles.socialNetworkButton}>
              <FaFacebookSquare />
            </div>

          </div>

          <span>A obra social João Nunes Maia</span>
        </div>
      </div>
      <div className={styles.appbar}>
        <img
          style={{ marginRight: '10px' }}
          src="/svgs/logo-jnm.svg"
          alt="Logo da Sociedade Espírita João Nunes Maia"
          width={72}
          height={48}
        />

        <NavigationMenuDropdown />
        <Button icon={<FaHandHoldingHeart />}>Como ajudar?</Button>
      </div>
    </>
  )
}


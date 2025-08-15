'use client';

import styles from './index.module.scss';

//Custom components
import AppBar from './AppBar';
import HamburgerMenu from './HamburgerMenu';
import { Button } from '@/components/ui/Button';

export default function Homepage() {
  return (
    <div
      className={`${styles.page}`}
    >
      <AppBar />
      <HamburgerMenu />

      <div className={styles.containerContent}>
        <div className={styles.content}>
          <h1>Bem-vindo(a)!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Button>Saiba Mais</Button>
        </div>
      </div>
    </div>
  )
}

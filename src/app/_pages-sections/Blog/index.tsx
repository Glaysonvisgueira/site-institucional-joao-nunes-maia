
import { ReactNode } from 'react';
import styles from './index.module.scss';

//Icons
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

//Custom components
import TitleSection from '@/components/TitleSection';
import { Button } from '@components/ui/Button';

interface CardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

function Card({ icon, title, subtitle }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.contentText}>
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <section className={styles.page} id="blog">

      <TitleSection
        title="Blog"
        subtitle="Navegue pelas postagens do blog e fique por dentro de nossos projetos e ações sociais"
      />

      <div className={styles.container}>

        <div className={styles.containerBlogAllPosts}>
          <div className={styles.texts}>
            <h3>Últimas postagens</h3>
            <span>Acesse os últimos conteúdos</span>
          </div>

          <div>
            <Button variant='outlined'>Ver todos</Button>
          </div>

        </div>

        <div className={styles.grid}>
          <div className={styles.card} />
          <div className={styles.card} />
          <div className={styles.card} />
        </div>

      </div>



    </section>
  )
}

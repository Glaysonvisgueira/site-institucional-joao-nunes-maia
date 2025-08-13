
import { ReactNode } from 'react';
import styles from './index.module.scss';

//Icons
import { FaArrowRight } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdNoPhotography } from "react-icons/md";


//Custom components
import TitleSection from '@/components/TitleSection';
import { Button } from '@components/ui/Button';

interface CardProps {
  title?: string;
}

function Card({ title }: CardProps) {
  return (
    <div className={styles.card}>
      <div>

        <div className={styles.imgContainer}>
          <MdNoPhotography />
        </div>

        <div className={styles.content}>
          <div className={styles.wrapperDatePost}>
            <MdDateRange />
            <span>13/08/2025</span>
          </div>
          <h4>Título do card</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </div>

      <div className={styles.readMore}>
        <div className={styles.goToPost}>
          <h3>Leia mais</h3>
          <FaArrowRight />
        </div>
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
          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </div>



    </section>
  )
}

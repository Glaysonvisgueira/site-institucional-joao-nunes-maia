
import styles from './index.module.scss';

//Custom components
import TitleSection from '@/components/TitleSection';

export default function AboutUs() {
  return (
    <section className={styles.page} id="about-us">
      <TitleSection
        title="Sobre nós"
        subtitle="Conheça a nossa história e saiba mais sobre nosso trabalho de caridade ao próximo"
      />
      <div className={styles.container}>
      </div>
    </section>
  )
}

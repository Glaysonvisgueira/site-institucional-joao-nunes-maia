'use client';
import styles from './index.module.scss';

//Icons
import { FaArrowRight } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdNoPhotography } from "react-icons/md";


//Custom components
import TitleSection from '@/components/TitleSection';
import { Button } from '@components/ui/Button';

interface CardProps {
  title: string;
  description: string;
  created_at: string;
  link: string;
}

const CARDS: CardProps[] = [
  {
    title: "Estudo do Evangelho no Lar",
    description: "Encontro semanal para harmonizar o ambiente familiar por meio da leitura e reflexão do Evangelho segundo o Espiritismo.",
    created_at: "13/08/2025",
    link: ""
  },
  {
    title: "Palestra: A Lei de Causa e Efeito",
    description: "Reflexão sobre como nossas ações influenciam nosso presente e futuro à luz da Doutrina Espírita.",
    created_at: "10/08/2025",
    link: ""
  },
  {
    title: "Grupo de Estudo sobre Mediunidade",
    description: "Estudo orientado sobre os fenômenos mediúnicos, com base nas obras de Allan Kardec e orientações de Espíritos superiores.",
    created_at: "07/08/2025",
    link: ""
  },
  {
    title: "Campanha do Quilo",
    description: "Ação fraterna de arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.",
    created_at: "30/07/2025",
    link: ""
  },
  {
    title: "Evangelização Infantil",
    description: "Atividade voltada para crianças, com histórias e dinâmicas que ensinam valores de amor, respeito e solidariedade.",
    created_at: "10/07/2025",
    link: ""
  },
  {
    title: "Ciclo de Estudos: O Livro dos Espíritos",
    description: "Leitura comentada e debates sobre os princípios básicos da Doutrina Espírita, conforme a obra de Allan Kardec.",
    created_at: "30/06/2025",
    link: ""
  },
  {
    title: "Palestra: A Lei de Causa e Efeito",
    description: "Reflexão sobre como nossas ações influenciam nosso presente e futuro à luz da Doutrina Espírita.",
    created_at: "10/08/2025",
    link: ""
  },
  {
    title: "Grupo de Estudo sobre Mediunidade",
    description: "Estudo orientado sobre os fenômenos mediúnicos, com base nas obras de Allan Kardec e orientações de Espíritos superiores.",
    created_at: "07/08/2025",
    link: ""
  },
];

function Card({
  title,
  description,
  created_at,
  link
}: CardProps) {
  return (
    <div className={styles.card}>
      <div>

        <div className={styles.imgContainer}>
          <MdNoPhotography />
        </div>

        <div className={styles.content}>
          <div className={styles.wrapperDatePost}>
            <MdDateRange />
            <span>{created_at}</span>
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
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
            <h3>Nossos artigos</h3>
            <span>Acesse os últimos conteúdos</span>
          </div>

          <div>
            <Button variant='outlined'>Ver todos</Button>
          </div>

        </div>

        <div className={styles.grid}>
          {CARDS.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              description={post.description}
              created_at={post.created_at}
              link=""
            />
          ))}
        </div>

      </div>



    </section>
  )
}


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

export default function Contacts() {
  return (
    <section className={styles.page} id="contatos">

      <TitleSection
        title="Como nos encontrar?"
        subtitle="Estamos sempre prontos para ajudar, entre em contato conosco através dos canais abaixo ou visite nossa unidade"
      />

      <div
        className={styles.container}
      >
        <div className={styles.grid}>
          <Card
            icon={<IoLocationSharp />}
            title="Endereço"
            subtitle="Rua das flores nr: 3700 Santo Antônio"
          />

          <Card
            icon={<MdLocalPhone />}
            title="Telefone"
            subtitle="(86) 99999-9999"
          />

          <Card
            icon={<IoMailUnread />}
            title="E-mail"
            subtitle="contato@email.com"
          />

          <Card
            icon={<GoClockFill />}
            title="Horário"
            subtitle="Dom à Seg das 07h às 18h"
          />


        </div>

        <div className={styles.mapContainer}>
          <div className={styles.header}>
            <h4>Nossa localização</h4>
            <span>Venha nos visitar presencialmente em nossa casa, estamos sempre de portas abertas para recebê-lo.</span>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1986.8317131268386!2d-42.76211090783674!3d-5.157743921516666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1755528232443!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}

              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.socialNetworksContainer}>
        <span className={styles.titleSocialNetwork}>Redes sociais</span>

        <div className={styles.socialNetworksRow}>

          <div className={styles.socialNetwork}>
            <FaInstagram />
            <span>Instagram</span>
          </div>

          <div className={styles.socialNetwork}>
            <FaYoutube />
            <span>Youtube</span>
          </div>

          <div className={styles.socialNetwork}>
            <FaFacebookSquare />
            <span>Facebook</span>
          </div>

        </div>
      </div>



    </section>
  )
}


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
        </div>

        <div className={styles.mapContainer}>
          <div className={styles.header}>
            <h4>Nossa localização</h4>
            <span>Venha nos visitar</span>
          </div>
          <div className={styles.map}>

          </div>
        </div>
      </div>



    </section>
  )
}

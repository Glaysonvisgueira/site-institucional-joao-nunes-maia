'use client';

import { useState } from 'react';
import styles from './index.module.scss';

//Custom components
import TitleSection from '@/components/TitleSection';

//Icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'O que é o nosso trabalho de caridade?',
    answer: 'Nosso trabalho envolve apoio a pessoas em situação de vulnerabilidade, distribuindo cestas básicas, fichas de atendimento e suporte em creches.'
  },
  {
    question: 'Como posso participar das ações?',
    answer: 'Você pode se voluntariar ou fazer doações entrando em contato pelo nosso site ou redes sociais.'
  },
  {
    question: 'Quem pode receber ajuda?',
    answer: 'Qualquer pessoa ou família que esteja em situação de vulnerabilidade social pode ser atendida pelo nosso projeto.'
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.page} id="faq">
      <TitleSection
        title="Perguntas frequentes"
        subtitle="Conheça a nossa história e saiba mais sobre nosso trabalho de caridade ao próximo"
      />
      <div className={styles.container}>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className={styles.question}>
            <h3>{item.question}</h3>
            {activeIndex === index ? <IoIosArrowUp />: <IoIosArrowDown /> }
            
              </div>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

import { useState } from 'react';
import styles from './styles.module.scss';

//Icons
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


interface HamburgerMenuProps {
    className?: string;
}

export default function HamburgerMenu({ className }: HamburgerMenuProps) {
    const [open, setOpen] = useState(false);

    const [accordionOpen, setAccordionOpen] = useState<{ [key: string]: boolean }>({});

    const toggleAccordion = (key: string) => {
        setAccordionOpen(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            {/* {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />} */}

            <div className={`${styles.hamburgerMenu} ${styles.appbarMobile} `}>
                <div className={styles.appBar}>
                    <img
                        style={{ marginRight: '10px' }}
                        src="/svgs/logo-jnm.svg"
                        alt="Logo da Sociedade Espírita João Nunes Maia"
                        width={72}
                        height={48}
                    />

                    <button
                        className={styles.toggle}
                        onClick={() => setOpen(state => !state)}
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                    >
                        {open ? <IoMdClose /> : <IoMenu />}
                    </button>
                </div>

                <nav className={`${styles.menu} ${open ? styles.open : ''}`}>

                    <a href="#">Início</a>

                    <a href="#">Blog</a>

                    <a href="#">Sobre</a>

                    <div className={styles.accordionItem}>
                        <div
                            onClick={() => toggleAccordion('atividades')}
                            className={styles.accordionToggle}
                        >
                            <span>Atividades</span>
                            {accordionOpen['atividades'] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                        <div className={`${styles.accordionContent} ${accordionOpen['atividades'] ? styles.openAccordion : ''}`}>
                            <a href="/historia">História</a>
                            <a href="/equipe">Equipe</a>
                        </div>
                    </div>

                    <div className={styles.accordionItem}>
                        <div
                            onClick={() => toggleAccordion('projetos')}
                            className={styles.accordionToggle}
                        >
                            <span>Projetos</span>
                            {accordionOpen['projetos'] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                        <div className={`${styles.accordionContent} ${accordionOpen['projetos'] ? styles.openAccordion : ''}`}>
                            <a href="/historia">História</a>
                            <a href="/equipe">Equipe</a>
                        </div>
                    </div>

                    <a href="#">Contatos</a>
                </nav>
            </div>
        </>
    );
}

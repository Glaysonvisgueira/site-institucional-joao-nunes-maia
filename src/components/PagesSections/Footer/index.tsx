
import styles from './index.module.scss';


export default function Footer() {
  return (
    <footer
      className={styles.footer}
    >
      <div
        className={styles.container}
      >

      </div>

      <div className={styles.copyrightContainer}>
        <span>Sociedade Espírita João Nunes Maia<br />CNPJ: 01.461.832/0001-78</span>
        <span>© Todos os direitos reservados | 2025</span>
      </div>
    </footer>
  )
}

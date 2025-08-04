
import styles from './index.module.scss';

//Custom components
import AppBar from './AppBar';


export default function Homepage() {
  return (
    <div
      className={`${styles.page}`}
    >
      <AppBar />
    </div>
  )
}

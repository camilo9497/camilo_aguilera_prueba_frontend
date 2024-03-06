import styles from './styles.module.css'

const Header = () => {
  return (
    <nav className={styles.containerMenu}>
      <ul className={styles.listMenu}>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>Home</p>
        </li>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>Pages</p>
          <div className={styles.modalItemMenu}>
            <p>Page 1</p>
            <p>Page 2</p>
            <p>Page 3</p>
          </div>
        </li>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>About</p>
        </li>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>Contact</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
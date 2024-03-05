import styles from './styles.module.css'

const Header = () => {
  return (
    <nav className={styles.containerMenu}>
      <ul className={styles.listMenu}>
        <li className={styles.itemMenu}>
          <p>Home</p>
        </li>
        <li className={styles.itemMenu}>
          <p>Pages</p>
        </li>
        <li className={styles.itemMenu}>
          <p>About</p>
        </li>
        <li className={styles.itemMenu}>
          <p>Contact</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
import styles from './styles.module.css'

interface Props {
  text: string
  icon?: boolean
}

const Button: React.FC<Props> = ({text, icon = false}) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.text}`}>{text}</p>
      {icon && <div className={styles.containerIcon}>X</div>}
    </div>
  )
}

export default Button;
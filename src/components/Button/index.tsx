import styles from './styles.module.css'

interface Props {
  text: string
  icon?: boolean
  onPress?: any
}

const Button: React.FC<Props> = ({text, icon = false, onPress}) => {
  return (
    <div className={styles.container} onClick={()=>onPress()}  >
      <p className={`${styles.text}`}>{text}</p>
      {icon && <div className={styles.containerIcon}>X</div>}
    </div>
  )
}

export default Button;
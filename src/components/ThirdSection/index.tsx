
import ItemFooter from '../ItemFooter';
import styles from './styles.module.css'

const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSecond}>
        <ItemFooter title='Lorem ipsum dolor amet' description='Quisque sagittis hendrerit justo, eu aliquam risus posuere sed' />
        <ItemFooter title='Lorem ipsum dolor amet' description='Quisque sagittis hendrerit justo, eu aliquam risus posuere sed' />
        <ItemFooter title='Lorem ipsum dolor amet' description='Quisque sagittis hendrerit justo, eu aliquam risus posuere sed' />
      </div>
      <p className={styles.text}>Lorem ipsum dolor sit ame <p onClick={()=>console.log('footer link')} className={styles.textLink}>facere facilisxxx</p>  eaque aliquid ut molestias libero iste corrupti sapiente incidunt obcaecati?</p>
    </div>
  )
}

export default ThirdSection;
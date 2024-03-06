import Button from '../Button';
import styles from './styles.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lorem ipsum</h1>
      <h2 className={styles.subtitle}>Sed ullamcorper odio ullamcorper</h2>
      <p className={styles.description}>"Duis bibendum, lacus nec ullamcorper dapibus, tortor orci aliquam ante..."</p>
      <p className={styles.description}>"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...."</p>
      <Button text='Go there...' icon={true} onPress={()=>console.log('Go there...')} />
    </div>
  )
}

export default Hero;
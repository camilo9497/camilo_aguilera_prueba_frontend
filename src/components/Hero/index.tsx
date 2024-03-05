import Button from '../Button';
import styles from './styles.module.css'

const Hero = () => {
  return (
    <>
      <h1>Lorem ipsum</h1>
      <h2>Sed ullamcorper odio ullamcorper</h2>
      <p>"Duis bibendum, lacus nec ullamcorper dapibus, tortor orci aliquam ante..."</p>
      <p>"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...."</p>
      <Button text='Go there...' icon={true}/>
    </>
  )
}

export default Hero;
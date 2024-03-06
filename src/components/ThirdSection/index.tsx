
import Form from '../Form';
import ItemRadio from '../ItemRadio';
import styles from './styles.module.css'

const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerRadio}>
        <ItemRadio id='option1' name='option' value='option1' label='Option 1' />
        <ItemRadio id='option2' name='option' value='option2' label='Option 2' />
        <ItemRadio id='option3' name='option' value='option3' label='Option 3' />
      </div>
      <Form />
    </div>
  )
}

export default ThirdSection;
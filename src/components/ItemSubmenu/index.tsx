

import { useState } from 'react';
import styles from './styles.module.css'

interface Props {
  text: string,
  subMenu?: any
}

const ItemSubmenu: React.FC<Props> = ({text, subMenu}) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const hasSubmenu = subMenu.length > 0;
  console.log("🚀 ~ hasSubmenu:", hasSubmenu)
  return (
    <div onClick={()=>setShowSubMenu(!showSubMenu)} className={styles.container}>
     <div className={styles.secondaryContainer}>
      <p>{text}</p>
        {hasSubmenu && (
          <div className={styles.containerIcon}>
          {!showSubMenu ? <i>V</i> : <i>A</i>}
        </div>
        )}
     </div>
      {showSubMenu && (
        <div className={styles.containerSubItems}>
          {subMenu.map((item)=> {
            return <p className={styles.itemSubmenu}>{item.text}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default ItemSubmenu;
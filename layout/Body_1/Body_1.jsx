//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//Svgs
import Team from './Svgs/Team'

const Body_1 = () => {
  return (
    <span>
      
    <div className={'bg-white dark:bg-black-500 ' + styles.container}>
      <div className={styles.flexbox}>
        <div className={styles.header}>
          <br/>
          <h1 className={styles.text}></h1>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
    </span>
  )
}

export default Body_1;
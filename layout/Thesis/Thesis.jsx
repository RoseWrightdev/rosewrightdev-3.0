//styles
import styles from "./styles.module.css"
import Image from 'next/image'

//conponents
import SplineModel from "../../conponents/SplineModel/SplineModel"
import Rose11 from "./Rose11.png"

const Thesis = () => {
  return (
    <div className={'bg-gray dark:bg-black-off ' + styles.container}>
      <div className={styles.flexbox}>
        <div className={' ' + styles.image}>
          <Image src={Rose11} alt='A pink blue and white 3d representaion of a online admin control dashboard.' width={530} height={430}/>
        </div>
        <div className={'' + styles.textcontainer}>
          <h1 className={'dark:text-white ' + styles.text}>I help people build interactive and compelling websites.</h1>
          <br/>
          <h2 className={'dark:text-white ' + styles}>I work with a strong focus on simplicity, accessibility <br/> and responsive design.</h2>

        </div>
      </div>
    </div>
  )
}

export default Thesis;
//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//images
import Rw from "./images/Rw.png"
import Image from 'next/image'

//Svgs
import LightSpikes from './Svgs/DarkSpikes'
import DarkSpikes from './Svgs/LightSpikes'

const Container = ({children}) => {
  return (
    <div className={'bg-gray-800 dark:bg-black-600 ' + styles.container}>
      {children}
    </div>
  )
}

const Thesis = () => {
  return (
    <span>
    <Container>
      <div className={styles.flexbox}>
        <div className={' ' + styles.image}>
          <Image src={Rw} alt='A pink blue and white 3d representaion of a online admin control dashboard.' width={530} height={430}/>
        </div>
        <div className={'' + styles.textcontainer}>
          <h1 className={'dark:text-white ' + styles.text}>I help people build interactive and compelling websites.</h1>
          <br/>
          <h2 className={'dark:text-white ' + styles}>I work with a strong focus on simplicity, accessibility <br/> and responsive design.</h2>
        </div>
      </div>
      
    </Container>
    <LightSpikes/>
    <DarkSpikes/>
    </span>
  )
}

export default Thesis;
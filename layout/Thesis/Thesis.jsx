//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//images
import Image from 'next/image'
import Top from './Images/Top.png'

//Icons
import { MdArrowDownward } from "react-icons/md";

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
        <div className={'p-8 '  + styles.image}>
{//   <Image src={Top} alt='pink blue and white 3d representaion of a online admin control dashboard.' className={' ' + styles.imageSrc}/>
}        </div>
        <div className={'bg-white dark:bg-black-800 border-black-700 dark:border-white ' + styles.textcontainer}>
          <h1 className={'dark:text-white ' + styles.text}> <span className={'whitespace-nowrap '}> I help people build </span> <br/> <span className={' ' + styles.pink}>interactive</span> and <span className={styles.blue}>compelling</span> <span className={styles.under}>websites!</span></h1>
          <br/>
          <h2 className={'dark:text-white ' }>I work with a strong focus on simplicity, accessibility <br/> and responsive design.</h2>
          <button className={'dark:border-white ' + styles.button}>
            <div className='dark:text-white flex'>
              learn more <div className='my-auto m-1 mr-0 ml-3 font-medium'><MdArrowDownward /></div>
            </div>
          </button>
        </div>
      </div>
    </Container>
    </span>
  )
}

export default Thesis;
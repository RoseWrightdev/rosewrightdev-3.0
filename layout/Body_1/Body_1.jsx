//next
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//Svgs
import NextSvg from './Svgs/NextSvg'
import TWSvg from './Svgs/TWSvg'

//images
import next from './images/next.png'
import tailwindcss from './images/tailwindcss.png'
import blueback from './images/blueback.png'

//hooks
import { useState } from 'react'

const Slide_1 = () => {
  return (
    <div className={'flex align-center justify-center mt-10 ' + styles.blueback} >
      <div className={' ' + styles.techimage}>
        <Image src={next} alt='test' layout="responsive"/>
      </div>
    </div>
  )
}



const Body_1 = () => {
  const [setSlide, isSetSlide] = useState(1)

  const nextSlide = () => {
    
  }

  return (
    <span>
      <div className={'bg-gray-800 dark:bg-black-500 ' + styles.container}>
        <div className={styles.flexbox}>
     
        </div>
      </div>
    </span>
  )
}

export default Body_1;
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

const Body_1 = () => {
  return (
    <span>
      <div className={'bg-white dark:bg-black-500 ' + styles.container}>
        <div className={styles.flexbox}>
          <div className={styles.svgcontainer}>
            <br/>
              <div className={'flex align-center justify-center mt-10 ' + styles.blueback} >
                <div className={' ' + styles.techimage}>
                  <Image src={next} alt='test' layout="responsive"/>
                </div>
              </div>
              <br/>
              <div className={' ' + styles.tech}>
                <div className={' ' + styles.techimage}>
                  <Image src={tailwindcss} alt='test' layout="responsive"/>
                </div>
              </div>
            <br/>
          </div>
        </div>
      </div>
    </span>
  )
}

export default Body_1;
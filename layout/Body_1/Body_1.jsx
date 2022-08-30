//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//Svgs
import NextSvg from './Svgs/NextSvg'
import TWSvg from './Svgs/TWSvg'
const Body_1 = () => {
  return (
    <span>
      <div className={'bg-white dark:bg-black-500 ' + styles.container}>
        <div className={styles.flexbox}>
          <div className={styles.svgcontainer}>
            <br/>
              <div className='flex align-center justify-center mt-10'>
                <div>
                  <NextSvg/>
                </div>
              </div>
            <br/>
            <TWSvg/>
          </div>
        </div>
      </div>
    </span>
  )
}

export default Body_1;
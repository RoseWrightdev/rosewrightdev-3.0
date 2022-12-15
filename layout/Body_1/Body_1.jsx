//next
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//Svgs
import NextSvg from './Svgs/NextSvg'
import TWSvg from './Svgs/TWSvg'

//images
import vis from './images/vis.gif'
import vis2 from './images/vis2.gif'

const Body_1 = () => {
   return (
    <span>
        <div className={'bg-white dark:bg-black-500 ' + styles.container}>
          <div className={styles.flexbox}>
            <div className={'p-8 hidden dark:block '  + styles.image}>
              <Image src={vis2} alt='A rotating representation of unlabled 3d data. The colors used for the data ranges from white at the bottom to red at the top.' className={' ' + styles.imageSrc}/>
            </div>
            <div className={'p-8 block dark:hidden '  + styles.image}>
              <Image src={vis} alt='A rotating representation of unlabled 3d data. The colors used for the data ranges from white at the bottom to red at the top.' className={' ' + styles.imageSrc}/>
            </div>
              <div className={' ' + styles.textcontainer}>
              <h1 className={'dark:text-white ' + styles.text}><span className={'whitespace-nowrap '}>Data Visualization</span> <br/> with <span className={' ' }>Javascript</span> and <span className={' '}>Python</span></h1>
              <br/>
              <h2 className={'dark:text-white ' }>Using platforms like Three.js and Matplotlip.</h2>
            </div>
          </div>
        </div>
    </span>
  )
}
export default Body_1;
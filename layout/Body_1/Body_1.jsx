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
import twlogo from './images/twlogo.png'
import spline from './images/spline.png'
import spline3 from './images/spline3.png'
import blueback from './images/blueback.png'

const nextImg = <Image src={next} alt='test' layout="responsive" />;
const twImg = <Image src={twlogo} alt='test' layout="responsive"/>;

const Slide = (props) => {
  return (
    <div className='py-5 mx-auto'>
      <div className={'flex align-center justify-center mx-auto rounded-[32px] ' + styles.frosted}>
        <div className={' ' + styles.techimage}>
          {props.pic}
        </div>
      </div>
    </div>
  )
}

const Card = (props) => {
  return (
    <li className="column__item">
      <div className="column__title--wrapper">
        <h2>Frontend</h2>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <ul className="card__list">
        <li className="card__item">
         <span className="card__tag card__tag--design">Design</span>
         <Image src={props.src} alt='test' layout="responsive"/> 
          <h6 className="card__title"></h6>
        </li>
      </ul>
      <div className="column__item--cta">
        <h4>learn more</h4>
      </div>
    </li>
  )
}

const Cards = (props) => {
  return (
    <section className="wrapper">
  <ul className="column__list">
    <li className="column__item">
      <div className="column__title--wrapper">
        <h2>Frontend</h2>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <ul className="card__list">
        <li className="card__item">
         <span className="card__tag card__tag--design">Design</span>
         <Image src={twlogo} alt='test' layout="responsive"/> 
          <h6 className="card__title"></h6>
        </li>
      </ul>
      <div className="column__item--cta">
        <h4>learn more</h4>
      </div>
    </li>
  </ul>
</section>
  )
}

const Body_1 = () => {
   return (
    <span>
      <div className={'h-auto bg-gray-800 ' }>
          <div className='flex justify-center'>
            <div className={'p-1 rounded-lg  m-5 font-semibold text-4xl ' }>
              <h1 className={'p-5 rounded-lg ' + styles.frosted}> <span className={styles.header}> Working in  enterprise techologies like...</span></h1>
            </div>
          </div>
        </div>
        <section className="wrapper">
          <ul className="column__list">
            <Card src={twlogo}/>
            <Card src={twlogo}/>
            <Card src={twlogo}/>
            <Card src={twlogo}/>
            <Card src={twlogo}/>
            <Card src={twlogo}/>
          </ul>
        </section>
    </span>
  )
}
export default Body_1;
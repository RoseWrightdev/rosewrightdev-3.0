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
import twlogo from './images/twlogo.png'
import figma from './images/figma.png'
import Swhite from './images/Swhite.png'
import pages from './images/pages.png'
import html from './images/html.png'
import gimp from './images/gimp.jpg'
import lw from './images/lw.jpg'

const Card = (props) => {
  return (
    <li className="column__item">
      <div className="column__title--wrapper">
        <h2>{props.title}</h2>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <ul className="card__list">
        <li className="card__item">
         <span className={"card__tag card__tag--" + props.color}>{props.tag}</span>
         <span className={"card__tag card__tag--" + props.color2}>{props.tag2}</span>
         <span className={"card__tag card__tag--" + props.color3}>{props.tag3}</span>

         <Image src={props.src} alt={props.alt} layout="responsive"/> 
          <h6 className="card__title"></h6>
        </li>
      </ul>
      <div className="column__item--cta">
        <h4>learn more</h4>
      </div>
    </li>
  )
}

const Body_1 = () => {
   return (
    <span>
      <div className={'h-auto bg-gray-800 ' }>
          <div className='flex justify-center'>
            <div className={'p-1 rounded-lg  m-5 font-semibold text-4xl ' }>
              <h1 className={'p-5 rounded-lg bg-white shadow-md '}> <span className={styles.header}> Working in  enterprise techologies like...</span></h1>
            </div>
          </div>
        </div>
        <section className="wrapper">
          <ul className="column__list">
            <Card src={twlogo} title='Tailwind' color='black' tag='test' color2='red' tag2='CSS'/>
            <Card src={next} title='Next.js' color='black' tag='React Framework' />
            <Card src={Swhite} title='Spline' color='green' tag='3d modeling' />
            <Card src={figma} title='Figma' color='black' tag='Ux-Ui Design' color2='yellow' tag2='SVG'/>
            <Card src={pages} title='Github Pages' color='red' tag='git'/>
            <Card src={html} title='JavaScript, HTML, CSS' color='black' tag='test'/>
            <Card src={gimp} title='Gimp' color='red' tag='test'/>
            <Card src={lw} title='LightWorks' color='red' tag='test'/>
          </ul>
        </section>
    </span>
  )
}
export default Body_1;
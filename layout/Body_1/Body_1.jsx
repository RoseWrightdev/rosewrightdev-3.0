//next
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//Svgs
import NextSvg from './Svgs/NextSvg'
import TWSvg from './Svgs/TWSvg'


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

/*

 <div className={'h-auto bg-gray-800 ' }>
          <div className='flex justify-center'>
            <div className={'p-1 rounded-lg  m-5 font-semibold text-4xl ' }>
              <h1 className={'p-5 rounded-lg bg-white shadow-md '}> <span className={styles.header}> Working in  enterprise techologies like...</span></h1>
            </div>
          </div>
        </div>
        <section className="wrapper">
          <ul className="column__list">
            <Card src={twlogo} title='Tailwind' color='black' tag='CSS framework'/>
            <Card src={next} title='Next.js' color='black' tag='React Framework' color2='black' tag2='JavaScript' color3='black' tag3='React'/>
            <Card src={Swhite} title='Spline' color='black' tag='3d modeling' />
            <Card src={figma} title='Figma' color='black' tag='Ui Design' color2='black' tag2='SVG'/>
            <Card src={pages} title='Github Pages' color='black' tag='Git'/>
            <Card src={html} title='JavaScript, HTML, CSS' color='black' tag='The Classics'/>
            <Card src={gimp} title='Gimp' color='black' tag='Photo Editing'/>
            <Card src={lw} title='LightWorks' color='black' tag='Video Editing'/>
          </ul>
        </section>

*/

const Body_1 = () => {
   return (
    <span>
     
    </span>
  )
}
export default Body_1;
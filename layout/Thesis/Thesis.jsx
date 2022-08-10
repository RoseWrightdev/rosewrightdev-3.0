//styles
import styles from "./styles.module.css"
import Image from 'next/image'

//conponents
import SplineModel from "../../conponents/SplineModel/SplineModel"

import Rose3d from "./Rose3d.png"

const Thesis = () => {
  return (
    <div className={'bg-gray dark:bg-black-off h-[100vh]'}>
      <div className="p-10">
        <Image src={Rose3d} alt='testresrs' width={600} height={500}/>
      </div>
    </div>
  )
}

export default Thesis;
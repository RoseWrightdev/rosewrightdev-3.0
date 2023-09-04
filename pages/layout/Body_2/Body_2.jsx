//next
import React, { useState } from 'react';
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//images

import figlight2 from './images/figlight2.png'
import figdark2 from './images/figdark2.png'
import rwcube from './images/rwcube.gif'

const Body_2 = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: '3d models',
            title: '3d Modeling with Spline',
            title2: '',
            content: '3D modeling with spline is a form of 3D modeling that uses splines to create a model. A spline is a curve in 3D space defined by at least two control points. The most common splines used in 3D art are bezier curves and NURBS. NURBS stands for Non-Uniform Rational Basis Spline. The spline bends a sheet of rubber that passes through the input points while minimizing the total curvature of the surface. 3D modeling with spline can be used to create smooth and organic shapes, such as cars, furniture, or characters. Spline models can also be easily modified by changing the position or number of control points. Spline modeling is often used in industrial design, animation, and web design',
            srcLight: rwcube,
            srcDark: rwcube,
            altText: 'A 3d model of a admin dashboad animating as it tracks a mouse cursor.',
        },
        {
            id: 2,
            tabTitle: 'Illustrations',
            title: 'Modern .SVG Illustrations',
            title2: 'with Figma',
            content: 'Modern SVG illustrations are a type of vector graphics that use the Scalable Vector Graphics (SVG) file format. SVG is a web-friendly format that stores images as vectors, which are made up of points, lines, curves, and shapes based on mathematical formulas. SVG images can be scaled up or down without losing quality, and can also be animated and interactive. SVG illustrations are often used for creating logos, icons, diagrams, charts, and other graphics that need to be crisp and responsive on different devices and screen sizes. SVG illustrations can be created and edited with vector graphics editors, such as Adobe Illustrator or Inkscape, or with code editors, such as Visual Studio Code or Sublime Text',
            srcLight: figdark2,
            srcDark: figlight2,
            altText: 'An modern abstract illustration which includes vasious colorful shapes all aligned on a grid.',
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <span>
            <div className={'bg-gray-800 dark:bg-black-600 ' + styles.container} id="design">
                <div className={'flex justify-between ' + styles.tabs}>
                    {tabs.map((tab, i) =>
                        <button className={'select-none bg-gray-700 dark:bg-black-700  dark:text-white text-black-900 hover:bg-white disabled:shadow-none disabled:bg-white dark:disabled:bg-black-800 dark:hover:bg-black-800 transition-all ' + styles.text2 + ' ' +  styles.tabButton} key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                    )}
                </div>
            </div>
            <div>
                {tabs.map((tab, i) =>
                    <div key={i} className='bg-gray-800 dark:bg-black-600'>
                        {currentTab === `${tab.id}` && <div><div className={'bg-white dark:bg-black-800 ' + styles.container}>
                        <div className={styles.flexbox}>
                            <div className={'p-8 hidden dark:block '  + styles.image}>
                            <Image src={tab.srcDark} alt={tab.altText} className={' ' + styles.imageSrc}/>
                            </div>
                                <div className={'p-8 block dark:hidden '  + styles.image}>
                                    <Image src={tab.srcLight} alt={tab.altText} className={' ' + styles.imageSrc}/>
                                </div>
                                <div className={' ' + styles.textcontainer}>
                                    <h1 className={'dark:text-white ' + styles.text}><span className={''}>{tab.title}</span> <br/> {tab.title2}</h1>
                                    <br/>
                                <h2 className={'dark:text-white indent-8 ' }>{tab.content}</h2>
                                </div>
                            </div>
                        </div>
                    </div>}
                    </div>
                )}
            </div>
            
        </span>
    );
}

export default Body_2;

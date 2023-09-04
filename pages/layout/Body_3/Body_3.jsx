//next
import React, { useState } from 'react';
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//images
import r from './images/r.gif'
import MultiSim from './images/MultiSim.png'

const Body_3 = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Physics',
            title: 'Three.js Physics Animations',
            title2: '',
            content: 'Three.js physics animations are a way of creating realistic and interactive 3D graphics on the web using the Three.js library and a physics engine. A physics engine is a software that simulates the behavior of physical objects and forces, such as gravity, collisions, friction, and elasticity. A physics animation is a sequence of frames where the positions and rotations of the objects are calculated by the physics engine based on their initial conditions and interactions. Three.js is a JavaScript library that allows us to create and render 3D scenes using WebGL, a web standard for 3D graphics. By combining Three.js and a physics engine, we can create 3D experiences that are fun and satisfying to watch and play with. Some examples of physics engines that can be used with Three.js are Ammo.js, Cannon.js, Oimo.js, and Physijs. ',
            srcLight: r,
            srcDark: r,
            altText: 'Six cubes float to the ground moon light gravity then suddenly bounce in all directions.',
        },    
        {
            id: 2,
            tabTitle: 'Circut Deisgn',
            title: 'NI Multisim',
            title2: '',
            content: 'Circuit design NI Multisim is a process of creating and testing electronic circuits using the NI Multisim software. NI Multisim is an electronic schematic capture and simulation program that is part of a suite of circuit design programs, along with NI Ultiboard. NI Multisim allows engineers, students, and professors to simulate electronic circuits and prototype printed circuit boards (PCBs) using a graphical user interface and a large database of components',
            srcLight: MultiSim,
            srcDark: MultiSim,
            altText: 'An abstract colorful image of a circut deisgn.',
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <span>
            <div className='bg-gray-800 dark:bg-black-600' id='electronics'>
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
                                    <h1 className={'dark:text-white ' + styles.text}>{tab.title} {tab.title2}</h1>
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

export default Body_3;
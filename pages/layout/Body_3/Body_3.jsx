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
            title: 'Three.js physics Animations',
            title2: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Sit amet volutpat consequat mauris nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Elit pellentesque habitant morbi tristique senectus et. Quam viverra orci sagittis eu volutpat odio facilisis mauris.',
            srcLight: r,
            srcDark: r,
            altText: 'Six cubes float to the ground moon light gravity then suddenly bounce in all directions.',
        },    
        {
            id: 2,
            tabTitle: 'Circut Deisgn',
            title: 'NI Multisim',
            title2: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Sit amet volutpat consequat mauris nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Elit pellentesque habitant morbi tristique senectus et. Quam viverra orci sagittis eu volutpat odio facilisis mauris.',
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
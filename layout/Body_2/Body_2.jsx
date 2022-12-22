//next
import React, { useState } from 'react';
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//images
import vis from './images/vis.gif'
import vis3 from './images/vis3.gif'
import figlight from './images/figlight.png'
import figdark from './images/figdark.png'

const Body_2 = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Figma',
            title: 'Modern Vector Illustrations',
            title2: 'with Figma',
            content: '1',
            srcLight: figdark,
            srcDark: figlight,
            altText: 'A rotating representation of unlabled 3d data. The colors used for the data ranges from white at the bottom to red at the top.',
        },
        {
            id: 2,
            tabTitle: 'Spline',
            title: '',
            title2: '',
            content: '2',
            srcLight: '',
            srcDark: '',
            altText: 'A rotating representation of unlabled 3d data. The colors used for the data ranges from white at the bottom to red at the top.',
        },

    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <span>
            <div className={'bg-gray-800 dark:bg-black-600 ' + styles.container}>
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
                                <h2 className={'dark:text-white ' }>{tab.content}</h2>
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

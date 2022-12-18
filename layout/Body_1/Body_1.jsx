import React, { useState } from 'react';

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

    const PythonAlt = ''
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'MatPlotLib',
            title: 'Data Visualization',
            title2: 'with Python',
            content: '1',
            srcLight: vis,
            srcDark: vis2,
            altText: 'A rotating representation of unlabled 3d data. The colors used for the data ranges from white at the bottom to red at the top.',
        },
        {
            id: 2,
            tabTitle: 'Three.js',
            title: 'Data Visualization',
            title2: '2',
            content: '2'
        },
        {
          id: 3,
          tabTitle: 'Tab 3',
          title: 'Data Visualization',
          title2: '3',
          content: '3'
      }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <span>
            <div className={'flex justify-between	' + styles.tabs}>
                {tabs.map((tab, i) =>
                    <button className={'bg-white dark:bg-black-800 dark:hover:text-white dark:text-white text-black-900 hover:bg-gray-800 dark:hover:bg-black-600 disabled:hover:border-l-black-500 ' + styles.tabButton} key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><div className={'bg-white dark:bg-black-500 ' + styles.container}>
                        <div className={styles.flexbox}>
                          <div className={'p-8 hidden dark:block '  + styles.image}>
                            <Image src={tab.srcDark} alt={tab.altText} className={' ' + styles.imageSrc}/>
                          </div>
                              <div className={'p-8 block dark:hidden '  + styles.image}>
                                <Image src={tab.srcLight} alt={tab.altText} className={' ' + styles.imageSrc}/>
                              </div>
                                <div className={' ' + styles.textcontainer}>
                                <h1 className={'dark:text-white ' + styles.text}><span className={'whitespace-nowrap '}>{tab.title}</span> <br/> {tab.title2}</h1>
                                <br/>
                                <h2 className={'dark:text-white ' }>{tab.content}</h2>
                              </div>
                            </div>
                          </div></div>}
                    </div>
                )}
            </div>
        </span>
    );
}

export default Body_1;

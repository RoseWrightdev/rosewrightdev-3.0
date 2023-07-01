//next
import React, { useState } from 'react';
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//images
import more from './images/more.png'

const Conclusion = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Contact',
            title: '',
            title2: 'talk to me',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Sit amet volutpat consequat mauris nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Elit pellentesque habitant morbi tristique senectus et. Quam viverra orci sagittis eu volutpat odio facilisis mauris.',
        },
        {
            id: 2,
            tabTitle: 'About',
            title: 'Data Visualization',
            title2: 'with Matplotlib.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Sit amet volutpat consequat mauris nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Elit pellentesque habitant morbi tristique senectus et. Quam viverra orci sagittis eu volutpat odio facilisis mauris.',
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <span >
            <div className='bg-gray-800 dark:bg-black-600' id='contact'>
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
                            </div>
                                <div className={'p-8 block dark:hidden '  + styles.image}>
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

export default Conclusion;
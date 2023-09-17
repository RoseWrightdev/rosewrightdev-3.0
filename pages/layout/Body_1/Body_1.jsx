//next
import React, { useState } from 'react';
import Image from 'next/image'

//styles
import styles from './styles.module.css'
import global from '../global.module.css'

//images
import vis from './images/vis.gif'
import vis3 from './images/vis3.gif'
import finalDark from './images/finalDark.gif'
import finalLight from './images/finalLight.gif'


const Body_1 = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Programming',
            title: 'Websites using',
            title2: 'React, Next.js and their hooks.',
            content: 'Whether it be Typescript, Java, or C++, I\'m always tinkering with something new, and I don\'t plan on stopping anytime soon. I\'ve made a lot over the years: physics simulations, 3d models, animations, logos, gifs, wireframes, scalable vector graphics, countless "RoseWright.dev" websites, an online flag maker, and more. ',
            srcLight: finalLight,
            srcDark: finalDark,
            altText: 'A cube sitting on top of dark rectangle. The cube has 3 sides showing the logos and colors of React, Nextjs and Javascript.',
        },
        {
            id: 2,
            tabTitle: 'Statistics',
            title: 'Data Visualization',
            title2: 'with Matplotlib.',
            content: 'Statistics is the science of collecting, analyzing, presenting, and interpreting data. Data can be either quantitative or qualitative, depending on whether they measure or describe something. Statistics can be used for various purposes, such as making better-informed decisions, testing hypotheses, and communicating uncertainty. Statistics has two major branches: descriptive and inferential. Descriptive statistics summarize and display data using measures of central tendency, variability, and graphical tools. Inferential statistics draw conclusions about a population based on a sample of data using methods such as hypothesis testing, confidence intervals, and regression analysis. Statistics is an important field of study that has applications in many disciplines, such as economics, biology, psychology, and engineering.',
            srcLight: vis,
            srcDark: vis3,
            altText: 'A rotating representation of unlabled 3d data. The colors used for the data ranges from white at the bottom to red at the top.',
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <span>
            <div className='bg-gray-800 dark:bg-black-600' id='programming'>
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

export default Body_1;

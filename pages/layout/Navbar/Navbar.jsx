//Styles
import styles from "./styles.module.css"

//Icons
import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import {IoMenuOutline} from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

//Hooks
import Link from "next/link";
import { useEffect, useState } from 'react';

//Darkmode hook. If something breaks it was most likely this. Pay close attention!
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme');
  const isEnabled = typeof enabledState === 'undefined' && enabled;
  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

//RoseWright.dev Logo
const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.rosewrightdevIcon}>
        <svg width="24" height="24" viewBox="0 0 10 10" fill="none">
          <path d="M4.35207 1.58464C4.58926 1.00454 5.41074 1.00454 5.64793 1.58464L6.61785 3.95678C6.64181 4.01538 6.67362 4.07046 6.71239 4.12051L8.28175 6.14656C8.66554 6.64202 8.2548 7.35344 7.63382 7.2688L5.09453 6.92271C5.0318 6.91416 4.9682 6.91416 4.90547 6.92271L2.36618 7.2688C1.7452 7.35344 1.33446 6.64202 1.71825 6.14656L3.28761 4.12051C3.32638 4.07046 3.35819 4.01538 3.38215 3.95678L4.35207 1.58464Z" fill="#FF6884"/>
          <rect x="4" y="4" width="2" height="2" rx="1" fill="white"/>
        </svg>
      </div>
        <h1 className='font-semibold tracking-tight my-1 text-lg text-black dark:text-white'>RoseWright.dev</h1>
    </div>
  )
}

//Mobile logo
const LogoSmall = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.rosewrightdevIcon}>
        <svg width="24" height="24" viewBox="0 0 10 10" fill="none">
          <path d="M4.35207 1.58464C4.58926 1.00454 5.41074 1.00454 5.64793 1.58464L6.61785 3.95678C6.64181 4.01538 6.67362 4.07046 6.71239 4.12051L8.28175 6.14656C8.66554 6.64202 8.2548 7.35344 7.63382 7.2688L5.09453 6.92271C5.0318 6.91416 4.9682 6.91416 4.90547 6.92271L2.36618 7.2688C1.7452 7.35344 1.33446 6.64202 1.71825 6.14656L3.28761 4.12051C3.32638 4.07046 3.35819 4.01538 3.38215 3.95678L4.35207 1.58464Z" fill="#FF6884"/>
          <rect x="4" y="4" width="2" height="2" rx="1" fill="white"/>
        </svg>
      </div>
      <h1 className='font-semibold tracking-tight my-1 text-base text-black dark:text-white'>RoseWright.dev</h1>
    </div>
  )
}

//Narbar text Items
const NarbarItem = ({text = 'TEXT PROP NOT FOUND'}) => {
  return (
    <div className='my-auto m-[16px] text-sm font-light text-black dark:text-white'>
    <Link  href={"#" + text}>
      {text}
    </Link>
    </div>
  )
}

//Theme Icon switch
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <div className="bg-red-light h-auto w-auto rounded-full hover:rounded-sm p-[7px] mr-8 cursor-pointer transition-all ease-in-out border-[1px] border-red ">
          <FaSun size='24' className='text-red' />
        </div>
      ) : (
        <div className="bg-blue-light h-auto w-auto rounded-full hover:rounded-sm p-[7px] mr-8 cursor-pointer transition-all ease-in-out border-[1px] border-blue ">
          <FaMoon size='24' className='text-blue' />
        </div>
      )}
    </span>
  );
};

//menu


//menu
const MenuBackground = (props) => {
  return (
    <div className={styles.mobile} >
      <div className='h-[100vh] w-[50vw] z-50 fixed bg-black-700' onClick={props.onClick} >
    </div>
  </div>
  )
}

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function menuHandler() {
    setMenuIsOpen(true);
  }

  function closeMenuHandler() {
    setMenuIsOpen(false);
  }

  const Menu = (props) => {
    return (
    <div className={styles.mobile}>
      <div className='h-[100vh] w-[100vw] z-50 fixed'>
        <div className='absolute left-[49vw] w-[51vw] h-[100vh] bg-white dark:bg-black-900 ' >
          <div className="flex flex-col">
            {/*<div className="p-3">
              <div className="p-3">
                <svg width="30" height="30" viewBox="0 0 10 10" fill="none"><path d="M4.35207 1.58464C4.58926 1.00454 5.41074 1.00454 5.64793 1.58464L6.61785 3.95678C6.64181 4.01538 6.67362 4.07046 6.71239 4.12051L8.28175 6.14656C8.66554 6.64202 8.2548 7.35344 7.63382 7.2688L5.09453 6.92271C5.0318 6.91416 4.9682 6.91416 4.90547 6.92271L2.36618 7.2688C1.7452 7.35344 1.33446 6.64202 1.71825 6.14656L3.28761 4.12051C3.32638 4.07046 3.35819 4.01538 3.38215 3.95678L4.35207 1.58464Z" fill="#FF6884"/><rect x="4" y="4" width="2" height="2" rx="1" fill="white"/></svg>
              </div>
            </div>*/}
            <div className="p-3 ">
              {menuIsOpen && <div onClick={closeMenuHandler}>
                <Link href="#programming" >
                  <div className="p-3 ">
                    <h1 className='text-black-900 dark:text-white'>programming</h1>
                  </div>
                </Link>
              </div>}
              {menuIsOpen && <div onClick={closeMenuHandler}>
                <Link href="#design" >
                  <div className="p-3 ">
                    <h1 className='text-black-900 dark:text-white'>design</h1>
                  </div>
                </Link>
              </div>}
              {menuIsOpen && <div onClick={closeMenuHandler}>
                <Link href="#electronics" >
                  <div className="p-3 ">
                    <h1 className='text-black-900 dark:text-white'>electronics</h1>
                  </div>
                </Link>
              </div>}
              {menuIsOpen && <div onClick={closeMenuHandler}>
                <Link href="#contact" >
                  <div className="p-3 ">
                    <h1 className='text-black-900 dark:text-white'>contact</h1>
                  </div>
                </Link>
              </div>}
              <div className="p-3 flex">
                <ThemeIcon/>
              </div>
              <div className="p-3 cursor-pointer text-black-900 dark:text-white " onClick={props.onClick}>
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
  <span>
    {/*Desktop*/}
    <div className={styles.desktop}>
      <nav className='py-2 flex flex-row justify-between bg-white dark:bg-black-900'>
        <div className="flex">
          <Logo />
            <div className={styles.narbaritems}>
              <NarbarItem text="programming"/>
              <NarbarItem text="design"/>
              <NarbarItem text="electronics"/>
            </div>
        </div>
        <div className="flex">
          <div className="my-auto mr-4">
          <NarbarItem text="contact"/>
          </div>
          <ThemeIcon />
        </div>
      </nav>
      <hr className={styles.linebreak} />
    </div>

  {/*Mobile Menu*/}
    {menuIsOpen && <Menu onClick={closeMenuHandler} />}
    {menuIsOpen && <MenuBackground onClick={closeMenuHandler}/>}
    <div className={styles.mobile}>
      <nav className='py-2 flex flex-row justify-between bg-white dark:bg-black-900'>
        <div className="flex mx-auto">
          <LogoSmall />
        </div>
        <div className="flex">
          <button className="bg-red-light h-auto w-auto rounded-full hover:rounded-xl p-[7px] mr-4 cursor-pointer transition-all  ease-in-out" onClick={menuHandler}>
            <IoMenuOutline size='24' className='text-black dark:text-white' />
          </button>
        </div>
      </nav>
    <hr className={styles.linebreak} />
    </div>
  </span>
  )
}

export default Navbar;
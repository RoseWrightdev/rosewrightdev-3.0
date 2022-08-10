import styles from "./styles.module.css"
import { IoMdRose } from "react-icons/io";
import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

//RoseWright.dev Logo
const Logo = () => {
  return (
    <div className={styles.logo}>
      <IoMdRose className={styles.rosewrightdevIcon} size={24}/>
      <h1 className='font-semibold tracking-tight my-1 text-lg text-black dark:text-white'>RoseWright.dev</h1>
    </div>
  )
}

//Narbar text Items
const NarbarItem = ({text = 'TEXT PROP NOT FOUND'}) => {
  return (
    <div className='my-auto m-[14px] text-sm font-light text-black dark:text-white'>
      {text}
    </div>
  )
}

//Left Group
const GroupOne = ({children}) => {
  return (
  <div className="flex">{children}</div>
  )
}

//Right Group
const GroupTwo = ({children}) => {
  return (
  <div className="flex">{children}</div>
  )
}

//Theme Icon switch
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <div className="bg-red-light h-auto w-auto rounded-full hover:rounded-xl p-[7px] mr-8 cursor-pointer transition-all  ease-in-out border-[1px] border-red shadow-lg">
          <FaSun size='24' className='text-red'  />
        </div>
      ) : (
        <div className="bg-blue-light h-auto w-auto rounded-xl hover:rounded-full p-[7px] mr-8 cursor-pointer transition-all  ease-in-out border-[1px] border-blue shadow-lg">
          <FaMoon size='24' className='text-blue'  />
        </div>
      )}
    </span>
  );
};

const Navbar = () => {
  return (
    <span>
      <nav className='py-2 flex flex-row justify-between bg-white dark:bg-black-900'>
        <GroupOne>
          <Logo />
            <div className={styles.narbaritems}>
              <NarbarItem text="services"/>
              <NarbarItem text="expertise"/>
              <NarbarItem text="blog"/>
              <NarbarItem text="about"/>
            </div>
        </GroupOne>
        <GroupTwo>
          <div className="my-auto mr-4">
          <NarbarItem text="contact"/>
          </div>
          <ThemeIcon />
        </GroupTwo>
      </nav>
      <hr className={styles.linebreak} />
    </span>
  )
}

export default Navbar;
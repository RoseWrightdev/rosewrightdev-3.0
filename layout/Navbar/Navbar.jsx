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
      <h1 className='font-semibold tracking-tight my-1 text-lg text-black-mid dark:text-red'>RoseWright.dev</h1>
    </div>
  )
}

//Narbar text Items
const NarbarItem = ({text = 'TEXT PROP NOT FOUND'}) => {

  return (
    <div className={styles.narbaritem}>
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
        <FaSun size='24'  className={styles.rosewrightdevIcon}  />
      ) : (
        <FaMoon size='24'  className={styles.rosewrightdevIcon}  />
      )}
    </span>
  );
};

const Navbar = () => {
  return (
    <span>
      <nav className={styles.navbar}>
        <GroupOne>
          <Logo />
            <div className={styles.narbaritems}>
              <NarbarItem text="services"/>
              <NarbarItem text="expertise"/>
              <NarbarItem text="blog"/>
              <NarbarItem text="contact"/>
              <NarbarItem text="about"/>
            </div>
        </GroupOne>
        <GroupTwo>
          <ThemeIcon />
        </GroupTwo>
      </nav>
      <hr className={styles.linebreak} />
    </span>
  )
}

export default Navbar;
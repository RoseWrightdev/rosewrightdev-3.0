import styles from "./styles.module.css"
import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import {useDarkMode} from '../../hooks/useDarkMode';

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
          <FaSun size='24' className='text-red' />
        </div>
      ) : (
        <div className="bg-blue-light h-auto w-auto rounded-xl hover:rounded-full p-[7px] mr-8 cursor-pointer transition-all  ease-in-out border-[1px] border-blue shadow-lg">
          <FaMoon size='24' className='text-blue' />
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
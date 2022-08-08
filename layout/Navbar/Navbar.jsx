import styles from "./styles.module.css"
import { IoMdRose } from "react-icons/io";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <IoMdRose className={styles.rosewrightdevIcon} size={24}/>
      <h1 className={styles.rosewrightdev}>RoseWright.dev</h1>
    </div>
  )
}

const NarbarItem = ({text = 'TEXT PROP NOT FOUND'}) => {

  return (
    <div className={styles.narbaritem}>
      {text}
    </div>
  )
}

const GroupOne = ({children}) => {
  return (
  <div className="flex">{children}</div>
  )
}

const GroupTwo = ({children}) => {
  return (
  <div className="flex">{children}</div>
  )
}

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
          test
        </GroupTwo>
      </nav>
      <hr className={styles.linebreak} />
    </span>
  )
}

export default Navbar;
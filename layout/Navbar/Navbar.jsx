import styles from "./styles.module.css"
import { IoMdRose } from "react-icons/io";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <IoMdRose className={styles.rosewrightdevIcon} size={16}/>
      <h1 className={styles.rosewrightdev}>RoseWright.dev</h1>
    </div>
  )
}

const Navbar = () => {
  return (
    <span>
      <nav className={styles.navbar}>
        <Logo />
      </nav>
      <hr className={styles.linebreak} />
    </span>
  )
}

export default Navbar;
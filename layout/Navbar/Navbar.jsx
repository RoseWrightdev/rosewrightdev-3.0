import styles from "./styles.module.css"
import { IoMdRose } from "react-icons/io";

const Navbar = () => {
  return (
    <span>
      <nav className={styles.navbar}>
        <IoMdRose className={styles.rosewrightdevIcon} size={16}/>
        <h1 className={styles.rosewrightdev}>RoseWright.dev</h1>
      </nav>
      <hr />
    </span>
  )
}

export default Navbar;
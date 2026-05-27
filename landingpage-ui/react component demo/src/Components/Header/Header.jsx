import Logo from "./Atoms/Logo/Logo.jsx";
import Centernav from "./Atoms/Centernav/Centernav.jsx";
import Button from "./Atoms/Buttons/Button.jsx";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <Logo/>
      <Centernav/>
      <Button/>
    </nav>
  )
}
export default Header
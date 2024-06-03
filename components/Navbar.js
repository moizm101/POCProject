import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/things">Things to Read</a></li>
        <li><a href="/about">About Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
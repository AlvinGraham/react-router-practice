import { Link } from "react-router-dom";
import "./Header.css";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="App-header">
      <h1 className="App-title">GitHub Student List</h1>

      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/allStudents">All Students</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

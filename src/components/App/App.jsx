import axios from "axios";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";
import About from "../About/About.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br />
        <nav>
          <ul>
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
        <Route
          path="/"
          exact>
          <StudentForm />
        </Route>
        <Route path="/allStudents">
          <p>Student list:</p>
          <StudentList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;

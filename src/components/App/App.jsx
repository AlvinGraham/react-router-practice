import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";
import About from "../About/About.jsx";
import Header from "../Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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

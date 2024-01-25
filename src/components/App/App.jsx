import axios from "axios";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br />
        <Route
          path="/"
          exact>
          <StudentForm />
        </Route>
        <Route path="/allStudents">
          <p>Student list:</p>
          <StudentList />
        </Route>
      </Router>
    </div>
  );
}

export default App;

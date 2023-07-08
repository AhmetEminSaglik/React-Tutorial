//import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/Navbar";
import User from "./component/User";
function App() {
  return (
    <div className="container">
      <Navbar title="This is the title. It will taken as {props.title} in Navbar.js" />
      <hr />
      <User
        name="Ahmet Emin SAGLIK"
        salary="4500$"
        departmant="Java Developer"
      />

      <User name="Omer AKKOCA" salary="5000$" departmant="Frontend Developer" />
      <h4 className="header"> App Component</h4>
      <h4 style={{ color: "red", fontSize: "30px" }}> App Component</h4>
    </div>
  );
}

export default App;

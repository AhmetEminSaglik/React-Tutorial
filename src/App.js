//import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/Navbar";
import User from "./component/User";
function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      {/*   <Navbar title="This is the title. It will taken as {props.title} in Navbar.js" />
      <hr />
       <Navbar title="if not send `title` to navbar then error will be seen in browser console." />
      <hr />
      <Navbar  />
      <hr />
      <Navbar  title ="if defaultProps is defined, then error wont be occrued if not sent any title like upper navbar"/>
      <hr /> */}
      <User
        name="Ahmet Emin SAGLIK"
        departmant="Java Developer"
        salary="4500$"
      />
      <User name="AES " />
      <User name="Omer AKKOCA" salary="5000$" departmant="Frontend Developer" />
      {/* <h4 className="header"> App Component</h4>
      <h4 style={{ color: "red", fontSize: "30px" }}> App Component</h4> */}
    </div>
  );
}

export default App;

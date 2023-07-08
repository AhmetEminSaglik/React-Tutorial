//import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div className="container">
      <Navbar/>
      <h4 className="header"> App Component</h4>
      <h4 style={{ color: "red", fontSize: "30px" }}> App Component</h4>
    </div>
  );
}

export default App;

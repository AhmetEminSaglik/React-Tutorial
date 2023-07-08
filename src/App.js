//import logo from './logo.svg';
import "./App.css";
import User from "./component/User.js";

function App() {
  const test = 34;
  return (
    <div className="App">
      <h3>App Component</h3>
      <User />
      <User />
      <User />

      <h1>===========================================</h1>
      <h1>Hello React</h1>
      <h1>1+1 </h1>
      <h1>{1 + 1}</h1>

      <h1 className="test">Hello Reac2t - className</h1>
      <h1 htmlFor="test">Hello Reac2t - htmlFor</h1>
      <h1>Hello React</h1>
      <h2>{"Ahmet Emin".toUpperCase()}</h2>
      <h4>{test}</h4>
    </div>
  );
}

export default App;

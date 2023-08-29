import logo from './logo.svg';
import './App.css';
import Login from "./Components/login"
import { Footer } from './Components/Footer';
import { Nav2 } from './Components/Nav2';
function App() {
  return (
    <div className="App">
      <Nav2/>
    <Login/>
    <Footer/>
    </div>
  );
}

export default App;

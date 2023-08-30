import logo from './logo.svg';
import './App.css';
import Login from "./Components/login"
import { Footer } from './Components/Footer';
import { Nav2 } from './Components/Nav2';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import AllRoutes from "./Allroute/Routes"

function App() {
  return (
    <div className="App">
      {/* <Nav2/>
    <Login/> */}
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;

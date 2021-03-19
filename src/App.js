
import './App.css';
import bg from './Components/images/Bg.png'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <LogIn></LogIn>
      <img src={bg} alt=""/>
      
     
    </div>
  );
}

export default App;

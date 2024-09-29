import logo from './logo.svg';
import './App.css';
import Item from './views/Item';
import Meunu from './views/Menu';
import Hello from './views/Hello';
import Car from './views/Car';
import Login from './views/Login';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Item/>
      <Meunu/>
      <Hello/>
      <Car/>
      <Login/>
      </header>


    </div>
  );
}

export default App;

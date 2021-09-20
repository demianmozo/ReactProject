import logo from './logo.svg';
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';
import Producto from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Producto />
    </div>
  );
}

export default App;

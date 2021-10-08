import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
  
    <>
        <NavBar logo="Vivero Los Tilos"/>
        <ItemListContainer greeting={"Hola mundo"}/>
    </>


  );
}

export default App;

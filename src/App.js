import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import logo from './components/NavBar/logo.jpg';


function App() {

  return (
  
    <>
        <NavBar logo="Vivero Los Tilos - Salliqueló"/>
        <ItemListContainer greeting={"Bienvenidos"}/>
    </>


  );
}

export default App;

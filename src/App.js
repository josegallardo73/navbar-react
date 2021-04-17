import './App.css';
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/container/ItemListContainer'
function App() {
  const categorias = ["Novedades", "Mas vendidos", "Bajan de precio", "Próximos lanzamientos"]
  return (
    <div className="App">
      <header className="App-header">
          <Navbar categorias={categorias}/>
          <ItemListContainer catalogo = "Catálogo de Videojuegos"/>
      </header>
    </div>
  );
}

export default App;

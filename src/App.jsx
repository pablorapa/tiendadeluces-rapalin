import './App.css';
import ItemListContainer from './components/itemlist/ItemListContainer';
import NavBar from './components/navbar/NavBar';

function App() {
  const user = {
    name: 'Maria'
  };
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={user}/>
    </div>
  );
}

export default App;

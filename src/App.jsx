import './App.css';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import ItemListContainer from './components/item/ItemListContainer';
import NavBar from './components/navbar/NavBar';

function App() {
  const user = {
    name: 'Maria'
  };
  return (
    <div className="bg-red-50 min-h-screen">
      <NavBar/>
      <ItemListContainer greeting={user}/>
      <ItemDetailContainer id={1} />
    </div>
  );
}

export default App;

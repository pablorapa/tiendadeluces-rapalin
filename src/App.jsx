import './App.css';
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
    </div>
  );
}

export default App;

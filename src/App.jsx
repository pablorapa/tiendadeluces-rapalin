import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

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

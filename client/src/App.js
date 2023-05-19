import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import UserAdd from './components/UserAdd';

function App() {

  
  
  return (
    <div className="App" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <UserAdd/>
      <UserList/>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './Components/UserCard'

function App() {
  const [Users, setUsers] = useState(null);
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch((err)=> console.error(err))
  }, [])

  return (
    <div className="App" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {Users && Users.map((el)=> <UserList {...el} key={el.id} />)}
      
    </div>
  );
}










export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UsersTable from './components/UsersTable';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shownUsers, setShownUsers] = useState([]);
  const fetchData = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const resp = await data.json();
    setUsers(resp);
    setShownUsers(resp);
    setLoading(false);
    console.log(resp);
  };

  const filterData = (value,key) =>{

    console.log(typeof(users[0].name));

    const filteredUsers = () =>{
      if(key==='ID'){
        return users.filter((user)=>user.id.toString().toLowerCase().indexOf(value.toLowerCase()) > -1);
      }
      if(key==='Name'){
        return users.filter((user)=>user.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      }
      if(key==='Username'){
        return users.filter((user)=>user.username.toLowerCase().indexOf(value.toLowerCase()) > -1);
      }
      if(key==='eMail'){
        return users.filter((user)=>user.email.toLowerCase().indexOf(value.toLowerCase()) > -1);
      }
    };

    console.log(filteredUsers);
    setShownUsers(filteredUsers);
    if(value===''){
      setShownUsers(users);
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App">

    {loading? 'Loading...':<UsersTable users={shownUsers} filter={filterData}/>}

    </div>
  );
}

export default App;

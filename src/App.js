
import React,{useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserForm from './components/AddUserForm';
import UsersList from './components/UsersList';
import EditUserForm from './components/EditUserForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([{"userId":"11282","name":"YOGESH","userCode":"yogi"},{"userId":"1122","name":"ravi","userCode":"rav122"},{"userId":"11283","name":"ganesh","userCode":"gh"}]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if(searchTerm !== ""){
      const newUsersList = users.filter(user =>{
        return Object.values(user).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newUsersList)
    }else{
      setSearchResults(users)
    }
}
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={<UsersList users={searchTerm.length < 3 ? users: searchResults}
        setUsers={setUsers} 
        term={searchTerm} 
        searchKeyword={searchHandler} 
        setSearchTerm={setSearchTerm}/>} />
        <Route path="addUser" 
        element={<AddUserForm users={users} setUsers={setUsers}/>}
        />
        <Route path="editUser" 
        element={<EditUserForm users={users} setUsers={setUsers}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;

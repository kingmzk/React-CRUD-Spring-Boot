
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EmployeeManagement from './components/EmployeeManagement';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';
//Routes wrapping which to display and which not
//URL BASED ROUTING IF /add in url display this component we use Route

function App() {
  return (
    <BrowserRouter >
       <NavBar/>
       <Routes>
        
        <Route path='/' element={<EmployeeManagement/>}  />
        <Route path='/all' element={<AllUser/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>} />

       
       </Routes>
    </BrowserRouter>
  );
}

export default App;

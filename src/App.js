import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '6aea350df2d6.dbc1c1f2c52426402b94'

function App() {

   const [characters, setCharacters]= useState([])

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const Email = 'ejemplo@gmail.com';
   const Password = 'password1';

const login = (userData) => {
   if (userData.password === Password && userData.email === Email) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);

   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then(( data ) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id) =>{
   setCharacters(characters.filter((character) => character.id !== id));
}


let location = useLocation()
console.log(location)

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}
      <Routes>
      <Route path='/' element={<Form login ={login}/>}/>
      <Route path= '/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='/Abaut' element = {<About/>}/>
      <Route path='/Detail/:id' element= {<Detail/>}/>
      <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>

      </div>
   );
}

export default App;

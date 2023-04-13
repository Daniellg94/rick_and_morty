import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav ({onSearch,setAccess}) {
   let handleLogOut = () => {
      setAccess(false)
   }


    return (
        <nav className={styles.Navcontainer}>
           <button onClick={handleLogOut}>LOG OUT</button>
           <button><NavLink to = '/abaut'>Abaut</NavLink></button>
           <button><NavLink to = '/home'>Home</NavLink></button>
           <button><NavLink to='/Favorites'> Favorites </NavLink></button>
           <SearchBar onSearch={onSearch} className={styles.NavcontainerSearchBar}/>
        </nav>
     );
}


import { useState } from "react";
import styles from "./Search.module.css"

export default function SearchBar({onSearch}) {
const [id,setId]=useState('')
const handleChange=(evento)=>{
   setId(evento.target.value)
}
let random = () => (Math.floor(Math.random()*(826 - 1)+1))
   let [repetido,setrepetido]= useState ([])
   let repetir = () => {
      let id = random()
      while(repetido.includes(id)){
         id =random()
      }
      setrepetido(
         [...repetido,
         id]
      )
      return onSearch(id)
   }
   return (
      <div className={styles.barrabusqueda}>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={()=>{onSearch(id);setId('')}}>Agregar</button>
         <button onClick={repetir}>Random</button>
      </div>
   );
}

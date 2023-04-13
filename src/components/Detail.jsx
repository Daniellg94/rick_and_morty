import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css"


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '6aea350df2d6.dbc1c1f2c52426402b94'

const Detail =(()=> {

    let {id} = useParams()
    let [character,setCharacter] = useState({})
 
    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
    <div className={styles.container}>
      <div className={styles.detailcontainer}>
      <h1>{character?.name}</h1>
      <h3>{character?.status}</h3>
      <h3>{character?.species}</h3>
      <h3>{character?.gender}</h3>
      <h3>{character?.oringe?.name}</h3>
      </div>
      
      <div class={styles.imagecontainer}>
      <img src={character?.image} alt={character?.name} />
      </div>
        
        
    </div>)
})

export default Detail

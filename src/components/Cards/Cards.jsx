import styles from "./Cards.module.css"
import Card from "../Card/Card";

export default function Cards({characters, onClose}) {

   const personajes = characters.map(({id, name, status, species, gender, origin, image})=>
   <Card 
   key = {id}
   id = {id}
   name={name}
   gender={gender}
   status={status}
   species={species}
   origin={origin.name}
   image={image}
   onClose= {onClose}
    />)

   return <div className={styles.container}>{personajes}</div>;
}

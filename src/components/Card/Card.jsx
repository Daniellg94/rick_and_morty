import { Link } from "react-router-dom";
import styles from './Card.module.css'
import { addFav, removeFav } from "../../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({id,name,species,gender,image,onClose,removeFav,addFav,myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, image, onClose,gender,species})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      
      <div className={styles.cardContainer}>
      
      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
   
         <button onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />
         
         <div className={styles.info}>
            <h4>Specie: {species}</h4>
            <h4>Gener: {gender}</h4>
         </div>
            
            <Link to={`/detail/${id}`} className={styles.cardlink} >
            <h3 className="card-name">{name}</h3>
            </Link>
            
            
         
         
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
import { connect,useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards,orderCards } from "../../Redux/action";
import { useState } from "react";
import styles from './Favorites.module.css'

const Favorites = ({ myFavorites }) => {

    const dispatch = useDispatch();
    const [aux, setAux] =useState (false)

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return (
        <div >
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacter">allCharacter</option>
            </select>
            <div className={styles.container}>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            image={fav.image}
                            onClose={fav.onClose}
                            gender={fav.gender}
                        />

                    )
                })
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);
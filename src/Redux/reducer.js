import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./action-types"


const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer =(state =initialState,{type,payload})=>{
    switch(type){
        case ADD_FAV: {
            return{...state,
                myFavorites: [...state.allCharacters,payload],
                allCharacters:[...state.allCharacters,payload] }
                }
        case REMOVE_FAV: {
            return{...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)}
        }
        case FILTER:
      const filteredCharactersFav = state.allCharacters?.filter(
        character => payload !== 'allCharacter' ? character.gender === payload : true);
      return {
        ...state,
        myFavorites: filteredCharactersFav
      }
        
      case ORDER:
        const sortCharactersFav = [...state.myFavorites]
          .sort((a, b) => {
            switch (payload.toUpperCase()) {
              case 'A': return a.id - b.id;
              case 'D': return b.id - a.id;
              default: return 0;
            }
          })
        return {
          ...state,
          myFavorites: sortCharactersFav
        }
        default: return{...state}
    }
}

export default reducer
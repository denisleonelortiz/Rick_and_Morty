
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "./action"

const initialState = {
    myFavorites: [ ],
    allCharacters: [ ]
}

export default function rootReducer (state = initialState, action) {

    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            const rest = state.myFavorites.filter ((ch) => (ch.id !== Number(action.payload)) )
            return {
                ...state,
                myFavorites: rest
            }

        case FILTER: 
            const filtered = action.payload === "allCharacters" ? 
            state.allCharacters:
            state.allCharacters.filter( (ch) => ch.gender === action.payload)    
            return {
                ...state,
                myFavorites: filtered
            }

        case ORDER:
            let arrayOrdered = []
            action.payload === "A" ? 
                arrayOrdered = state.allCharacters.sort((a, b) => a.id - b.id) :
                arrayOrdered = state.allCharacters.sort((a, b) => b.id - a.id)
            return {
                ...state,
                myFavorites: arrayOrdered
            }
        
        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return state
    }
}
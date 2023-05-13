
import { ADD_FAV, REMOVE_FAV } from "./action"

const initialState = {
    myFavorites: []
}

export default function rootReducer (state = initialState, action) {

    switch (action.type) {
        case ADD_FAV:
            let copy1 = state.myFavorites
            copy1.push(action.payload)
            return {
                ...state,
                myFavorites: copy1,
            }


        case REMOVE_FAV:
            const filtered = state.myFavorites.filter ((ch) => (ch.id !== Number(action.payload)) )
            return {
                ...state,
                myFavorites: filtered
            }

        default:
            return state
    }
}
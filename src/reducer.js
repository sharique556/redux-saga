import { GET_USERS_SUCCESS } from "./actions";

const initialState = { users: [] }

// Reducer function for only success case for example
const myFirstReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.users }
        default:
            return state
    }
}
export default myFirstReducer
// Defining actionTypes

export const GET_USERS_FETCH = 'GET_USERS_FETCH'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

// Defining actionCreators
export const getUsersFetch = () => ({
    type : GET_USERS_FETCH
})
const defaultState = {
    id: 0,
    name: '',
    imgURL: '',
    email: '',
    isLogged: false
};

const user = (state = {}, action) =>
{
    switch (action.type){
        case 'LOGIN':
        {
            // Reducer as a pure function returns a new Object
            return Object.assign({}, state, {
                id: action.user.id,
                name: action.user.name,
                imgURL: action.user.imgURL,
                email: action.user.email,
                isLogged: action.user.isLogged})
        }
        case 'LOGOUT':
            return defaultState;
        default:
            return state;
    }
};

export default user;

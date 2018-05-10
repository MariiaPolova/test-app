import {connect} from 'react-redux';

import {setLoginData} from "../../../Redux/Actions/userActions";

import GoogleButton from './GoogleButton';

const mapStateToProps = state =>({
    user: {
    id: state.id,
    name: state.name,
    imgURL: state.imgURL,
    email: state.email,
    isLogged: state.isLogged
    }
});

const mapDispatchToProps = (dispatch) => ({
    setLoginData: (value) => {return dispatch(setLoginData(value))}
});

const LoginContainer =  connect(mapStateToProps, mapDispatchToProps)(GoogleButton);

export default LoginContainer;
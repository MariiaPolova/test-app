import {connect} from 'react-redux';

import {EraseData} from "../../../Redux/Actions/userActions";

import LogoutIcon from './LogoutIcon';

const mapStateToProps = state =>({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    EraseData: () => {return dispatch(EraseData())}
});

const LogoutContainer =  connect(mapStateToProps, mapDispatchToProps)(LogoutIcon);

export default LogoutContainer;
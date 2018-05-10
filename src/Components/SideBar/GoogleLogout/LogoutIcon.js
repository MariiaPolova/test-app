import React from 'react';
import '../../SideBar/SideBar.css';

const LogoutIcon = ({EraseData, handleLogout}) => {

    function ClearState (EraseData, handleLogout) {
        console.log('log out in ClearState');
         EraseData();
         handleLogout();
    }

    return(
        <a onClick={()=>ClearState(EraseData, handleLogout)}>
            <i className="fas fa-sign-out-alt"/>
        </a>

    )
};

export default LogoutIcon;
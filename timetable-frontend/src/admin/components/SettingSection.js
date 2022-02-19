import React from 'react'
import {useHistory} from 'react-router-dom'

function SettingSection() {
    const history = useHistory();
    function logout() {
    localStorage.clear();
    history.push("/");
    }
    return (
        <>
        <div className="col-md-12 ">
                        <div className="page_title ">
                        <button onClick={logout} className="logout">
                            LOGOUT
                        </button>
                        </div>
                    </div>
        </>
    )
}

export default SettingSection;
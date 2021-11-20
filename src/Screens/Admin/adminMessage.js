import React, { useState } from 'react';

import { firebase } from '../../Backend/firebase';
import MsgCont from '../../Components/msgCont';

const AdminMessage = () => {

    const [user, setUser] = useState(false);

    firebase.auth().onAuthStateChanged( user => {
        if(user) setUser(true)
    } );

    return (
        <div>
            { user ? 
                <div>
                    Admin Header

                    <MsgCont />
                </div>
            : null }
        </div>
    )
}

export default AdminMessage;
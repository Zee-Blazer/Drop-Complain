// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

//Components
import TypeMsg from '../../Components/typeMsg';
import MsgCont from '../../Components/msgCont';

const UserMessage = () => {

    const matric_num = useSelector(state => state);

    return (
        <div>
            { matric_num ?
                <div>
                    
                    <TypeMsg />

                    <MsgCont />

                </div>
            :
                <Link to="/user/login" >Properly login</Link>
            }
        </div>
    )
}

export default UserMessage;
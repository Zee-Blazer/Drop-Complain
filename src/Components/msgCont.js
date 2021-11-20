import React, { useState, useEffect } from 'react';

import { DB } from "../Backend/firebase";

const MsgCont = () => {

    const [msgList, setMsgList] = useState([]);

    useEffect( () => {
        
        const user = [];

        DB.ref("Message").once("value")
        .then( snapshot => {
            snapshot.forEach( childSnapshot => {
                user.push({
                    id: childSnapshot.key, msg: childSnapshot.val()
                })
            } )

            setMsgList(user)
        } )
        
    }, [] );

    return (
        <div>
            { msgList ?
                <div>
                    Message Content
                    {
                        msgList.map( item => {
                            console.log(msgList);
                            // console.log(item)
                            return (
                            <div key={item.id}>
                                {item.msg.URL ?
                                    <img src={item.msg.URL} alt="image not found" style={{width: '67px'}} />
                                    :
                                    null
                                }
                                <p>{item.msg.title} - {item.msg.Matric}</p>
                            </div>
                        ) })
                    }
                </div>
                :
                <p>Loading...</p>
            }
        </div>
    )
}

export default MsgCont;
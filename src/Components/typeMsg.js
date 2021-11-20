import React, { useState } from 'react';

import { DB, storage } from '../Backend/firebase';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const TypeMsg = () => {

    const [img, setImg] = useState(null);
    const [URL, setURL] = useState();
    const [msg, setMsg] = useState('');
    const [res, setRes] = useState();
    const [outcome, setOutcome] = useState(false);

    const matric_num = useSelector(state => state);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImg(e.target.files[0]);
            setOutcome(true);
        }
    }

    const sendMsg = (e) => {
        e.preventDefault();

        
        
        if(outcome){

            const uploadTask = storage.ref(`/images/${img.name}`).put(img);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error=> {
                    console.log(error);
                },
                () => {
                    storage.ref("images").child(img.name)
                    .getDownloadURL().then( url => setURL(url) )
                }
            )

            if(URL){
                DB.ref("Message").push({title: msg, URL, Matric: matric_num }); //Matric: matric_num
                setRes("Done")
                setOutcome(false);
            }
        }
        else{
            DB.ref("Message").push({title: msg, Matric: matric_num }); //Matric: matric_num
        }

        
        setImg(null);
        setMsg("");

    }

    return (
        <div>

            <form onSubmit={ sendMsg }>

                <input 
                    type="text" 
                    placeholder="Type a Message" 
                    value={msg}
                    onChange={ e => setMsg(e.target.value) }
                />
                <input id="f02" type='file' placeholder="Image" onChange={handleChange} />
                <label for="f02">Add Image</label>
                
                <FontAwesomeIcon onClick={ sendMsg } icon={faPaperPlane} />

            </form>

            { res }

        </div>
    )
}

export default TypeMsg;
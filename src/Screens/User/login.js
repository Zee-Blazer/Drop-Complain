import React, { useState } from "react";

import { matricAct } from '../../Redux_comp/matricAction';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router";

const LoginUser = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [matric, setMatric] = useState("");

    const submitMatric = (e) => {
        e.preventDefault();
        dispatch( matricAct('login', matric) );
        navigate('/user/msg')
    }


    return (
        <div>
            <form>
                <h2>User Login</h2>

                <div>
                    <div>
                        <label>Enter Matric</label>
                        <input 
                            type="text" 
                            placeholder="BHU/17/03/03/0030" 
                            value={matric}
                            onChange={ e => setMatric(e.target.value) }
                        />
                    </div>

                    <button onClick={ submitMatric } >Enter</button>
                </div>
            </form>

        </div>
    )
}

export default LoginUser;
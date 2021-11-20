import React, { useState } from 'react';

import { firebase } from '../../Backend/firebase';

import { useNavigate } from "react-router";

const AdminLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginAdmin = (e) => {
        e.preventDefault()
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then( () => {
            navigate('/admin/msg');
        } )
    }

    return (
        <div>
            
            <form>
                <h2>Admin Login</h2>

                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={ e => setEmail(e.target.value) } />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={ e => setPassword(e.target.value) } />
                </div>

                <button onClick={ loginAdmin }>Login</button>
            </form>
             
        </div>
    )
}

export default AdminLogin
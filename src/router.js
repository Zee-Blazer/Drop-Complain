import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import AdminLogin from './Screens/Admin/adminLogin';
import AdminMessage from './Screens/Admin/adminMessage';

import LoginUser from './Screens/User/login';
import UserMessage from './Screens/User/message';

// const map 

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Navigate replace to="/user/login" /> } />

                {/* User Navigation */}
                <Route path="/user/login" element={ <LoginUser /> } />
                <Route path="/user/msg" element={ <UserMessage /> } />

                {/* Admin Navigation */}
                <Route path="/admin/login" element={ <AdminLogin /> } />
                <Route path="/admin/msg" element={ <AdminMessage /> } />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
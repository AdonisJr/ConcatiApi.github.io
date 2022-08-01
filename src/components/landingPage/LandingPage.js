import React from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='container-fluid text-center d-flex flex-column'>
        <div className="nav d-flex justify-content-center gap-3 my-3">
                <Link to={'/Login'} className='btn btn-primary'>Login</Link>
                <Link to={'/Register'} className='btn btn-success'>Register</Link>
        </div>
        WELCOME TO TEAM 4 APP
    </div>
  )
}

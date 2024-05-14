import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/register' element={<RegistrationForm />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
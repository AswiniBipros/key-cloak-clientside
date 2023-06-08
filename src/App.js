import logo from './logo.svg';
import './App.css';
import MyProfile from './components/MyProfile';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import keycloak from './config/keycloak';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (authenticated) {
        console.log('User is authenticated');
        console.log('Token:', keycloak.token);
        // You can now access the token via keycloak.token
      } else {
        console.log('User is not authenticated');
      }
    }).catch((error) => {
      console.error('Keycloak initialization error:', error);
    });
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

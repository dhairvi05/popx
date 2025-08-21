import React from 'react'
import { HashRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import Home from './components/Home/Home'
import CreateAccount from './components/CreateAccount/Create'
import Login from './components/Login/Login'

function App() {
  return (
    <>
     <div className='phone-container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
     </div>
    </>
  );
}

export default App;



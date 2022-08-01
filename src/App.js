import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"

import LandingPage from './components/landingPage/LandingPage';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import Admin from './components/admin/Admin';
import CreateProduct from './components/inventory/CreateProduct';
import CreateCategory from './components/inventory/CreateCategory';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Inventory/CreateProduct' element={<CreateProduct />} />
          <Route path='/Inventory/CreateCategory' element={<CreateCategory />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

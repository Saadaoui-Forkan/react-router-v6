import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/StyledNavbar';
import ProtectedRoute from './pages/ProtectedRoute';
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login setUser={ setUser }/>}/>
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute user={ user }>
              <Dashboard user={ user }/>
            </ProtectedRoute>
          }
        />
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

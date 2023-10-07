import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { useState } from "react";


function App() {
  
  const user=useSelector(state=>state.user.currentUser)
  
  
  return (
  
     <div className="App">
      <Router>
        <Routes>
          
          <Route path='/'exact element={<Home />}></Route>
          <Route path='/products/:category' element={<ProductList />}></Route>
          <Route path='/product/:122' element={<Product></Product>}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={user ? <Navigate to='/' /> : (<Login />)}></Route>
          <Route path='/register' element={user ? <Navigate to='/' /> : (<Register />)}></Route>
          <Route path='/success' element={<Success /> }></Route>
          

        </Routes>
      </Router>
      
    </div>
  
   
  );
}

export default App;

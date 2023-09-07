import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Pages/Home';
import AllListUsers from './Pages/Users/AllList';
import AllListProducts from './Pages/Products/AllList';

import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('https://randomuser.me/api/?results=10');
      const data = await res.json();

      setUsers(data.results);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=10');
      const data = await res.json();

      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="usuarios"
            element={<AllListUsers AllUsers={users} />}
          ></Route>
          <Route
            path="products"
            element={<AllListProducts AllProducts={products} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

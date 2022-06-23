import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewProduct from './features/Books/ViewProduct';
import AddProduct from './features/Books/AddProduct';
import EditProduct from './features/Books/EditProduct';
import PageNotFound from './pages/PageNotFound';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/showProduct' element={<ViewProduct />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct' element={<EditProduct />}></Route>

        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

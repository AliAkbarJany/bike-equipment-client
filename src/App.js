import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Home/Purchase';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';

import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import Customers from './Pages/Dashboard/Customers';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAproduct from './Pages/Dashboard/AddAproduct/AddAproduct';
import Payment from './Pages/Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>

          </RequireAuth>
        }>
        </Route>

        {/* dashboard */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='customers' element={<Customers></Customers>}></Route>
          <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addAProduct' element={<AddAproduct></AddAproduct>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>


      </Routes>
      {/* <Footer></Footer> */}
      <ToastContainer />
    </div>
  );
}

export default App;

// import { Button } from 'react-bootstrap';
import './App.css';
import Header from './Navbar';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/AddProduct">
          <AddProduct />
        </Route>

        <Route path="/UpdateProduct">
          <UpdateProduct />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/Register">
          <Register />
        </Route>

      </BrowserRouter>


    </div>
  );
}

export default App;

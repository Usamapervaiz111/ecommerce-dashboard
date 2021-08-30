// import { Button } from 'react-bootstrap';
import './App.css';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/AddProduct">
         <Protected cmp={AddProduct} />
        </Route>

        <Route path="/UpdateProduct">
          <Protected cmp={UpdateProduct}/>
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

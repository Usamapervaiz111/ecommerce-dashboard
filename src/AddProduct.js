import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from './Navbar';
function AddProduct() {
    
    const redirect=useHistory();

    useEffect(()=>{
        if(localStorage.getItem('')){
            redirect.push('/Register')
        }
    })
    return (
        <div className="App">
            <Header/>
            <h1>Add Product Page</h1>
        </div>
    )
}

export default AddProduct;
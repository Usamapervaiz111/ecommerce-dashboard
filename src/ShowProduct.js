import Header from './Navbar';
import { useState,useEffect } from 'react';
import {Container, Table} from 'react-bootstrap';
function UpdateProduct() {


    const [product,setProduct]=useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        let result=await fetch("/api/showproduct");
           const res =await result.json();
            setProduct(res)
      
    },[])
    console.log(product)
    return (
        <div className="App">
            <Header/>
            <Container>
            <h2 style={{ marginTop: 50, marginBottom:30, }} className="text-center">Show Products</h2>

            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>Product Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Image</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          product.map((item,index)=>
            <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>Thornton</td>
          </tr>
          
          )
      }
 
  </tbody>
</Table>
</Container>
        </div>
    )
}

export default UpdateProduct;
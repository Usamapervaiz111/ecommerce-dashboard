import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import {Button,Form,Container,Row,Col} from 'react-bootstrap';
import Header from './Navbar';
function AddProduct() {
    
    const redirect=useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('User-details:')){
            redirect.push('/Register')
        }
    })
    
    const [product,setProduct]=useState({
        name:'',
        description:'',
        price:'',
    });

    const [productImg,setProductImg]=useState([]);

    const [errorName,setNameError]=useState({ nameError:'false' });
    const [errorDescription,setDescriptionError]=useState({ descriptionError:'false' });
    const [errorPrice,setPriceError]=useState({ priceError:'false' });
    const [errorImage,setImageError]=useState({ imageError:'false' });

    const inputValue=(e)=>{
      e.persist();
      setProduct({ ...product,[e.target.name]:e.target.value})

      if(product.name !== ''){
        setNameError({nameError:'false'})
       }

       if(product.description !== ''){
        setDescriptionError({descriptionError:'false'})
       }

       if(product.price !== ''){
        setPriceError({priceError:'false'})
        }

        setImageError({imageError:'false'})    
    
    }

    const inputImage=(e)=>{
        setProductImg({image:e.target.files[0]})
    }

    const addProduct=(e)=>{
     e.preventDefault();
if(product.name === '' || product.description === '' || product.price === '' || productImg.image === ''){

    if(product.name === ''){
        setNameError({nameError:'true'})
       }

       if(product.description === ''){
        setDescriptionError({descriptionError:'true'})
       }

       if(product.price === ''){
        setPriceError({priceError:'true'})
        }

        if(productImg.image === ''){
            setImageError({imageError:'true'})
        }

}else{

    const {name,description,price}=product;

    const formData=new FormData();
    formData.append('name',name);
    formData.append('description',description);
    formData.append('price',price);
    formData.append('image',productImg.image);

    // console.log(data)

    axios.post('/api/product',formData)
    .then(response =>{
    console.log(response.data)
    }).catch(error=>{
        console.log('Product Added Failed')
    })

}


    }

    return (
        <div className="App">
            <Header/>
            <Container>
            <h1 style={{ marginTop: 50,  }} className="text-center">Add Product Your Self</h1>
            <Form style={{ paddingBottom: 40, }} onSubmit={addProduct}>
            <Row>
                <Col>
                <Form.Group className="mb-3" >
                        <Form.Label className="text-right">Product Name</Form.Label>
                        <Form.Control  type="text" onChange={inputValue} style={errorName.nameError === 'true' ? styles.inputErrorShow : null}  name="name" value={product.name} placeholder="Enter Product Name" />
                    </Form.Group>
                    {errorName.nameError === 'true' ? <p style={styles.textErrorShow}>Product Name is Required</p> :null}
                    
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control
                        as="textarea"
                        name="description" 
                        placeholder="Enter Product Description"
                        onChange={inputValue} value={product.description} 
                        style={errorDescription.descriptionError === 'true' ? styles.inputErrorShow : null }
                        />
                    </Form.Group>
                    {errorDescription.descriptionError === 'true' ? <p style={styles.textErrorShow}>Product Description is Required</p> :null}
                
                    <Form.Group className="mb-3" >
                        <Form.Label className="text-right">Product Price</Form.Label>
                        <Form.Control  type="number" name="price" style={errorPrice.priceError === 'true' ? styles.inputErrorShow : null}  onChange={inputValue} value={product.price}  placeholder="Enter Product Price" />
                    </Form.Group>
                    {errorPrice.priceError === 'true' ? <p style={styles.textErrorShow}>Product Price is Required</p> :null}

                </Col>
                <Col>
            
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control onChange={inputImage} name="image"  style={errorImage.imageError === 'true' ? styles.inputErrorShow : null}   type="file" />
                    </Form.Group>
                    {errorImage.imageError === 'true' ? <p style={styles.textErrorShow}>Product Image is Required</p> :null}



                    <Button variant="primary" type="submit" >
                        Add Product
                    </Button>
                </Col>
            </Row>
            </Form>
           
            </Container>
        </div>
    )
}

const styles = ({

    inputErrorShow: {
        border: '2px solid red',
    },
    textErrorShow: {
        color: 'red',
        marginBottom: 10,
        marginTop: -15,
    }
});

export default AddProduct;
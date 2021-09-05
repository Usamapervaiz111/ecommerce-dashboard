import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'
import { Form, Button, Container } from 'react-bootstrap';
import Header from './Navbar';
function Login() {

    const redirect=useHistory();

useEffect(()=>{
    if(localStorage.getItem('User-details:')){
        redirect.push('/AddProduct')
    }
},)
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const [errorEmail, setEmailError] = useState({
        inputEmailError: 'false',
        inputEmailInvalid: 'false',
    });
    const [errorPassword, setPasswordError] = useState({
        inputPassword: 'false',
        inputPasswordInvalid: 'false',
    });





    const inputValue = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value })
        setEmailError({ inputEmailError: 'false' })
        setPasswordError({ inputPasswordError: 'false' })
    }

    const registerButton =(e) => {
        e.preventDefault();

        if(login.email === '' || login.password === ''){

            if (login.email !== '') {

            } else {
                setEmailError({ inputEmailError: 'true' })
            }
    
            if (login.password !== '') {
    
            } else {
                setPasswordError({ inputPasswordError: 'true' })
            }

        }else{
            const data={
                email:login.email,
                password:login.password,
            }
            
    
                axios.post("api/login/",data)
                .then(response => {
                 localStorage.setItem('User-details:',JSON.stringify(response.data));
                 console.log(response.data)
                 redirect.push("/AddProduct");
               }).catch(error=>{
                console.log(error)
                setEmailError({ inputEmailInvalid: 'true' })
                setPasswordError({ inputPasswordInvalid: 'true' })
               })
        }

      

    
        

    }




    return (


        <div div className="App" >
            <Header/>
            <Container>
                <h1 style={{ marginTop: 100, }} className="text-center">Login Your Self</h1>
                <Form style={{ paddingLeft: 250, paddingRight: 250, marginTop: 20, }} onSubmit={registerButton}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-right">Email address</Form.Label>
                        <Form.Control style={errorEmail.inputEmailError === 'true' ? styles.inputErrorShow : null} name="email" value={login.email} onChange={inputValue} type="email" placeholder="Enter email" />
                    </Form.Group>
                    {errorEmail.inputEmailError === 'true' ? <p style={styles.textErrorShow}>Enter Your Email Field</p> : null}
                    {errorEmail.inputEmailInvalid === 'true' ? <p style={styles.textErrorInvalid}>Invalid Email</p> : null}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={errorPassword.inputPasswordError === 'true' ? styles.inputErrorShow : null} name="password" value={login.password} onChange={inputValue} type="password" placeholder="Password" />
                    </Form.Group>
                    {errorPassword.inputPasswordError === 'true' ? <p style={styles.textErrorShow}>Enter Your Password Field</p> : null}
                    {errorPassword.inputPasswordInvalid === 'true' ? <p style={styles.textErrorInvalid}>Invalid Password</p> : null}

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>
            </Container>

        </div >
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
    },
    textErrorInvalid: {
        color: 'red',
        marginBottom: 10,
        marginTop: -15,
    }
});
export default Login;
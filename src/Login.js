import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router';
import { Form, Button, Container } from 'react-bootstrap';
import Header from './Navbar';
function Login() {

    const redirect=useHistory();

useEffect(()=>{
    if(localStorage.getItem('User-details:')){
        redirect.push('/Register')
    }
},)
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const [errorEmail, setEmailError] = useState({
        inputEmailError: 'false',
    });
    const [errorPassword, setPasswordError] = useState({
        inputPasswordError: 'false',
    });



    const inputValue = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value })
        setEmailError({ inputEmailError: 'false' })
        setPasswordError({ inputPasswordError: 'false' })
    }

    const registerButton =async (e) => {
        e.preventDefault();


        if (login.email !== '') {

        } else {
            setEmailError({ inputEmailError: 'true' })
        }

        if (login.password !== '') {

        } else {
            setPasswordError({ inputPasswordError: 'true' })
        }

        const data={
            email:login.email,
            password:login.password,
        }
        const loginRes=await fetch("api/Login",{
            method:'POST',
            headers:{
                'Accept':'json/application',
                'Content-Type':'json/application',
            },
            body:JSON.stringify(data)
        });
        const res=await loginRes.json();
        console.log(res);

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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={errorPassword.inputPasswordError === 'true' ? styles.inputErrorShow : null} name="password" value={login.password} onChange={inputValue} type="password" placeholder="Password" />
                    </Form.Group>
                    {errorPassword.inputPasswordError === 'true' ? <p style={styles.textErrorShow}>Enter Your Password Field</p> : null}

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
    }
});
export default Login;
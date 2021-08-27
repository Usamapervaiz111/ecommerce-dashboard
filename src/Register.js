import { Form, Button, Container } from 'react-bootstrap';
import React, { useState, } from 'react';
function Register() {

    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errorUsername, setUsernameError] = useState({
        inputUsernameError: 'false',
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
        setRegister({ ...register, [name]: value })
        setUsernameError({ inputUsernameError: 'false' })
        setEmailError({ inputEmailError: 'false' })
        setPasswordError({ inputPasswordError: 'false' })
    }

    const registerButton = (e) => {
        e.preventDefault();


        if (register.email !== '') {
            setEmailError({ inputEmailError: 'false' })
        } else {
            setEmailError({ inputEmailError: 'true' })
        }

        if (register.username !== '') {

        } else {
            setUsernameError({ inputUsernameError: 'true' })
        }
        if (register.password !== '') {

        } else {
            setPasswordError({ inputPasswordError: 'true' })
        }
    }




    return (


        <div div className="App" >
            <Container>
                <h1 style={{ marginTop: 100, }} className="text-center">Register Your Self</h1>
                <Form style={{ paddingLeft: 250, paddingRight: 250, marginTop: 20, }} onSubmit={registerButton}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-right">Username</Form.Label>
                        <Form.Control style={errorUsername.inputUsernameError === 'true' ? styles.inputErrorShow : null} name="username" value={register.username} onChange={inputValue} type="text" placeholder="Enter Username" />
                    </Form.Group>
                    {errorUsername.inputUsernameError === 'true' ? <p style={styles.textErrorShow}>Enter Your Username Field</p> : null}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-right">Email address</Form.Label>
                        <Form.Control style={errorEmail.inputEmailError === 'true' ? styles.inputErrorShow : null} name="email" value={register.email} onChange={inputValue} type="email" placeholder="Enter email" />
                    </Form.Group>
                    {errorEmail.inputEmailError === 'true' ? <p style={styles.textErrorShow}>Enter Your Email Field</p> : null}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={errorPassword.inputPasswordError === 'true' ? styles.inputErrorShow : null} name="password" value={register.password} onChange={inputValue} type="password" placeholder="Password" />
                    </Form.Group>
                    {errorPassword.inputPasswordError === 'true' ? <p style={styles.textErrorShow}>Enter Your Password Field</p> : null}

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <Button variant="primary" type="submit" >
                        Register
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

export default Register;
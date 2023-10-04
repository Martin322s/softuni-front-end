import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormExample() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const submitForm = (e) => {
        e.preventDefault();

        console.log(formValues);
    };

    return (
        <Form onSubmit={(e) => submitForm(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email"
                    name="email"
                    placeholder="Enter email" 
                    value={formValues.email} 
                    onChange={(e) => changeHandler(e)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={(e) => changeHandler(e)} 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default FormExample;
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'typeface-notable';
import './UserForm.css';
import buttonStyles from '../components/Button.module.css';

const defaultValues = {
    firstName: 'First Name:',
    lastName: 'Last Name:',
    email: 'Email:',
    tel: 'Tel:',
    address: 'Address:',
    postCode: 'Post Code:',
    city: 'City:'
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    postCode: Yup.string().matches(/^[0-9]+$/, 'Postcode must contain only numbers').required('Postcode is required'),
    city: Yup.string().required('City is required')
});

const UserForm = () => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : {};
    });
    const [ordered, setOrdered] = useState(false);
    let content;

    const submitHandler = async (values, { setSubmitting }) => {
        try {
            const cartItems = Object.entries(cart).map(([id, quantity]) => ({
                id,
                quantity,
            }));

            const orderData = {
                order: {
                    customer: {
                        name: `${values.firstName} ${values.lastName}`,
                        email: values.email,
                        street: values.address,
                        'postal-code': values.postCode,
                        city: values.city,
                    },
                    items: cartItems,
                },
            };
    
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
    
            if (response.ok) {
                console.log('Order created successfully');
            } else {
                console.error('Failed to create order:', response.statusText);
                content = <p>Failed to create order</p>
            }
        } catch (error) {
            console.error('Error during order creation:', error.message);
            content = <p>Error during order creation</p>
        } finally {
            setSubmitting(false);
            setOrdered(true);
            setCart(prevCart => {
                localStorage.setItem("cart", JSON.stringify({}));
                return {};
            });
        }
    };   
    
    if(ordered) {
        content = <p>Your order was succesfully made!</p>
    } else {
        content = <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        >
            <Form className='form'>
                <div className='fieldDiv'>
                    <div className='field'>
                        <Field type='text' id='firstName' name='firstName' />
                        <ErrorMessage name='firstName' component='div' />
                    </div>

                    <div className='field'>
                        <Field type='text' id='lastName' name='lastName' />
                        <ErrorMessage name='lastName' component='div' />
                    </div>
                </div>

                <div className='fieldDiv'>
                    <div className='field'>
                        <Field type='email' id='email' name='email' />
                        <ErrorMessage name='email' component='div' />
                    </div>

                    <div className='field'>
                        <Field type="tel" id="tel" name="tel" />
                        <ErrorMessage name="tel" component="div" />
                    </div>
                </div>
                
                <div className='fieldDiv'>
                    <div className='field'>
                        <Field type='text' id='address' name='address' />
                        <ErrorMessage name='address' component='div' />
                    </div>

                    <div className='field'>
                        <Field type='text' id='postCode' name='postCode' />
                        <ErrorMessage name='postCode' component='div' />
                    </div>
                </div>

                <div className='cityDiv'>
                    <Field type='text' id='city' name='city' />
                    <ErrorMessage name='city' component='div' />
                </div>

                <div className='buttonDiv'>
                    <button type='submit' className={buttonStyles.button} style={{ fontFamily: 'Notable, sans-serif' }}>Order</button>
                </div>
            </Form>
        </Formik>
    }

    return(
        <>
            {content}
        </>
    );
}

export default UserForm; 
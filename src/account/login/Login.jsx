import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';
import LogIn from './LogIn.css'
function Login({ history, location }) {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    function onSubmit({ email, password }, { setSubmitting }) {
        console.log("On submit button")
        console.log(history)
        console.log(location)
        alertService.clear();
        accountService.login(email, password)
            .then(() => {
                const { from } = location.state || { from: { pathname: "/" } };
                history.push(from);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (


                <div className='main'>

                    <div className="signIn">
                        <div className=" logoSignIn">
                            <Link to = '/' className = 'logo'>
                                <span className="logo">everyThing</span>
                            </Link>
                        </div>
                        <Form className='signInForm'>
                            <h3 className="signInTitle">Login</h3>
                            <div className="card-body">
                                <div className="txtField">
                                    <label>Email</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="txtField">
                                    <label>Password</label>
                                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <button type="submit" disabled={isSubmitting} className="">
                                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Login
                                        </button>
                                        <div className="signupLink">
                                            <Link to="register" className="btn btn-link">Register</Link>
                                        </div>

                                    </div>
                                    <div className="form-group col text-right">
                                        <Link to="forgot-password" className="pass">Forgot Password?</Link>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export { Login }; 
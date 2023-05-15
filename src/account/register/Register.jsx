import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RegisterStyles from './RegisterStyles.css'
import { accountService, alertService } from '@/_services';

function Register({ history }) {
    const initialValues = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.register(fields)
            .then(() => {
                alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
                history.push('login');
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
                    <div className="register">
                        <h3 className="registerTitle">Register</h3>
                            <Form>
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="titleSelector">
                                            <label>Title</label>
                                            <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                                <option value=""></option>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Miss">Miss</option>
                                                <option value="Ms">Ms</option>
                                            </Field>
                                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="txtField">
                                            <Field placeholder='First Name'name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="txtField">
                                            <Field name="lastName" placeholder='Last Name'type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="txtField">
                                        <Field name="email" placeholder='Email'type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-row">
                                        <div className="txtField">
                                            <Field name="password" placeholder='Password'type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="txtField">
                                            <Field name="confirmPassword" placeholder='Confirm Password'type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-group form-check">
                                        <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                        <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                                        <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                    </div>
                                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Register
                                        </button>
                                        <div className="btnCancel">
                                            <Link to="login" className="btnCancel">Cancel</Link>
                                        </div>


                                </div>
                            </Form>
                    </div>
                    </div>
            )}
        </Formik>
    )
}

export { Register }; 
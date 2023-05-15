import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { accountService, alertService } from '@/_services';

function ForgotPassword() {
    const initialValues = {
        email: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required')
    });

    function onSubmit({ email }, { setSubmitting }) {
        alertService.clear();
        accountService.forgotPassword(email)
            .then(() => alertService.success('Please check your email for password reset instructions'))
            .catch(error => alertService.error(error))
            .finally(() => setSubmitting(false));
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (

                <div className='main'>
                    <div className="signIn">
                        <Form className='signInForm'>
                                <h3 className="signInTitle">Forgot Password</h3>

                                    <div className="txtField">
                                        <label>Email</label>
                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="btnSubmit">
                                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        Submit
                                    </button>
                                        <div className='btnCancel'>
                                            <Link to="login" className="">Cancel</Link>
                                 </div>
                        </Form>
                    </div>
                    </div>
            )}
        </Formik>        
    )
}

export { ForgotPassword }; 
import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

import './App.css';

function App() {
  const initialValues = {
    firstName: '',
    lastName: '', 
    emailAddress: '',
  }
  const validationSchema  = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    emailAddress: Yup.string().email('Email is invalid').required('Email is required'),

  })

  return (
    <div className="App">
      <h1> Formik with Yup validation </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log('values:', values)}
        >
          {({errors, touched}) => (
            <Form>

              <Field name='firstName'/>
              {touched.firstName && errors.firstName ? <div> {errors.firstName} </div> : null}
              <Field name='lastName'/>
              {touched.lastName && errors.lastName ? <div> {errors.lastName} </div> : null}
              <Field name='emailAddress'/>
              {touched.emailAddress && errors.emailAddress ? <div> {errors.emailAddress} </div> : null}
              <button type='submit'>  Submit </button>
            </Form>
          )}
        </Formik>

      
    </div>
  );
}

export default App;

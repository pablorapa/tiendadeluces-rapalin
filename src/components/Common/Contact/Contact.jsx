import React, { useState } from 'react';
import { Formik } from 'formik';
import SuccessfulPage from '../successfulPage/SuccessfulPage';
import { validateForm } from '../validations';
import "./Contact.css";

const Contact = () => {

  const [formSent, setFormSent] = useState(false);

  return (

    formSent ?
      <SuccessfulPage />
      :
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              observations: ''
            }}
            validate={values => {
              const errors = {};
              const inputErrors = validateForm(values);

              if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'E-mail inválido';
              }
              return {
                ...errors,
                ...inputErrors
              };
            }}
            onSubmit={() => {
              setFormSent(true);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting
            }) => (
              <form className="contact-form-container" onSubmit={handleSubmit}>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label htmlFor="firstName" className="form-input-label">Nombre</label>
                    <input value={values.firstName} name="firstName" type="text" placeholder="Nombre" onChange={handleChange}
                      className="form-input" />
                    <span className='form-input-error'>{errors.firstName && touched.firstName && errors.firstName}</span>
                  </div>
                  <div className="w-full mt-4 lg:w-1/2 lg:mt-0">
                    <label htmlFor="lastName" className="form-input-label">Apellido</label>
                    <input value={values.lastName} name="lastName" type="text" placeholder="Apellido" onChange={handleChange}
                      className="form-input" />
                    <span className='form-input-error'>{errors.lastName && touched.lastName && errors.lastName}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label htmlFor="Email"
                      className="form-input-label">Email</label>
                    <input value={values.email} name="email" type="text" placeholder="Email" onChange={handleChange}
                      className="form-input" />
                    <span className='form-input-error'>{errors.email && touched.email && errors.email}</span>
                  </div>
                </div>
                <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                  className="form-input-label"> Observaciones </label><textarea name="observations"
                    className="form-textarea"
                    rows="4" placeholder="Observaciones" onChange={handleChange} value={values.observations} ></textarea>
                </div>
                <span className='form-input-error'>{errors.observations && touched.observations && errors.observations}</span>
                <div className="mt-4">
                  <button disabled={isSubmitting} className="btn-default-lg">Enviar</button>
                </div>
              </form>
            )}
          </Formik>
        </div >
      </div>
  )
}

export default Contact
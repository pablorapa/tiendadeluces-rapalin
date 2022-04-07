import React, { useState } from 'react';
import { Formik } from 'formik';
import SuccessfulPage from './SuccessfulPage';

const Contact = () => {

  const [formSent, setFormSent] = useState(false);

  const validateForm = (formValues) => {
    const errors = {};
    for (const value in formValues) {
      if (Object.hasOwnProperty.call(formValues, value)) {
        if (formValues[value] === '') {
          errors[value] = "Requerido";
        }
      }
    }
    return errors;
  }

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
              <form className="justify-center w-full mx-auto" onSubmit={handleSubmit}>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Nombre</label>
                    <input value={values.firstName} name="firstName" type="text" placeholder="Nombre" onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    <span className='text-red-500 text-sm ml-1'>{errors.firstName && touched.firstName && errors.firstName}</span>
                  </div>
                  <div className="w-full mt-4 lg:w-1/2 lg:mt-0">
                    <label htmlFor="lastName" className="block mb-3 text-sm font-semibold text-gray-500">Apellido</label>
                    <input value={values.lastName} name="lastName" type="text" placeholder="Apellido" onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    <span className='text-red-500 text-sm ml-1'>{errors.lastName && touched.lastName && errors.lastName}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                    <input value={values.email} name="email" type="text" placeholder="Email" onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    <span className='text-red-500 text-sm ml-1'>{errors.email && touched.email && errors.email}</span>
                  </div>
                </div>
                <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                  className="block mb-3 text-sm font-semibold text-gray-500"> Observaciones </label><textarea name="observations"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4" placeholder="Observaciones" onChange={handleChange} value={values.observations} ></textarea>
                </div>
                <span className='text-red-500 text-sm ml-1'>{errors.observations && touched.observations && errors.observations}</span>  
                <div className="mt-4">
                  <button type="submit" disabled={isSubmitting} className="w-full px-6 py-2 bg-slate-700 border border-transparent rounded-md text-base font-medium text-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-gray-500 disabled:bg-slate-500">Enviar</button>
                </div>
              </form>
            )}
          </Formik>
        </div >
      </div>
  )
}

export default Contact
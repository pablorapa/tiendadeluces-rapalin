import React, { useState } from 'react';
import { Formik } from 'formik';

const CheckoutForm = ({ submitAction }) => {

    const validateForm = (formValues) => {
        const errors = {};
        for (const value in formValues) {
            if (Object.hasOwnProperty.call(formValues, value)) {
                if (formValues[value] === '' && value !== 'observations') {
                    errors[value] = "Requerido";
                }
            }
        }
        return errors;
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                zipcode: '',
                observations: ''
            }}
            validate={values => {
                const errors = {};

                const inputValidations = validateForm(values);

                if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'E-mail inválido';
                }
                return {
                    ...errors,
                    ...inputValidations
                }
            }}
            onSubmit={(values) => {
                submitAction(values)
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
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="Address"
                                className="block mb-3 text-sm font-semibold text-gray-500">Dirección</label>
                            <input value={values.address}
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                name="address" type="text" placeholder="Dirección" onChange={handleChange} />
                            <span className='text-red-500 text-sm ml-1'>{errors.address && touched.address && errors.address}</span>
                        </div>
                    </div>
                    <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="city"
                                className="block mb-3 text-sm font-semibold text-gray-500">Ciudad</label>
                            <input value={values.city} name="city" type="text" placeholder="Ciudad" onChange={handleChange}
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <span className='text-red-500 text-sm ml-1'>{errors.city && touched.city && errors.city}</span>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500 mt-4 lg:mt-0">
                                Código postal</label>
                            <input value={values.zipcode} name="zipcode" type="text" placeholder="Código postal" onChange={handleChange}
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <span className='text-red-500 text-sm ml-1'>{errors.zipcode && touched.zipcode && errors.zipcode}</span>
                        </div>
                    </div>
                    <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                        className="block mb-3 text-sm font-semibold text-gray-500"> Observaciones (opcional)</label><textarea name="observations"
                            className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            rows="4" placeholder="Observaciones" onChange={handleChange} value={values.observations} ></textarea>
                    </div>
                    <div className="mt-4">
                        <button type="submit" disabled={isSubmitting} className="w-full px-6 py-2 bg-slate-700 border border-transparent rounded-md text-base font-medium text-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-gray-500 disabled:bg-slate-500">Procesar</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default CheckoutForm
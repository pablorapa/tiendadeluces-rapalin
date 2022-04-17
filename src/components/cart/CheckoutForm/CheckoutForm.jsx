import React from 'react';
import { Formik } from 'formik';
import { validateForm } from '../../Common/validations';
import "./CheckoutForm.css";

const CheckoutForm = ({ submitAction }) => {

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

                const optionalInputs = ['observations']

                const inputValidations = validateForm(values, optionalInputs);

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
                <form className="checkoutform-form" onSubmit={handleSubmit}>
                    <div className="checkoutform-field-group">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="firstName" className="form-input-label">Nombre</label>
                            <input value={values.firstName} name="firstName" type="text" placeholder="Nombre" onChange={handleChange}
                                className="form-input" />
                            <span className='form-input-error'>{errors.firstName && touched.firstName && errors.firstName}</span>
                        </div>
                        <div className=" mt-4w-full lg:w-1/2 lg:mt-0">
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
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="Address"
                                className="form-input-label">Dirección</label>
                            <input value={values.address}
                                className="form-input"
                                name="address" type="text" placeholder="Dirección" onChange={handleChange} />
                            <span className='form-input-error'>{errors.address && touched.address && errors.address}</span>
                        </div>
                    </div>
                    <div className="mt-4 checkoutform-field-group">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="city"
                                className="form-input-label">Ciudad</label>
                            <input value={values.city} name="city" type="text" placeholder="Ciudad" onChange={handleChange}
                                className="form-input" />
                            <span className='form-input-error'>{errors.city && touched.city && errors.city}</span>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="postcode" className="form-input-label mt-4 lg:mt-0">
                                Código postal</label>
                            <input value={values.zipcode} name="zipcode" type="text" placeholder="Código postal" onChange={handleChange}
                                className="form-input" />
                            <span className='form-input-error'>{errors.zipcode && touched.zipcode && errors.zipcode}</span>
                        </div>
                    </div>
                    <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                        className="form-input-label"> Observaciones (opcional)</label><textarea name="observations"
                            className="form-textarea"
                            rows="4" placeholder="Observaciones" onChange={handleChange} value={values.observations} ></textarea>
                    </div>
                    <div className="mt-4">
                        <button disabled={isSubmitting} className="btn-default-lg">Procesar</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default CheckoutForm
export const validateForm = (formValues, optionalInputs = []) => {
    const errors = {};
    for (const value in formValues) {
        if (Object.hasOwnProperty.call(formValues, value)) {
            if (formValues[value] === '' && !optionalInputs.includes(value)) {
                errors[value] = "Requerido";
            }
        }
    }
    return errors;
}
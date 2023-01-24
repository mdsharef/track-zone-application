const checkValidity = (values) => {
    const errors = {};

    Object.keys(values).forEach(key => {
        if(values[key] !== 0 && !values[key]) {
            errors[key] = `${key} can not be empty`;
        }

        if(key === 'password' && values[key].length < 6 && values[key].length >0) {
            errors[key] = `${key} must be at least 6 characters`
        }
    })

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

export default checkValidity;
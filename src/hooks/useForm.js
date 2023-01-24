import { useEffect, useState } from "react";
import { timezoneOffset } from "../constant/timezoneObj";
import deepClone from "../utils/deepClone";
import mapObject from "../utils/mapObject";

/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {Function | Boolean} validate
 * 
 * create form using this hook easily
 * @param {Param}
 * @returns {
 *  object - formState,
 *  function - handleChange
 *  function - handleSubmit
 *  function - handleFocus
 *  function - handleBlur
 *  function - clear
 * }
 */

const useForm = ({init, validate, willTimezoneUpdated=true, updateKey, tobeUpdated}) => {
    const [state, setState] = useState(mapObject(init, (obj, acc, cur)=> {
        acc[cur] = {
            value: obj[cur],
            error: '',
            focused: false,
            touched: false,
        }
    }));

    if(willTimezoneUpdated) {
        useEffect(()=> {
            if(timezoneOffset[state[updateKey].value]) {
                const oldState = deepClone(state);
                oldState[tobeUpdated].value = timezoneOffset[state[updateKey].value]
                
                setState(oldState);
            }
        }, [state[updateKey].value]);
    }

    const handleFocus = (e) => {
        const {name} = e.target;

        const oldState = deepClone(state);
        oldState[name].focused = true;

        if(!oldState[name].touched) {
            oldState[name].touched = true;
        }

        setState(oldState);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        const oldState = deepClone(state);
        oldState[name].value = value;

        const {errors} = getErrors(oldState);

        if(oldState[name].touched && errors[name]) {
            oldState[name].error = errors[name];
        } else {
            oldState[name].error = '';
        }

        setState(oldState);
    }

    const handleBlur = (e) => {
        const {name} = e.target;

        const {errors} = getErrors(state);
        const oldState = deepClone(state);

        if(oldState[name].touched && errors[name]) {
            oldState[name].error = errors[name];
        } else {
            oldState[name].error = '';
        }

        oldState[name].focused = false;

        setState(oldState);
    }

    const handleSubmit = (e, cb, optional) => {
        e.preventDefault();

        const { values, errors, hasError } = getErrors(state);

        if(hasError) {
            const oldState = deepClone(state);
            Object.keys(errors).forEach(key => {
                oldState[key].error = errors[key];
            });
            setState(oldState);
            return;
        } 
        if(optional) {
            if(typeof optional === 'object') {
                const newValues = {
                    ...values,
                    ...optional,
                }
                cb(newValues);
            } else {
                throw new Error('optional must be an object')
            }
        } else {
            cb(values)
        }

        clear();

        // cb({
        //     values,
        //     errors,
        //     hasError,
        //     focused: mapObject(state, (obj, acc, cur) => acc[cur] = obj[cur].focused),
        //     touched: mapObject(state, (obj, acc, cur) => acc[cur] = obj[cur].touched),
        // })
    }

    const clear = () => {
        setState(mapObject(state, (_obj, acc, cur) => {
            acc[cur] = {
                value: '',
                error: '',
                focused: false,
                touched: false,
            }
        }))
    }

    const getErrors = (state) => {
        let errors = null, hasError = null;

        const values = mapObject(state, (obj, acc, cur) => acc[cur] = obj[cur].value);

        if(typeof validate === 'boolean') {
            hasError = validate;
            errors = mapObject(state, (obj, acc, cur) => acc[cur] = obj[cur].error);
        } else if (typeof validate === 'function') {
            const {errors: errorsFromCb, isValid} = validate(values);
            errors = errorsFromCb;
            hasError = !isValid;
        } else {
            throw new Error('validate property must be boolean or function');
        }

        return {
            errors,
            hasError,
            values
        }
    }

    return {
        formState: state,
        handleFocus,
        handleChange,
        handleBlur,
        handleSubmit,
        clear,
    }
}

export default useForm;
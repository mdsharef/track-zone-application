import { timezoneOffset } from "../../../constant/timezoneObj";
import useForm from "../../../hooks/useForm";
import checkValidity from "../../../utils/checkValidity";
import getOffsetValues from "../../../utils/getOffsetValues";
import getTimezoneValues from "../../../utils/getTimezoneValues";

const ClockForm = ({ 
    values={title: '', timezone: '', offset: 0}, 
    handleClock, 
    title=true, 
    edit=false 
}) => {
    const {
        formState: formValues,
        handleFocus,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm({
            init: values, 
            validate: checkValidity, 
            updateKey: 'timezone', 
            tobeUpdated: 'offset'
        })

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, handleClock)}>
                <div>
                    <label htmlFor="title">Title: - </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={formValues.title.value} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        disabled={!title}
                    />
                    {formValues.title.error && <p>{formValues.title.error}</p>}
                </div>
                <div>
                    <label htmlFor="timezone">Timezone: - </label>
                    <select 
                        id="timezone" 
                        name="timezone" 
                        value={formValues.timezone.value} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        onFocus={handleFocus} 
                    >
                        {getTimezoneValues(timezoneOffset).map((key, index) => (
                            <option key={index} value={key.value}>{key.text}</option>
                        ))}
                    </select>
                    {formValues.timezone.error && <p>{formValues.timezone.error}</p>}
                </div>
                {(formValues.timezone.value === 'UTC' || formValues.timezone.value === 'GMT') && (
                    <div>
                        <label htmlFor="offset">Offset: - </label>
                        <select 
                            id="offset" 
                            name="offset" 
                            value={formValues.offset.value} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        >
                            {formValues.timezone.value === 'UTC' ? (
                                getOffsetValues('UTC').map((key, index) =>(
                                    <option 
                                        key={index} 
                                        value={key.value}
                                    >
                                        {key.text}
                                    </option>
                                ))
                            ) : (
                                getOffsetValues('GMT').map((key, index) =>(
                                    <option 
                                        key={index} 
                                        value={key.value}
                                    >
                                        {key.text}
                                    </option>
                                ))
                            )}
                        </select>
                        {formValues.offset.error && <p>{formValues.offset.error}</p>}
                    </div>
                )}
                <button>{edit ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default ClockForm;
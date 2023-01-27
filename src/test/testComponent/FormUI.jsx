import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import { timezoneOffset } from "../../constant/timezoneObj";
import useForm from "../../hooks/useForm";
import checkValidity from "../../utils/checkValidity";
import getOffsetValues from "../../utils/getOffsetValues";
import getTimezoneValues from "../../utils/getTimezoneValues";

const Label = styled.label`
    font-size: 16px;
    color: #555;
`;

const SelectInput = styled.select`
    width: 100%;
    height: 100%;
    padding: 16px 10px;
    font-size: 16px;
    border: ${props => props.error ? '2px solid red' : '1px solid #ccc'};
    border-radius: 5px;
    color: #555;
    margin-bottom: 12px;
    &:hover {
        border: 1px solid #000;
    }
    &:focus {
        border: 2px solid #1C82AD;
    }
`;

const Paragraph = styled.p`
    color: red;
    margin-bottom: 10px;
    font-size: 13px;
    margin-left: 12px;
`;

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
        clear
    } = useForm({
            init: values, 
            validate: checkValidity, 
            updateKey: 'timezone', 
            tobeUpdated: 'offset'
        })

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, handleClock)}>
                <TextField 
                    fullWidth 
                    variant="outlined" 
                    id="outlined-basic"
                    label="Title"  
                    name="title"
                    value={formValues.title.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    disabled={!title}
                    error={Boolean(formValues.title.error)}
                    helperText={formValues.title.error && formValues.title.error}
                    sx={{marginBottom: '12px'}}
                />
                <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <SelectInput 
                        id="timezone" 
                        name="timezone" 
                        value={formValues.timezone.value} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        error={Boolean(formValues.timezone.error)}
                    >
                        {getTimezoneValues(timezoneOffset).map((key, index) => (
                            <option key={index} value={key.value}>{key.text}</option>
                        ))} 
                    </SelectInput>
                    {formValues.timezone.error && <Paragraph>{formValues.timezone.error}</Paragraph>}
                </div>
                {(formValues.timezone.value === 'UTC' || formValues.timezone.value === 'GMT') && (
                    <div>
                        <Label htmlFor="offset">Offset</Label>
                        <SelectInput 
                            id="offset" 
                            name="offset" 
                            value={formValues.offset.value} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            error={Boolean(formValues.offset.error)}
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
                        </SelectInput>
                        {formValues.offset.error && <Paragraph>{formValues.offset.error}</Paragraph>}
                    </div>
                )}
                <div>
                    <Button variant="contained" color="warning" onClick={clear} sx={{marginRight: '10px'}}>Clear</Button>
                    <Button variant="contained">{edit ? 'Update' : 'Create'}</Button>
                </div>
            </form>
        </div>
    );
};

export default ClockForm;
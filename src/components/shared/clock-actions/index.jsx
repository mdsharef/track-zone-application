import { useState } from "react";
import styled from "styled-components";
import ClockForm from "../clock-form";

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    gap: ${props => props.clock ? '0.1em' : '0.6em'};
`;

const Button = styled.button`
    padding: ${props => props.clock ? '4px 10px' : '6px 15px'};
    font-size: ${props => props.clock ? '1em' : '1.1em'};
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #aaa;
`

const ClockActions = ({ local=false, clock, updateClock, createClock, deleteClock }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false)

    return (
        <div>
            <Container clock={!local}>
                <Button onClick={() => setIsEdit(!isEdit)} clock={!local}>Edit</Button>
                {local ? (
                        <Button onClick={() => setIsCreate(!isCreate)} clock={!local}>Create</Button>
                    ) : (
                        <Button onClick={() => deleteClock(clock.id)} clock={!local}>Delete</Button>
                    )}
            </Container>
            {isEdit && (
                <>
                    <h3>Edit Clock</h3>
                    <ClockForm 
                        values={clock} 
                        handleClock={updateClock} 
                        title={!local} 
                        edit={true} 
                    />
                </>
            )}
            {isCreate && (
                <>
                    <h3>Create Clock</h3>
                    <ClockForm 
                        handleClock={createClock}
                    />
                </>
            )}
        </div>
    )
}

export default ClockActions;
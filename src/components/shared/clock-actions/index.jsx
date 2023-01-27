import { useState } from "react";
import styled from "styled-components";
import Popup from "../../ui/Popup";

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
    const [isCreate, setIsCreate] = useState(false);

    const handleCreateOpen = () => {
        setIsCreate(true)
    }

    const handleCreateClose = () => {
        setIsCreate(false)
    }

    const handleEditOpen = () => {
        setIsEdit(true)
    }

    const handleEditClose = () => {
        setIsEdit(false)
    }

    return (
        <div>
            <Container clock={!local}>
                <Button onClick={handleEditOpen} clock={!local}>Edit</Button>
                {local ? (
                        <Button onClick={handleCreateOpen} clock={!local}>Create</Button>
                    ) : (
                        <Button onClick={() => deleteClock(clock.id)} clock={!local}>Delete</Button>
                    )}
            </Container>

            <Popup 
                values={clock}
                handleClock={updateClock} 
                title={!local} 
                edit={true} 
                open={isEdit}
                handleClose={handleEditClose}
            />
            
            <Popup 
                handleClock={createClock}
                open={isCreate}
                handleClose={handleCreateClose}
            />
        </div>
    )
}

export default ClockActions;
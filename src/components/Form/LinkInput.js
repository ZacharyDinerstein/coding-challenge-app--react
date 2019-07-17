import React from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';

const LinkInputs = (props) => {
    let {
        link,
        updateCardArrayAttribute
    } = props;

    return (
        <>
            <label htmlFor="">Link URL</label>
            <input
                type="text"
                placeholder="Optional"
                name="links"
                onChange={updateCardArrayAttribute}
                value={link}
            />
            <AddInputsBtn>
                Add Link    
            </AddInputsBtn> 
        </>
    )
}

export default LinkInputs;

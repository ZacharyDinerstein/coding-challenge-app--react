import React from 'react';

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
            <addButton 

            />
        </>
    )
}

export default LinkInputs;

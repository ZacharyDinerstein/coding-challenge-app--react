import React from 'react';

const CompanyInputs = (props) => {
    let {
        updateCardAttribute,
        label,
        item
    } = props,
    category = "company";

    return (
        <>
            <label htmlFor="">{label}</label>
            <input
                type="text"
                placeholder="Optional"
                name={category}
                value={item}
                onChange={updateCardAttribute}
            />
        </>
    )
}

export default CompanyInputs;

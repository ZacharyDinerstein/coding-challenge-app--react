import React from 'react';

const CompanyInputs = (props) => {
    let {
        updateCardAttribute,
        label
    } = props,
    category = "company";

    return (
        <>
            <label htmlFor="">{label}</label>
            <input
                type="text"
                placeholder="Optional"
                name={category}
                onChange={updateCardAttribute}
            />
        </>
    )
}

export default CompanyInputs;

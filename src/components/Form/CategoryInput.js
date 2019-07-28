import React, { useState } from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveInputsBtn from '../Button/RemoveInputsBtn';

const CategoryInput = (props) => {
    let {
        item,
        updateCardAttribute,
        index,
        label
    } = props,
        category = "categories";

    const [selectedValue, updateSelectedValue] = useState('javascript');

    const handleChange = (e) => {
        updateSelectedValue(e.target.value);
        updateCardAttribute(e, category, index);
        // console.log(e.target.value)
    }


    return (
        <>
            <label htmlFor="">{label}</label>
            <select
                type="text"
                placeholder="Optional"
                name={category}
                onChange={handleChange}
                value={selectedValue}
                required
            >
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
                <option value="css">CSS</option>
                <option value="html">HTML</option>
                <option value="ruby">Ruby</option>
            </select>
            <div className="form__buttons-wrapper">
                <AddInputsBtn
                    category={category}
                    handleAddNewInputs={(category) => props.handleAddNewInputs(category)}
                >
                    Add {label}
                </AddInputsBtn>
                <RemoveInputsBtn
                    index={index}
                    category={category}
                    handleRemoveInputs={(elemToRemove) => props.handleRemoveInputs(elemToRemove)}
                >
                    Remove
                </RemoveInputsBtn>
            </div>
        </>
    )
}

export default CategoryInput;

import React, { Component } from 'react'

export default class LinkInputs extends Component {
    render() {
        let {
            link,
            updateCardArrayAttribute
        } = this.props;

        return (
            <>
                <label htmlFor="">Link URL</label>
                <input
                    type="text"
                    placeholder="Optional"
                    name="link"
                    onChange={updateCardArrayAttribute}
                    value={link}
                />
            </>
        )
    }
}


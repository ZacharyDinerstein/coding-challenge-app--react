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
                    name="links"
                    onChange={updateCardArrayAttribute}
                    value={link}
                />
            </>
        )
    }
}


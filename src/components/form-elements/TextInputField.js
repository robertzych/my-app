import React from "react";
import './InputField.css';

export default class TextInputField extends React.Component {
    state = {
        a: 'b',
    };

    // componentDidUpdate(prevProps, prevState, snapshot) {
    componentDidUpdate(props, state) {
        console.log('props ->', props);
        console.log('state ->', state);
    }

    render() {
        const { label, name, onChange, value, required, onBlur } = this.props;
        return (
            <div className="input-field">
                <label
                    className="input-field__label"
                    htmlFor={name}
                >
                    {label}
                </label>
                <input
                    id={name}
                    name={name}
                    value={value}
                    type="text"
                    className="input-field__text-input"
                    required={required}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        )
    }
}
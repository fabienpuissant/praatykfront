import React from 'react'
import Select from 'react-select';


export default function SelectField({
    id, type, value, options, onChange, styles, classe, defaultValue, disabled
}) {
    return (
        <Select
            id={id} 
            type={type} 
            value={value}
            options={options}
            onChange={onChange}
            styles={styles}
            className={classe}
            defaultValue={defaultValue}
            noOptionsMessage={() => "Loading..."}
            isDisabled={disabled}
        />
    )
}

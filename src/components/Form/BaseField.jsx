import React from 'react'
import {InputBase} from "@material-ui/core"

export default function BaseField({
    id, onKeyDown, classe, label, variant, type, placeholder, value, onChange, fullWidth, startAdornment, endAdornment, classes, disabled
}) {
    return (
        <InputBase 
            fullWidth={fullWidth !== undefined ? fullWidth: false}
            id={id} 
            onKeyDown={onKeyDown}
            className={classe}
            classes={classes}
            label={label} 
            variant={variant} 
            type={type} 
            placeholder={placeholder}
            value={value} 
            onChange={onChange}
            endAdornment={endAdornment}
            startAdornment={startAdornment}
            disabled={disabled}
        />
    )
}

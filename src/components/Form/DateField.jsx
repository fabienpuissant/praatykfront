import React from 'react'
import {
    DateTimePicker,
    MuiPickersUtilsProvider 
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export default function DateField({
    value, onChange, inputProps
}) {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker 
                showTodayButton
                value={value}
                onChange={onChange}
                InputProps={inputProps}
            />
        </MuiPickersUtilsProvider>
    )
}

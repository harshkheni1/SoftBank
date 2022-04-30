import React from "react";
import PropTypes from 'prop-types';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import { CustomInput } from './index';

function CustomDatepicker({ value, onChange }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                format="dd MMMM yyyy"
                value={value}
                onChange={onChange} 
                TextFieldComponent={(props) => (<CustomInput fullWidth={true} defaultValue={props.value} onClick={props.onClick} />)}
            />
        </MuiPickersUtilsProvider>
    );
}

CustomDatepicker.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default CustomDatepicker;
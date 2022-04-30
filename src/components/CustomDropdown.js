import React from "react";
import PropTypes from 'prop-types';

import { TextField, MenuItem } from '@material-ui/core';

function CustomDropdown({ fullWidth=true, defaultValue="", onChange={}, name="", options=[] }) {
    return (
        <TextField
            select
            fullWidth={fullWidth}
            className="custom-dropdown"
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
            variant="outlined"
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

CustomDropdown.propTypes = {
    fullWidth: PropTypes.bool,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    options: PropTypes.array
}

export default CustomDropdown;
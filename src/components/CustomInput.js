import React from "react";
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

function CustomInput({ fullWidth=true, type="text", defaultValue="", onClick={} }) {
    return (
        <TextField
            fullWidth={fullWidth}
            type={type}
            className="custom-input"
            defaultValue={defaultValue}
            variant="outlined"
            onClick={() => onClick}
        />
    );
}

CustomInput.propTypes = {
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    onClick: PropTypes.func
}

export default CustomInput;
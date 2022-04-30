import React from "react";
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

import { IconButton } from './index';

import sendicon from '../assets/images/send.svg';

function ButtonInput({ fullWidth=true, defaultValue="" }) {
    return (
        <TextField
            fullWidth={fullWidth}
            className="button-input my-auto"
            defaultValue={defaultValue}
            variant="outlined"
            InputProps={{
                endAdornment: (
                    <IconButton icon={sendicon} alt="send" label="Send" />
                )
            }}
        />
    );
}

ButtonInput.propTypes = {
    fullWidth: PropTypes.bool,
    defaultValue: PropTypes.string
}

export default ButtonInput;
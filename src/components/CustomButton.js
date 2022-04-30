import React from "react";
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

function CustomButton({ label="" }) {
    return (
        <Button
            className="bg-blue text-white text-base capitalize lg:rounded-[15px] rounded-[9px] lg:w-auto w-full px-14 py-4 shadow-none"
            variant="contained"
        >
            {label}
        </Button>
    );
}

CustomButton.propTypes = {
    label: PropTypes.string,
}

export default CustomButton;
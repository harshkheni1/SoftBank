import React from "react";
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

function IconButton({ icon, alt, label }) {
    return (
        <Button
            className="bg-blue text-white text-base capitalize rounded-[50px] lg:w-auto w-full lg:px-6 lg:py-4 px-0 py-3 shadow-none"
            variant="contained"
        >
            {label} <img src={icon} alt={alt} className="ml-3" />
        </Button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    label: PropTypes.string,
}

export default IconButton;
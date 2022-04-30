import React from "react";
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

function OutlineButton({ label="" }) {
    return (
        <Button
            className="bg-white text-seablue text-base border border-solid border-seablue capitalize rounded-[50px] xl:px-4 px-2 py-2 shadow-none"
            variant="contained"
        >
            {label}
        </Button>
    );
}

OutlineButton.propTypes = {
    label: PropTypes.string,
}

export default OutlineButton;
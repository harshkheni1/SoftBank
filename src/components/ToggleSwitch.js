import React from "react";
import PropTypes from 'prop-types';

import { Switch } from '@material-ui/core';

function ToggleSwitch({ checked=true, onChange={}, name="" }) {
    return (
        <Switch
            disableRipple
            classes={{
                root: 'w-[52px] h-[26px] p-0 my-auto',
                switchBase: 'p-[1px]',
                thumb: 'w-[24px] h-[24px]',
                track: 'rounded-[13px] opacity-100',
                checked: 'text-white transform translate-x-[26px]',
            }}
            checked={checked}
            onChange={onChange}
            name={name}
        />
    );
}

ToggleSwitch.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string
}

export default ToggleSwitch;
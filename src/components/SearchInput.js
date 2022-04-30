import React from "react";
import PropTypes from 'prop-types';

import { TextField, InputAdornment } from '@material-ui/core';

import searchicon from '../assets/images/search.svg';

function SearchInput({ fullWidth=true }) {
    return (
        <TextField
            fullWidth={fullWidth}
            className="search-input lg:mr-4 mr-1 my-auto"
            placeholder="Search for something"
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" className="lg:mr-4 mr-1">
                        <img src={searchicon} alt="search" />
                    </InputAdornment>
                )
            }}
        />
    );
}

SearchInput.propTypes = {
    fullWidth: PropTypes.bool
}

export default SearchInput;
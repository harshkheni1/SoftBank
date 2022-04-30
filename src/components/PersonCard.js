import React from "react";
import PropTypes from 'prop-types';

function PersonCard({ icon, alt, name, tag }) {
    return (
        <div className="text-center">
            <img src={icon} alt={alt} className="mx-auto mb-2" />
            <p className="text-base font-normal text-lightblack">{name}</p>
            <p className="text-base font-normal text-darkblue">{tag}</p>
        </div>
    );
}

PersonCard.propTypes = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
}

export default PersonCard;
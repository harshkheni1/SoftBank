import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent, Grid } from "@material-ui/core";

function CardSettingCard({ settings = [] }) {
    return (
        <Card className="shadow-none rounded-[25px]">
            <CardContent className="p-3">
                {settings && Object.keys(settings).length > 0 ? settings.map((setting, index) => (
                    <Grid container className="p-3" key={index}>
                        <div className="flex">
                            <img src={setting.icon} alt={setting.alt} className="my-auto" />
                            <div className="ml-5 my-auto">
                                <h4 className="body1">{setting.name}</h4>
                                <h5 className="body2 text-darkblue">{setting.description}</h5>
                            </div>
                        </div>
                    </Grid>
                )) : <p>No Settings</p>}
            </CardContent>
        </Card>
    );
}

CardSettingCard.propTypes = {
    settings: PropTypes.array,
}

export default CardSettingCard;
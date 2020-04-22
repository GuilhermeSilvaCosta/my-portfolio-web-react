import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import './MasterEvent.css';

function MasterEvent({icon, title}) {

    return (
        <div className="master-event-grid">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white">
                    <Icon>{icon}</Icon>
                </div>
                <div className="h-16 w-1 bg-white">

                </div>
            </div>
            <div className="flex p-5">
                <Typography className="text-gray-700" variant="subtitle1">{title}</Typography>
            </div>
        </div>
    )

}

export default MasterEvent;
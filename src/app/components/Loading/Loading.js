import React from 'react';
import { Typography, LinearProgress } from '@material-ui/core';

const Loading = () => {

    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <Typography className="text-20 mb-16" color="textSecondary">Loading...</Typography>
            <LinearProgress className="w-xs" color="secondary"/>
        </div>
    );

}

export default Loading;
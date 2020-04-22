import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import './SingleEvent.css'

function SingleEvent({title, children, first}) {
    return (
        <div className="single-event-grid">
            <div className="flex flex-col items-center justify-center">
                <div className={clsx("h-4 w-4 rounded-full", first ? "bg-green-400" : "bg-white")}></div>
                <div className="h-full w-1 bg-white"></div>
            </div>
            <div>
                <div className="relative bg-green-400 text-white single-event-title">
                    <Typography variant="caption">{title}</Typography>
                </div>
                <div className="p-4 flex flex-col items-start">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SingleEvent;
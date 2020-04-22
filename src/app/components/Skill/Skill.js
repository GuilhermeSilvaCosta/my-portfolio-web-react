import React from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

function Skill(props) {

    const { name, percent, className } = props;

    return (
        <div className={clsx("relative", className)}>
            <Typography color="textSecondary" className="absolute text-left" variant="body2">{name}</Typography>
            <div className="flex flex-row items-center">
                <div style={{width: `${percent}%`}} className="bg-white h-2 rounded"></div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Typography style={{fontSize: '12px'}} className="font-bold">{percent}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Skill;
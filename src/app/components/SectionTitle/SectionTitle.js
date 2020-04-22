import React from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

import './SectionTitle.css'

const SectionTitle = ({className, title}) => {

    return (
        <div className={clsx(className, "flex")}>
            <div className="relative bg-green-500 w-6 h-8 title-left">
            </div>
            <div className="relative bg-green-400 h-8 flex items-center -mx-8px z-10 mt-5px px-10 title-content">
                <Typography variant="caption" className="text-gray-200">{title}</Typography>
            </div>
            <div className="bg-green-500 w-6 h-8 mt-10px"></div>
        </div>
    )

}

export default SectionTitle;
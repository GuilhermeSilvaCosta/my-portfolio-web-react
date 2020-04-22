import React from 'react';

import './Process.css'

const Process = ({children}) => {

    return (
        <div className="flex flex-col items-center justify-center h-24 w-24 bg-white process">
            {children}
        </div>
    )
}

export default Process;
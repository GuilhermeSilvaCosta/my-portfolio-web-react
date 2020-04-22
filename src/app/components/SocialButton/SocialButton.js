import React from 'react';
import clsx from 'clsx';

function SocialButton({href, className, children}) {

    return (
        <a 
            className={clsx(className, "no-underline border-gray-500 cursor-pointer flex items-center justify-center h-10 w-10 border border-solid rounded-full")}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
    
}

export default SocialButton;
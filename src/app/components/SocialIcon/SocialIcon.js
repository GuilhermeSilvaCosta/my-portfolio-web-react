import React from 'react';

const SocialIcon = ({className, link, icon}) => {

    return (
        <a className={className} href={link} target={'_blank'} rel="noopener noreferrer">
            <span className="text-gray-600 hover:text-gray-500">
                <i className={icon}></i>
            </span>
        </a>
    )
    
}

export default SocialIcon;
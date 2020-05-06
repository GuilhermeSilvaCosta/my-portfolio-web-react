import React from 'react'
import { Icon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const NavItem = ({icon, title, url}) => {

    return (
        <Link to={url} className="no-underline">
            <li className="cursor-pointer text-gray-400 hover:text-gray-600">
                <div className="w-full h-20 flex flex-col items-center justify-center">
                    <Icon className="mb-2">{icon}</Icon>
                    <Typography variant="caption">{title}</Typography>
                </div>
                <div className="w-full h-px bg-gray-700"></div>
            </li>
        </Link>
    )
}

export default NavItem;
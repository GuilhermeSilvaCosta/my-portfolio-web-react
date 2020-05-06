import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import { useDispatch } from 'react-redux';
import * as Actions from 'app/store/actions';

import './TopNavbar.css';

function TopNavbar() {

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(Actions.navbarOpenClose());
    }

    return(
        <div className="top-navbar absolute bg-blue-700 w-full z-10 flex items-center">
            <IconButton onClick={handleClick}>
                <Icon className="text-white">menu</Icon>
            </IconButton>
            <Typography className="text-white">Guilherme Costa</Typography>
        </div>
    )
}

export default TopNavbar;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeftNavbar from 'app/components/LeftNavbar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import * as Actions from 'app/store/actions';

function Navbar() {

    const navbar = useSelector(({portfolio}) => portfolio.navbar);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Hidden xsDown>
                <LeftNavbar />
            </Hidden>
            <Hidden smUp>
                <Drawer
                    open={navbar.open}
                    onClose={() => dispatch(Actions.navbarOpenClose())}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    <LeftNavbar />
                </Drawer>
            </Hidden>
        </React.Fragment>
    )

}

export default Navbar;
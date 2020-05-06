import React from 'react'
import NavItem from 'app/components/NavItem';
import SocialIcon from 'app/components/SocialIcon';
import { Typography } from '@material-ui/core';
import './LeftNavbar.css';
import intl from 'react-intl-universal';
import clsx from 'clsx';

const LeftNavbar = ({className}) => {

    return (
        <React.Fragment>
            <ul className={clsx(className, "left-navbar-container flex flex-col h-full")}>
                <li className="text-gray-400 flex flex-col items-center">
                    <img style={{ height: '109px' }} src={`${process.env.PUBLIC_URL}/assets/images/photos/bitmoji.png`} alt="" />
                    <div className="w-full h-px bg-gray-700"></div>
                </li>
                <NavItem url={'/'} icon={'home'} title={'HOME'} />
                <NavItem url={'/about'} icon={'person'} title={intl.get('leftNavBar.aboutMe')} />
                <NavItem url={'/resume'} icon={'assignment_ind'} title={intl.get('leftNavBar.resume')} />
                <NavItem url={'./portfolio'} icon={'assignment'} title={intl.get('leftNavBar.portfolio')} />
                <NavItem url={'./contact'} icon={'phone'} title={intl.get('leftNavBar.contact')} />
                <li className="h-full w-full flex flex-col-reverse items-center">
                    <Typography className="text-gray-600" variant="caption">© 2020</Typography>
                    <div className="flex flex-row justify-between w-full py-4">
                        <SocialIcon className="ml-2" link={'https://github.com/GuilhermeSilvaCosta'} icon={'fab fa-github'} />
                        <SocialIcon link={'https://www.facebook.com/tec.guilherme.dsc?ref=bookmarks'} icon={'fab fa-facebook'} />
                        <SocialIcon link={'https://www.linkedin.com/in/guilherme-costa-5621b461/'} icon={'fab fa-linkedin'} />
                        <SocialIcon className="mr-2" link={'https://twitter.com/GuiCosTI'} icon={'fab fa-twitter'} />
                    </div>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default LeftNavbar;
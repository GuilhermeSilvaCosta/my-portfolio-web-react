import React, { useEffect } from 'react';
import { Icon, Typography } from '@material-ui/core';
import intl from 'react-intl-universal';
import SectionTitle from 'app/components/SectionTitle';
import DevelopmentSVG from 'app/components/DevelopmentSVG';
import ManagementSVG from 'app/components/ManagementSVG';
import CerebroSVG from 'app/components/CerebroSVG';
import Process from 'app/components/Process';
import LineProcess from 'app/components/LineProcess';
import googleAnalytics from 'app/services/googleAnalytics';

import './About.css'

function About() {

    useEffect(() => {
        googleAnalytics.pageview(window.location.pathname + window.location.search)
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-gray-200 pt-12 text-gray-800">
            <Icon fontSize="large">account_circle</Icon>
            <Typography variant="h2">{intl.get('about.aboutMe')}</Typography>
            <SectionTitle className="mt-24" title={intl.get('about.services')} />
            <div className="flex flex-row flex-wrap p-20 xs:p-4 justify-around">
                <div className="flex flex-col items-center justify-between max-w-xs h-48">
                    <DevelopmentSVG className="icon" />
                    <Typography variant="subtitle2" >{intl.get('about.development')}</Typography>
                    <Typography variant="caption">{intl.get('about.developmentDescription')}</Typography>
                </div>
                <div className="flex flex-col items-center justify-between max-w-xs h-48">
                    <ManagementSVG className="icon" />
                    <Typography variant="subtitle2" >{intl.get('about.management')}</Typography>
                    <Typography variant="caption">{intl.get('about.managementDescription')}</Typography>
                </div>
                <div className="flex flex-col items-center justify-between max-w-xs h-48">
                    <CerebroSVG className="icon" />
                    <Typography variant="subtitle2" >{intl.get('about.problemSolving')}</Typography>
                    <Typography variant="caption">{intl.get('about.problemSolvingDescription')}</Typography>
                </div>
            </div>
            <SectionTitle title={intl.get('about.workProcess')} />
            <div className="flex about-direction justify-center flex-wrap p-20">
                <Process>
                    <Icon>message</Icon>
                    <Typography variant="caption">{intl.get('about.discuss')}</Typography>
                </Process>
                <LineProcess />
                <Process>
                    <Icon>highlight</Icon>
                    <Typography variant="caption">{intl.get('about.idea')}</Typography>
                </Process>
                <LineProcess />
                <Process>
                    <Icon>format_paint</Icon>
                    <Typography variant="caption">DESIGN</Typography>
                </Process>
                <LineProcess />
                <Process>
                    <Icon>developer_mode</Icon>
                    <Typography variant="caption">{intl.get('about.develop')}</Typography>
                </Process>
                <LineProcess />
                <Process>
                    <Icon>playlist_add_check</Icon>
                    <Typography variant="caption">{intl.get('about.test')}</Typography>
                </Process>
                <LineProcess />
                <Process>
                    <Icon>cloud_upload</Icon>
                    <Typography variant="caption">{intl.get('about.production')}</Typography>
                </Process>
            </div>
            <SectionTitle title={intl.get('about.clients')} />
            <div className="py-24">
                <a rel="noopener noreferrer" target="_blank" href="https://www.tracknme.com.br">
                    <img style={{height: '46px'}} src={`${process.env.PUBLIC_URL}/assets/images/logos/tracknme.png`} alt='' />
                </a>
            </div>
            <SectionTitle title={intl.get('about.funnyFacts')} />
            <div className="flex flex-wrap justify-around py-24 w-full">
                <div className="m-6">
                    <Icon>flight</Icon>
                    <Typography variant="body2">{intl.get('about.noCountryVisited')}</Typography>
                </div>
                <div className="m-6">
                    <Icon>menu_book</Icon>
                    <Typography variant="body2">{intl.get('about.iReadOnly17books')}</Typography>
                </div>
                <div className="m-6">
                    <Icon>free_breakfast</Icon>
                    <Typography variant="body2">{intl.get('about.infiniteCoffeeCups')}</Typography>
                </div>
                <div className="m-6">
                    <Icon>pool</Icon>
                    <Typography variant="body2">{intl.get('about.iLikeToPlaySports')}</Typography>
                </div>
            </div>
        </div>
    )
}

export default About;
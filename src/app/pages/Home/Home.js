import React, { useEffect } from 'react';
import { Typography, Hidden } from '@material-ui/core';
import Signpost from 'app/components/Signpost';
import intl from 'react-intl-universal';
import googleAnalytics from 'app/services/googleAnalytics';

import './Home.css';

function Home() {

    useEffect(() => {
        googleAnalytics.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <div className="w-full h-full bg-cover bg-center absolute" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/home.jpeg)` }}>
            <div className="w-full h-full opacity-75 bg-gray-900 absolute">
                <div className="flex flex-col justify-end text-white h-full">
                    <Typography variant="subtitle1">{intl.get('home.hello')}</Typography>
                    <Hidden xsDown>
                        <Typography variant="h1">Guilherme</Typography>
                    </Hidden>
                    <Hidden smUp>
                        <Typography variant="h3">Guilherme</Typography>
                    </Hidden>
                    <div className="flex flex-row justify-center items-baseline signpost">
                        <Typography variant="h6">{intl.get('home.i')}&nbsp;</Typography>
                        <Hidden xsDown>
                            <Signpost 
                                variant="h4" 
                                banners={intl.get('home.banners')} 
                                timeout={100} 
                            />
                        </Hidden>
                        <Hidden smUp>
                            <Signpost 
                                variant="subtitle1" 
                                banners={intl.get('home.banners')} 
                                timeout={100} 
                            />
                        </Hidden>
                    </div>
                    <div className="mb-24"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
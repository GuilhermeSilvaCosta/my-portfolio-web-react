import React, { useEffect } from 'react';
import { Icon, Typography, Card, CardMedia, CardContent, IconButton } from '@material-ui/core';
import intl from 'react-intl-universal';
import googleAnalytics from 'app/services/googleAnalytics';

import './Portfolio.css';

function Portfolio() {

    useEffect(() => {
        googleAnalytics.pageview(window.location.pathname + window.location.search)
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-green-400 text-gray-800 p-10 pt-12">
            <Icon fontSize="large">assignment</Icon>
            <Typography variant="h2">{intl.get('portfolio.title')}</Typography>
            <div className="portfolio-grid pt-10">
                <Card>
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/barber.png`}
                        className="h-64"
                        component="a"
                        target="_blank"
                        href="https://guilhermesilvacosta.github.io/gobarber-web/"
                    />
                    <CardContent className="relative">
                        <IconButton 
                            className="button-download"
                            component="a"
                            href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40guilhermecosta/gobarber-mobile-aae1aa138b7c4fc9b913c8fa4c430217-signed.apk"
                        >
                            <Icon>android</Icon>
                        </IconButton>
                        <Typography variant="subtitle1">Barber</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.barber')}</Typography>
                        <div className="flex justify-between">
                            <Typography 
                                variant="subtitle1"
                                component="a"
                                target="_blank"
                                href="https://github.com/GuilhermeSilvaCosta/gobarber-api"
                            >
                                Backend
                            </Typography>
                            <Typography 
                                variant="subtitle1"
                                component="a"
                                target="_blank"
                                href="https://github.com/GuilhermeSilvaCosta/gobarber-mobile"
                            >
                                Mobile
                            </Typography>
                            <Typography 
                                variant="subtitle1"
                                component="a"
                                target="_blank"
                                href="https://github.com/GuilhermeSilvaCosta/gobarber-web"
                            >
                                Frontend
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/devradar.png`}
                        className="h-64 mobile"
                        component="a"
                        target="_blank"
                        href="https://guilhermesilvacosta.github.io/web-semanaomnistack10/"
                    />
                    <CardContent className="relative">
                        <IconButton 
                            className="button-download"
                            component="a"
                            href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40guilhermecosta/devradar-241af6d741f848bab1157dcf6a6a2cc7-signed.apk"
                        >
                            <Icon>android</Icon>
                        </IconButton>
                        <Typography variant="subtitle1">DevRadar</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.devRadar')}</Typography>
                        <div className="flex justify-between">
                            <Typography 
                                variant="subtitle1"
                                component="a"
                                target="_blank"
                                href="https://github.com/GuilhermeSilvaCosta/backend-semanaomnistack10"
                            >
                                Backend
                            </Typography>
                            <Typography 
                                variant="subtitle1"
                                component="a"
                                target="_blank"
                                href="https://github.com/GuilhermeSilvaCosta/mobile-semanaomnistack10"
                            >
                                Mobile
                            </Typography>
                            <Typography 
                                variant="subtitle1"
                                component="a"
                                target="_blank"
                                href="https://github.com/GuilhermeSilvaCosta/web-semanaomnistack10"
                            >
                                Frontend
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/myportfolio.png`}
                        className="h-64"
                        component="a"
                        href="https://github.com/GuilhermeSilvaCosta/my-portfolio-web-react"
                        target="_blank"
                    />
                    <CardContent>
                        <Typography variant="subtitle1">guilhermesilvacosta.github.io</Typography>
                        <Typography color="textSecondary" variant="subtitle2">{intl.get('portfolio.guilhermeSolutions')}</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/carwash4u.png`}
                        className="h-64"
                        component="a"
                        href="https://github.com/GuilhermeSilvaCosta/carwash4u"
                        target="_blank"
                    />
                    <CardContent>
                        <Typography variant="subtitle1">Carwash4u</Typography>
                        <Typography color="textSecondary" variant="subtitle2">{intl.get('portfolio.carwash4u')}</Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

}

export default Portfolio;
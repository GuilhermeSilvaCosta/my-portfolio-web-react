import React, { useEffect } from 'react';
import { Icon, Typography, Card, CardMedia, CardContent, IconButton, CardActions, Tooltip } from '@material-ui/core';
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
                <Card className="card">
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/barber.png`}
                        className="h-64"
                        component="a"
                        target="_blank"
                        href="https://guilhermesilvacosta.github.io/gobarber-web/"
                    />
                    <CardContent className="relative">
                        <Tooltip title="Download APK" className="button-download">
                            <IconButton 
                                className="button-download"
                                component="a"
                                href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40guilhermecosta/gobarber-mobile-aae1aa138b7c4fc9b913c8fa4c430217-signed.apk"
                            >
                                <Icon>android</Icon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Rodar com Expo" className="button-expo">
                            <IconButton
                                component="a"
                                target="_blank"
                                href="https://expo.io/@guilhermecosta/gobarber-mobile"
                            >
                                <img src="/assets/icons/expo.svg" alt="expo" />
                            </IconButton>
                        </Tooltip>
                        <Typography variant="subtitle1">Barber</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.barber')}</Typography>
                    </CardContent>
                    <CardActions className="card-actions">
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
                    </CardActions>
                </Card>
                <Card className="card">
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/icons/spotify.svg`}
                        className="h-64 image-icon bg-black"
                        component="a"
                        target="_blank"
                        href="https://expo.io/@guilhermecosta/feel-the-beat-inside"
                    />
                    <CardContent className="relative">
                        <Tooltip title="Download APK" className="button-download">
                            <IconButton 
                                className="button-download"
                                component="a"
                                href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40guilhermecosta/feel-the-beat-inside-ba5a3d8808374230818f2460e3a86986-signed.apk"
                            >
                                <Icon>android</Icon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Rodar com Expo" className="button-expo">
                            <IconButton
                                component="a"
                                target="_blank"
                                href="https://expo.io/@guilhermecosta/feel-the-beat-inside"
                            >
                                <img src="/assets/icons/expo.svg" alt="expo" />
                            </IconButton>
                        </Tooltip>
                        <Typography variant="subtitle1">Spotify</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.spotify')}</Typography>
                    </CardContent>
                    <CardActions className="card-actions">
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/feel-the-beat-inside"
                        >
                            Mobile
                        </Typography>
                    </CardActions>
                </Card>
                <Card className="card">
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/icons/twitter.svg`}
                        className="h-64 image-icon bg-black"
                        component="a"
                        target="_blank"
                        href="https://guilhermesilvacosta.github.io/fera-twitter/"
                    />
                    <CardContent className="relative">
                        <Typography variant="subtitle1">Twitter</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.twitter')}</Typography>
                    </CardContent>
                    <CardActions className="card-actions">
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/fera-twitter-api"
                        >
                            Backend
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/fera-twitter"
                        >
                            Frontend
                        </Typography>
                    </CardActions>
                </Card>
                <Card className="card">
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/ecoleta.png`}
                        className="h-64 mobile"
                        component="a"
                        target="_blank"
                        href="https://guilhermesilvacosta.github.io/ecoleta-web/"
                    />
                    <CardContent className="relative">
                        <Tooltip title="Rodar com Expo" className="button-expo">
                            <IconButton
                                component="a"
                                target="_blank"
                                href="https://expo.io/@guilhermecosta/ecoleta"
                            >
                                <img src="/assets/icons/expo.svg" alt="expo" />
                            </IconButton>
                        </Tooltip>
                        <Typography variant="subtitle1">Ecoleta</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.ecoleta')}</Typography>
                    </CardContent>
                    <CardActions className="card-actions">
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/ecoleta-api"
                        >
                            Backend
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/ecoleta-mobile"
                        >
                            Mobile
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/ecoleta-web"
                        >
                            Frontend
                        </Typography>
                    </CardActions>
                </Card>
                <Card className="card">
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/bethehero.png`}
                        className="h-64 mobile"
                        component="a"
                        target="_blank"
                        href="https://guilhermesilvacosta.github.io/be-the-hero-web/"
                    />
                    <CardContent className="relative">
                        <Tooltip title="Download APK" className="button-download">
                            <IconButton 
                                component="a"
                                href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40guilhermecosta/bethehero-82cee740bcc347308962490d24b95bbb-signed.apk"
                            >
                                <Icon>android</Icon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Rodar com Expo" className="button-expo">
                            <IconButton
                                component="a"
                                target="_blank"
                                href="https://expo.io/@guilhermecosta/bethehero"
                            >
                                <img src="/assets/icons/expo.svg" alt="expo" />
                            </IconButton>
                        </Tooltip>
                        <Typography variant="subtitle1">Be The Hero</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.beTheHero')}</Typography>
                    </CardContent>
                    <CardActions className="card-actions">
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/be-the-hero-api"
                        >
                            Backend
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/be-the-hero-mobile"
                        >
                            Mobile
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            component="a"
                            target="_blank"
                            href="https://github.com/GuilhermeSilvaCosta/be-the-hero-web"
                        >
                            Frontend
                        </Typography>
                    </CardActions>
                </Card>
                <Card className="card">
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/devradar.png`}
                        className="h-64 mobile"
                        component="a"
                        target="_blank"
                        href="https://guilhermesilvacosta.github.io/web-semanaomnistack10/"
                    />
                    <CardContent className="relative">
                        <Tooltip title="Download APK" className="button-download">
                            <IconButton
                                component="a"
                                href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40guilhermecosta/devradar-241af6d741f848bab1157dcf6a6a2cc7-signed.apk"
                            >
                                <Icon>android</Icon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Rodar com Expo" className="button-expo">
                            <IconButton
                                component="a"
                                target="_blank"
                                href="https://expo.io/@guilhermecosta/devradar"
                            >
                                <img src="/assets/icons/expo.svg" alt="expo" />
                            </IconButton>
                        </Tooltip>
                        <Typography variant="subtitle1">DevRadar</Typography>
                        <Typography color="textSecondary" variant="caption">{intl.get('portfolio.devRadar')}</Typography>
                    </CardContent>
                    <CardActions className="card-actions">
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
                    </CardActions>
                </Card>
                <Card className="card">
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/pokedex.png`}
                        className="h-64"
                        component="a"
                        href="https://github.com/GuilhermeSilvaCosta/pokedex-angular"
                        target="_blank"
                    />
                    <CardContent>
                        <Typography variant="subtitle1">Pokedex</Typography>
                        <Typography color="textSecondary" variant="subtitle2">{intl.get('portfolio.pokedex')}</Typography>
                    </CardContent>
                </Card>
                <Card className="card">
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
                <Card className="card">
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
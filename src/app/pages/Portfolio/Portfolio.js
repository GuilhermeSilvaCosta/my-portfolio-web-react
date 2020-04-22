import React, { useEffect } from 'react';
import { Icon, Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import intl from 'react-intl-universal';
import googleAnalytics from 'app/services/googleAnalytics';

import './Portfolio.css';

function Portfolio() {

    useEffect(() => {
        googleAnalytics.pageview(window.location.pathname + window.location.search)
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-green-400 text-gray-800 p-10 pt-12 md:h-full">
            <Icon fontSize="large">assignment</Icon>
            <Typography variant="h2">{intl.get('portfolio.title')}</Typography>
            <div className="portfolio-grid pt-10">
                <Card>
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/myportfolio.png`}
                        className="h-64"
                        component="a"
                        href="https://github.com/GuilhermeSilvaCosta/my-portfolio-web-react"
                        target="_blank"
                    />
                    <CardContent>
                        <Typography variant="subtitle1">guilherme.solutions</Typography>
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
                <Card>
                    <CardMedia 
                        image={`${process.env.PUBLIC_URL}/assets/images/logos/guilhermeevanessa.png`}
                        className="h-64"
                        component="a"
                        target="_blank"
                        href="https://guilhermeevanessa.com.br"
                    />
                    <CardContent>
                        <Typography variant="subtitle1">Guilherme e Vanessa</Typography>
                        <Typography color="textSecondary" variant="subtitle2">{intl.get('portfolio.guilhermeVanessa')}</Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

}

export default Portfolio;
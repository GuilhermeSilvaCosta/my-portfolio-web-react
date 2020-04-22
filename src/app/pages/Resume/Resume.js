import React, { useEffect } from 'react';
import { Icon, Typography, Button } from '@material-ui/core'
import intl from 'react-intl-universal';
import MasterEvent from 'app/components/MasterEvent';
import SingleEvent from 'app/components/SingleEvent';
import SectionTitle from 'app/components/SectionTitle';
import Skill from 'app/components/Skill';
import googleAnalytics from 'app/services/googleAnalytics';

import './Resume.css'

function Resume() {

    useEffect(() => {
        googleAnalytics.pageview(window.location.pathname + window.location.search)
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-green-200 pt-12 text-gray-800">
            <Icon fontSize="large">assignment_ind</Icon>
            <Typography variant="h2">{intl.get('resume.resume')}</Typography>
            <div className="resume-grid">
                <div>
                    <MasterEvent icon={'history'} title={intl.get('resume.workHistory')} />
                    <SingleEvent first title={`${intl.get('APR')} 2019 - ${intl.get('CURRENT')}`}>
                        <Typography variant="subtitle1">FRONT END ENGINEER</Typography>
                        <Typography variant="body2" color="textSecondary">TRACKN'ME</Typography>
                        <Typography className="text-left pt-5" variant="caption">
                            {intl.get('resume.tracknMe')}
                        </Typography>
                    </SingleEvent>
                    <SingleEvent title={`${intl.get('APR')} 2019 - ${intl.get('CURRENT')}`}>
                        <Typography variant="subtitle1">DESKTOP DEVELOPER</Typography>
                        <Typography variant="body2" color="textSecondary">CUCA FRESCA INFORMÁTICA LTDA.</Typography>
                        <Typography className="text-left pt-5" variant="caption">
                            {intl.get('resume.cuca')}
                        </Typography>
                    </SingleEvent>
                    <SingleEvent title={'2019'}>
                        <Typography variant="subtitle1">MENOR APRENDIZ</Typography>
                        <Typography variant="body2" color="textSecondary">COLÉGIO PREVE OBJETIVO</Typography>
                        <Typography className="text-left pt-5" variant="caption">
                            {intl.get('resume.objetivo')}
                        </Typography>
                    </SingleEvent>
                    <MasterEvent icon={'school'} title={intl.get('resume.education')} />
                    <SingleEvent title="2017">
                        <Typography className="text-left" variant="subtitle1">ESPEC. EM DESENVOLVIMENTO WEB E APLICATIVOS MÓVEIS</Typography>
                        <Typography className="text-left" variant="body2" color="textSecondary">UNIVEM – CENTRO UNIVERSITÁRIO EURÍPEDES DE MARÍLIA</Typography>
                        <Typography className="text-left pt-5" variant="caption">
                            {intl.get('resume.univem')}
                        </Typography>
                    </SingleEvent>
                    <SingleEvent title="2012">
                        <Typography className="text-left" variant="subtitle1">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</Typography>
                        <Typography className="text-left" variant="body2" color="textSecondary">FATEC – FACULDADE DE TECNOLOGIA DO ESTADO DE SÃO PAULO</Typography>
                        <Typography className="text-left pt-5" variant="caption">
                            {intl.get('resume.fatec')}
                        </Typography>
                    </SingleEvent>
                    <SingleEvent title="2009">
                        <Typography className="text-left" variant="subtitle1">TÉCNICO EM INFORMÁTICA</Typography>
                        <Typography className="text-left" variant="body2" color="textSecondary">ETEC – ANTÔNIO DEVISATE</Typography>
                        <Typography className="text-left pt-5" variant="caption">
                            {intl.get('resume.etec')}
                        </Typography>
                    </SingleEvent>
                    <div className="py-4">
                        <Button 
                            component="a" 
                            variant="outlined"
                            href={`${process.env.PUBLIC_URL}/assets/docs/guilherme.pdf`}
                            download
                        >
                            DOWNLOAD CV
                        </Button>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-center py-8">
                        <SectionTitle title="CODING SKILLS" />
                    </div>
                    <div className="px-4 md:px-24">
                        <Skill className="my-2" key="1" name="HTML5" percent={90} />
                        <Skill className="my-2" key="2" name="CSS3" percent={80} />
                        <Skill className="my-2" key="3" name="AngularJS" percent={95} />
                        <Skill className="my-2" key="4" name="Angular" percent={65} />
                        <Skill className="my-2" key="5" name="NodeJS" percent={70} />
                        <Skill className="my-2" key="6" name="PostgreSQL" percent={80} />
                        <Skill className="my-2" key="7" name="ReactJS" percent={84} />
                        <Skill className="my-2" key="8" name="MongoDB" percent={45} />
                        <Skill className="my-2" key="9" name="Delphi/Lazarus" percent={90} />
                    </div>
                    <div className="flex justify-center py-8">
                        <SectionTitle title="DESIGN SKILLS" />
                    </div>
                    <div className="px-4 md:px-24">
                        <Skill name="Adobe XD" percent={50} />
                    </div>
                    <div className="flex justify-center py-8">
                        <SectionTitle title={intl.get('resume.attention')} />
                    </div>
                    <div className="px-4 md:px-24 flex justify-center">
                        <div className="bg-white rounded-lg" style={{ maxWidth: '400px'}}>
                            <img style={{marginTop: '-20px'}} className="h-20 w-20 rounded-full" src="assets/images/photos/perfil.jpeg" alt="" />
                            <Typography variant="subtitle1">GUILHERME COSTA</Typography>
                            <Typography color="textSecondary" variant="body2">DEVELOPER</Typography>
                            <p className="text-left px-8 pb-8 text-sm">
                                {intl.get('resume.message')} <span aria-label='' role="img">&#128521;</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
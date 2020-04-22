import React, { useEffect } from 'react';
import { Icon, Typography } from '@material-ui/core';
import intl from 'react-intl-universal';
import SectionTitle from 'app/components/SectionTitle';
import SocialButton from 'app/components/SocialButton';
import googleAnalytics from 'app/services/googleAnalytics';

function Contact() {

    useEffect(() => {
        googleAnalytics.pageview(window.location.pathname + window.location.search)
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-yellow-300 text-gray-800 h-full">
            <Icon fontSize="large">phone</Icon>
            <Typography variant="h2">{intl.get('contact.contact')}</Typography>
            <SectionTitle className="py-10" title={intl.get('contact.social')} />
            <div className="flex">
                <SocialButton href="https://github.com/GuilhermeSilvaCosta" className="hover:bg-black hover:text-white mr-1">
                    <i className="fab fa-github"></i>
                </SocialButton>
                <SocialButton href="https://www.facebook.com/tec.guilherme.dsc?ref=bookmarks" className="hover:bg-blue-700 hover:text-white mx-1">
                    <i className="fab fa-facebook-f"></i>
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/in/guilherme-costa-5621b461/" className="hover:bg-blue-500 hover:text-white mx-1">
                    <i className="fab fa-linkedin"></i>
                </SocialButton>
                <SocialButton href="https://www.instagram.com/guilhermedsc/?hl=pt-br" className="hover:bg-red-500 hover:text-white mx-1">
                    <i className="fab fa-instagram"></i>
                </SocialButton>
                <SocialButton href="https://twitter.com/GuiCosTI" className="hover:bg-blue-300 hover:text-white ml-1">
                    <i className="fab fa-twitter"></i>
                </SocialButton>
            </div>
            <SectionTitle className="py-10" title={intl.get('contact.contactMe')} />
            <div className="flex justify-center flex-wrap">
                <div className="flex flex-col items-center p-5">
                    <SocialButton href="https://api.whatsapp.com/send?phone=5514991075258" className="hover:bg-green-600 hover:text-white ml-1">
                        <i className="fab fa-whatsapp"></i>
                    </SocialButton>
                    <Typography variant="caption">CEL: +55 14 991075258</Typography>
                </div>
                <div className="flex items-center p-5">
                    <Typography>tec.guilherme.dsc@gmail.com</Typography>
                </div>
                <div className="flex flex-col items-center p-5">
                    <Icon>done</Icon>
                    <Typography>FREELANCE AVAILABLE</Typography>
                </div>
            </div>
        </div>
    )
}

export default Contact;
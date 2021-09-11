import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import './App.css';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import history from '@history'
import Loading from 'app/components/Loading';
import intl from 'react-intl-universal';
import BrazilFlag from 'app/components/BrazilFlag';
import UsaFlag from 'app/components/UsaFlag';
import { Select, MenuItem, Typography, Hidden } from '@material-ui/core';
import TopNavbar from 'app/components/TopNavbar';
import Provider from 'react-redux/es/components/Provider';
import store from './store';
import Navbar from 'app/components/Navbar';

const locales = {
  'pt-BR': require('app/locales/pt-BR.json'),
  'en-US': require('app/locales/en-US.json'),
};

function App() {

  const [locale, setLocale] = useState(locales[navigator.language] ? navigator.language : 'pt-BR');
  const [currentLocale, setCurrentLocale] = useState('');

  useEffect(() => {
    async function changeLocale() {
      await intl.init({
        currentLocale: locale,
        locales
      });

      setCurrentLocale(locale);
    }

    changeLocale();
  }, [locale])

  return (

    <AppContext.Provider>
      <Provider store={store}>
        <Router history={history}>
          {currentLocale &&
          <div className="App h-screen w-screen flex flex-row antialiased relative">
            {<Navbar />}
            <div className="absolute right-0 top-0 z-10 pt-12 md:pr-12">
              <Select 
                  value={locale} 
                  variant="outlined" 
                  className="bg-gray-400"
                  onChange={e => setLocale(e.target.value)}
              >
                  <MenuItem value="pt-BR">
                      <div className="flex flex-row">
                          <BrazilFlag style={{ width: '24px' }} />
                          <Typography>PT</Typography>
                      </div>
                  </MenuItem>
                  <MenuItem value="en-US">
                      <div className="flex flex-row">
                          <UsaFlag style={{ width: '24px' }} />
                          <Typography>EN</Typography>
                      </div>
                  </MenuItem>
              </Select>
            </div>
            <div className="relative h-full w-full overflow-auto">
              <Hidden smUp>
                <TopNavbar />
              </Hidden>
              <React.Suspense fallback={<Loading />}>
                {renderRoutes(routes)}
              </React.Suspense>
            </div>
          </div>}
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;

import React from 'react';
import Home from 'app/pages/Home';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: React.lazy(() => import('app/pages/About'))
    },
    {
        path: '/portfolio',
        component: React.lazy(() => import('app/pages/Portfolio'))
    },
    {
        path: '/resume',
        component: React.lazy(() => import('app/pages/Resume'))
    },
    {
        path: '/contact',
        component: React.lazy(() => import('app/pages/Contact'))
    }
];

export default Routes;
import React from 'react';
const GoodNewsPage = React.lazy(() => import('../containers/GoodNewsContainer/GoodNewsPage'));


export const employerRoutes = [
    {
        component: GoodNewsPage,
        exact: true,
        path: '/',
        title: 'Good news page',
        nextPath: null,
        failurePath: null,
        backBehaviour: {
            isInternal: true,
            path: null
        }
    },
];

import React from 'react';

const Questions = React.lazy(() => import('./containers/Questions'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/questions', name: 'Questions', component: Questions },

];

export default routes;

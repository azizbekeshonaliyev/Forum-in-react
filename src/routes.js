import React from 'react';

const QuestionMain = React.lazy(() => import('./views/Question/QuestionMain'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/questions', name: 'Questions', component: QuestionMain },

];

export default routes;

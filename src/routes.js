import React from 'react';

const QuestionMain = React.lazy(() => import('./views/Question/QuestionMain'));
const CreateQuestion = React.lazy(() => import('./containers/CreateQuestion'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/questions', name: 'Questions', component: QuestionMain },
  { path: '/question/create', name: 'Questions Create', component: CreateQuestion },
];

export default routes;

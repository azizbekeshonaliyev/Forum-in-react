import React from 'react';
import Navbar from "./views/include/Navbar";
import QuestionList from './views/Question/QuestionList';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <div className="container mb-5">
            <QuestionList></QuestionList>
        </div>
      </div>
  );
}

export default App;
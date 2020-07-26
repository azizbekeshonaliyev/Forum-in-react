import React, { Component } from 'react'
import RightMenu from './RightMenu';
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Questions = React.lazy(() => import('./../../containers/Questions'));
const QuestionShow = React.lazy(() => import('./../../containers/ShowQuestion'));

const QuestionMain = () => {
    let { path } = useRouteMatch();
    return (
        <div className="row pt-4">
            <div className="col-12 col-sm-12 col-md-9">
            <Switch>
                <Route exact path={path} component={Questions}></Route>
                <Route path={`${path}/:questionId`} component={QuestionShow}></Route>
            </Switch>
            </div>
            <RightMenu></RightMenu>                    
        </div>
    )
}

export default QuestionMain;

import React from 'react'

import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './Landing'
import TheacherList from './TeacherList';
import TheacherForm from './TeacherForm';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/"  exact component={Landing}/>
            <Route path="/study" component={TheacherList}/>
            <Route path="/give-classes" component={TheacherForm}/>


        </BrowserRouter>
    );
}

export default Routes;
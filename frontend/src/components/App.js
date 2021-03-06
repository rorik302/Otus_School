import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import CoursesList from "../pages/CoursesList";
import CourseCreate from "../pages/CourseCreate";
import CourseDetails from "../pages/CourseDetails";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const AppRoute = (props) => {
    const {layout: Layout, component: Component, ...rest} = props

    const route = () => {
        return (
            <Route {...rest} render={(props) => {
                return (
                    <Layout>
                        <Component {...props}/>
                    </Layout>
                )
            }}/>
        )
    }

    if(Layout && Component) {
        return route()
    }
    return null
}

const App = () => {
    return (
        <Router>
            <Switch>
                <AppRoute path="/" exact layout={MainLayout} component={CoursesList}/>
                <Route path="/courses">
                    <Switch>
                        <AppRoute path="/courses/create" layout={MainLayout} component={CourseCreate}/>
                        <AppRoute path="/courses/:id" layout={MainLayout} component={CourseDetails}/>
                    </Switch>
                </Route>
                <AppRoute path="/contacts" exact layout={MainLayout} component={Contacts}/>
                <AppRoute path="/login" exact layout={AuthLayout} component={Login}/>
                <AppRoute path="/registration" exact layout={AuthLayout} component={Registration}/>
            </Switch>
        </Router>
    )
}

export default App
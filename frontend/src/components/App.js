import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CoursesList from "../pages/CoursesList";
import Contacts from "../pages/Contacts";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import CourseDetails from "../pages/CourseDetails";
import CourseCreate from "../pages/CourseCreate";
import Registration from "../pages/Registration";

class AppRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {layout: Layout, component: Component, ...rest} = this.props

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
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <AppRoute path="/" exact layout={MainLayout} component={CoursesList}/>
                    <AppRoute path="/courses" layout={MainLayout}>
                        <Switch>
                            <AppRoute path="/courses/create" layout={MainLayout} component={CourseCreate}/>
                            <AppRoute path="/courses/:id" layout={MainLayout} component={CourseDetails}/>
                        </Switch>
                    </AppRoute>
                    <AppRoute path="/contacts" exact layout={MainLayout} component={Contacts}/>
                    <AppRoute path="/login" exact layout={AuthLayout} component={Login}/>
                    <AppRoute path="/registration" exact layout={AuthLayout} component={Registration}/>
                </Switch>
            </Router>
        )
    }
}

export default App
import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CoursesList from "../pages/CoursesList";
import Contacts from "../pages/Contacts";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import CourseDetails from "../pages/CourseDetails";

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
                <AppRoute path="/" exact layout={MainLayout} component={CoursesList}/>
                <AppRoute path="/courses/:id" layout={MainLayout} component={CourseDetails}/>
                <AppRoute path="/contacts" exact layout={MainLayout} component={Contacts}/>
                <AppRoute path="/login" exact layout={AuthLayout} component={Login}/>
            </Router>
        )
    }
}

export default App
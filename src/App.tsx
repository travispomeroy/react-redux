import React from "react";
import {Route, Switch} from "react-router-dom"
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNoteFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

const App: React.FC = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route component={PageNoteFound} />
            </Switch>
        </div>
    );
};

export default App;

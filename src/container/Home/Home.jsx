//Libraries
import React, { Component, Fragment, createContext } from 'react';
import { act } from 'react-dom/test-utils';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//Pages
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';

//Styling
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="nav">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube-component">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Switch>
                        <Route path="/youtube-component">
                            <YoutubeCompPage />
                        </Route>
                        <Route path="/product">
                            <Product />
                        </Route>
                        <Route path="/lifecycle">
                            <LifeCycleComp />
                        </Route>
                        <Route path="/" exact>
                            <BlogPost />
                        </Route>
                        <Route path="/detail-post/:postID" component={DetailPost} />
                        <Route path="/hooks" component={Hooks} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);
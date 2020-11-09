//Libraries
import React, { Component, Fragment, createContext } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//Pages
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';

//Styling
import './Home.css';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
    state = {
        totalOrder: 0
    }

    render() {
        return (
            <Router>
                <Provider value={this.state}>
                    <Fragment>
                        <div className="nav">
                            <Link to="/">Blog Post</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">LifeCycle</Link>
                            <Link to="/youtube-component">Youtube</Link>
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
                        </Switch>
                    </Fragment>
                </Provider>
            </Router>
        )
    }
}

export default Home;
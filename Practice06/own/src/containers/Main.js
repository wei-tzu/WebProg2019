import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Post/Posts";
// import PostRender from "./Posts/PostRender";

export default class Main extends Component {
    render() {
        return (
            <div>
                <div id="colorlib-page">
                        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                            <nav id="colorlib-main-menu" role="navigation">
                                    <h1 id="colorlib-logo"><a>Wei-Tzu</a></h1>
                                    <ul>
                                        <li><NavLink to="/home">Home</NavLink></li>
                                        <li><NavLink to="/posts">Posts</NavLink></li>
                                        <li><NavLink to="/authors">Authors</NavLink></li>
                                    </ul>
                            </nav>
                        </aside>
                </div>
                <div id="colorlib-main">
                    <div class="colorlib-about">
                        <div class="colorlib-narrow-content">
                            <div class="row row-bottom-padded-md">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                    <div class="about-desc">
                                        <span class="heading-meta"></span>
                                        <h2 class="colorlib-heading">Blog</h2>
                                        <Switch>
                                            <Route exact path="/posts" component={Posts}/>
                                            <Route path="/posts/:id?" />
                                            <Redirect from="/home" to="/" />
                                        </Switch>
                                    </div>
                                </div>
							</div>
						</div>
                    </div>
                </div>
                    
            </div>
        
        );
    }
}
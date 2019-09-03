import React from 'react'
import _ from 'lodash'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Registration from './components/users/Register'
import Login from './components/users/Login'
import Profile from './components/users/profile'
import Account from './components/users/account'
import Logout from './components/users/logout'
import ListPost from './components/posts/list'
import ShowPost from './components/posts/show'

function App(props) {

    return (
        <BrowserRouter>
            <div>
                <ul>
                    {
                        !_.isEmpty(props.user) ? (
                            <div>
                                <li><Link to='/users/profile'>Profile</Link></li>
                                <li><Link to='/users/account'>Account</Link></li>
                                <li><Link to='/posts'>Posts</Link></li>
                                <li><Link to='/users/logout'>Logout</Link></li>
                            </div>
                        ) : (
                                <div>
                                    <li><Link to='/users/register'>Register</Link></li>
                                    <li><Link to='/users/login'>Login</Link></li>
                                </div>
                            )

                    }

                </ul>

                <Route path='/users/register' component={Registration} exact={true} />
                <Route path='/users/login' component={Login} exact={true} />
                <Route path='/users/profile' component={Profile} exact={true} />
                <Route path='/users/account' component={Account} exact={true} />
                <Route path='/users/logout' component={Logout} exact={true} />
                <Route path='/posts' component={ListPost} exact={true}/>
                <Route path='/posts/:id' component={ShowPost} />


            </div>
        </BrowserRouter>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)
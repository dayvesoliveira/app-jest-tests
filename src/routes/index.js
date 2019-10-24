import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import { Provider } from 'react-redux'
// import configureStore from '../store'
// import { App } from '../App.jsx'

// import { default as ROUTES } from './post.routes'

// const initStore = configureStore()

const RouteSubRoute = ({component: Component, ...route}) => (
    <Route 
        exact={ route.exact }
        path={ route.path } 
        render={ props => <Component {...props} routes={ route.routes } /> }
        />
)

const Routes = ({
    routes,
    ...props
}) =>(
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {
                    routes && routes.map(
                        (route, index) =>(
                            <RouteSubRoute key={ index } {...route } />
                        )
                    )
                }
                {/* <Redirect from="/" to="/posts" /> */}
            </Switch>
        </Suspense>
)

export default Routes


// <Provider store={ initStore }>
    //     <Router>
    //         <Suspense fallback={<div>Loading...</div>}>
    //             <Switch>
    //             {
    //                 routes && routes.map((route, index) =>(
    //                     <RouteSubRoute 
    //                                 key={ index } 
    //                                 {...props }
    //                                 path={ route.path }
    //                                 exact={ route.exact }
    //                                 Component={ route.component}
    //                                 />
    //                     )
    //                 )
    //             }
    //             </Switch>
    //         </Suspense>
    //     </Router>
    // </Provider>

/*<Route 
    key={ index } exact={ exact }
    path={ path } 
    component={ ( component ? component : loadChildren ) } 
    render={ renderFunc }
    />
*/

// <Route exact path="/" component={ App } />
// <Route path="/posts/:id" component={ lazy(() => import('./components/crud/detail')) } />
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import configureStore from '../store'
// import { App } from '../App.jsx'

// import { default as ROUTES } from './post.routes'

// const initStore = configureStore()

// const RouteComponent = children =>(
//     <>
//     { children }
//     </>
// )

const RouteSubRoute = ({
    exact, 
    path,
    Component,
    routes,
    ...props
}) => (
    <Route 
        exact={ exact }
        path={ path } 
        render={ props => <Component {...props} routes={ routes } /> }
        />
)

const Routes = ({
    routes,
    ...props}) =>(
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            {
                routes && routes.map((route, index) =>(
                    <RouteSubRoute 
                                key={ index } 
                                {...props }
                                path={ route.path }
                                exact={ route.exact }
                                Component={ route.component}
                                />
                    )
                )
            }
            </Switch>
        </Suspense>
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
)

export default Routes

/*<Route 
    key={ index } exact={ exact }
    path={ path } 
    component={ ( component ? component : loadChildren ) } 
    render={ renderFunc }
    />
*/

// <Route exact path="/" component={ App } />
                    // <Route path="/posts/:id" component={ lazy(() => import('./components/crud/detail')) } />
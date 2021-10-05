import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider,createGenerateClassName } from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

// We only tried to load or import code related to marketing or auth app we we want to.
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

// create generic prefix for class names in production.
const generateClassName = createGenerateClassName({
    productionPrefix:'co',
});

export default () => {
const [isSignedIn, setIsSignedIn] = useState(false);

return (
    // We need to use Browser History in Container
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                 <Header onSignOut={() => setIsSignedIn(false) } isSignedIn={isSignedIn} />
                {/* Some after 10-15 years we want to change the container to some other frameWork 
                like Angular or something else, We need near zero coupling between container and marketing app,
                So if we want to change the container there is no need to change in marketing app, that why we need to
                wrap the mount function into component here!  */}
                
                {/* Show Loading Progress Bar */}
                <Suspense fallback={<Progress/>}>
                     <Switch>
                        {/* These two routes are going to handle which different sub apps / micro-frontend are going to show */}

                        <Route path="/auth" >
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingLazy}/>
                     </Switch>
                </Suspense>
              
            </div>
        </StylesProvider>
    </BrowserRouter>
 );
};
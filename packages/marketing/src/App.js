import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider,createGenerateClassName } from "@material-ui/core/styles";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// create generic prefix for class names in production.
const generateClassName = createGenerateClassName({
    productionPrefix:'ma',
});

export default ({ history }) => {
    //console.log(history)
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
               {/* We need to use Memory History in sub-app */}
               {/* Router Creates a copy of history that doesn't make it's own history we need to give them */}
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}/>
                        <Route path="/" component={Landing}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}

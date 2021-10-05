import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider,createGenerateClassName } from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

// create generic prefix for class names in production.
const generateClassName = createGenerateClassName({
    productionPrefix:'au',
});

export default ({ history, onSignIn }) => {
    //console.log(history)
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
               {/* We need to use Memory History in sub-app */}
               {/* Router Creates a copy of history that doesn't make it's own history we need to give them */}
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" >
                            <SignIn onSignIn={onSignIn}/>
                        </Route>
                        <Route path="/auth/signup" >
                             <SignUp onSignIn={onSignIn}/>
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}

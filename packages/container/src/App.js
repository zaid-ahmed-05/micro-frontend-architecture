import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from './components/MarketingApp'

export default () => {
return (
    <BrowserRouter>
    <div>
        <Header/>
          {/* Some after 10-15 years we want to change the container to some other frameWork 
          like Angular or something else, We need near zero coupling between container and marketing app,
          So if we want to change the container there is no need to change in marketing app, that why we need to
          wrap the mount function into component here!  */}
        <MarketingApp/>
    </div>
    </BrowserRouter>
 );
};
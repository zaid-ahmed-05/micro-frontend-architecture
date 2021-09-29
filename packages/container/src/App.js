import React from "react";
import MarketingApp from './components/MarketingApp'

export default () => {
return (
    <div>
        <h1>Hi there !@ @@</h1> 
         <hr/> 
          {/* Some after 10-15 years we want to change the container to some other frameWork 
          like Angular or something else, We need near zero coupling between container and marketing app,
          So if we want to change the container there is no need to change in marketing app, that why we need to
          wrap the mount function into component here!  */}
        <MarketingApp/>
    </div>
 );
};
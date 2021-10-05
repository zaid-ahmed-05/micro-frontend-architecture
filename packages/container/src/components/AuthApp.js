import React,{ useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) =>{

// We are getting a reference to the HTML element here that is being displayed on screen    
const ref = useRef(null);
// This history object is currently being used inside of container, means copy of BrowserHistory
const history = useHistory();

//We only try to call the mount function one time when this component (MarketingApp) 
//first is displayed on the screen that's why we need useEffect.
useEffect(()=>{
   
    //We are passing reference to the HTML element into the mount function, mount will take it and it's going 
    //to try to create an instance of our marketing app and render it into below div.
    //passing a function called onNavigate()
// onNavigate() will create a call back and then call the mount function and provide that as callback as onNavigate
     const { onParentNavigate } = mount(ref.current,{
        // We need to tell to mount function what it's initial path should be
        initialPath: history.location.pathname,
        //pathname is field in location so instead of getting whole object with different fields we take only one. 
        onNavigate:({ pathname: nextPathname }) => {

            // What currently at we are in path get pathname
            const { pathname } = history.location;
            //Verify our current path and next one is different ! otherwise don't occur navigation
            if(pathname !== nextPathname){
                // Navigate this to the new path
                history.push(nextPathname);
            }
        },
        // only going to call this call back whenever user actually signs into application
        onSignIn,
    });
    // Anytime change into the browser history we will call parent navigator.
    history.listen(onParentNavigate); 
    // only try to run this function when our marketing app component is first rendered to the screen. 
    // dependency useEffect array
},[])


// This code showing us a div
return <div ref={ref}></div> 
};

//Output:
//What we got ? if we want to change to some other framework the layout must be the same , you don't 
//need to change this in serious way.
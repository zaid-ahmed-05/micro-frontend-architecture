import React,{ useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp'

export default () =>{

// We are getting a reference to the HTML element here that is being displayed on screen    
const ref = useRef(null);

//We only try to call the mount function one time when this component (MarketingApp) 
//first is displayed on the screen that's why we need useEffect.
useEffect(()=>{
   
    //We are passing reference to the HTML element into the mount function, mount will take it and it's going 
    //to try to create an instance of our marketing app and render it into below div.
    mount(ref.current);
})

// This code showing us a div
return <div ref={ref}></div>  
};

//Output:
//What we got ? if we want to change to some other framework the layout must be the same , you don't 
//need to change this in serious way.
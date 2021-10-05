import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount Function to start up the app

// Mount Function is receiving a second argument called onNavigate it's a callback function
// It seems whenever navigation occurs we call this onNavigate function
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath } ) =>{


  // A copy of memoryHistory 
  // we are providing defaultHistory only on development
  // if we are given a defaultHistory let's use it otherwise we will default to creating our own MemoryHistory
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  // Make Sure that before calling history, listen should onNavigate provided.
  if(onNavigate){
    //We then createMemoryHistory object whenever URL changes automatically call onNavigate function.
    history.listen(onNavigate);

  }

  ReactDOM.render( <App onSignIn={onSignIn} history={history} />, el);

  // communication from container down to marketing application. This mount function will return an object
  return {
    onParentNavigate({ pathname: nextPathname }) {

      //console.log('Container just navigated');
      
      // What currently at we are in path get pathname
      const { pathname } = history.location;
      //console.log(nextPathname);
      //Verify our current path and next one is different ! otherwise don't occur navigation
      if(pathname !== nextPathname) {
        // Navigate this to the new path
         history.push(nextPathname);
      }
    },
  };
};

// if we are in development and in isolation.
// call mount immediately

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_auth-dev-root');

    if(devRoot){
        // We should make use of browser history instead of memory history that would allow us to have easier to 
        // development at localhost e.g: 8080 or 8081
        mount(devRoot,{ defaultHistory: createBrowserHistory() });
    }
}

// We are running through container
// and we should export the mount function

export { mount };
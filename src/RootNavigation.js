import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
let stat = 'login'
export function Listner(){
  navigationRef.current?.addListener('state', (e) => {
    stat = (e.data.state.routes[e.data.state.routes.length - 1].name);
    
  });
}
export function stats(params) {
  return(stat)
}

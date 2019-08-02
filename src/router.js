import React from 'react';  
import {Switch, Route,HashRouter} from 'react-router-dom'  
import P1 from './p1';
import P2 from './p2';
import P3 from './p3';
import NotFound from './p404';
 

const MainRoute = () => (
  <HashRouter>
	  <Switch> 
		<Route exact path="/" component={P1}/>  
		<Route path="/p2" component={P2} />  
		<Route path="/p3" component={P3} />
		<Route component={NotFound}/>
	  </Switch>
  </HashRouter>
)  
  
export default MainRoute;  
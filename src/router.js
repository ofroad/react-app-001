import React from 'react';  
import {Switch, Route,HashRouter} from 'react-router-dom'  
import P1 from './p1';
import P2 from './p2';
import P3 from './p3';
import P4 from './p4';
import P41 from './p4-1';
import P5 from './p5';
import P51 from './p5-1';
import P52 from './p5-2';
import P6 from './p6';
import NotFound from './p404';
 

const MainRoute = () => (
  <HashRouter>
	  <Switch> 
		<Route exact path="/" component={P1}/>  
		<Route path="/p2" component={P2} />  
		<Route path="/p3" component={P3} />
		<Route path="/p4" component={P4} />
		<Route path="/p4-1" component={P41} />
		<Route path="/p5" component={P5} />
		<Route path="/p5-1" component={P51} />
		<Route path="/p5-2" component={P52} />
		<Route path="/p6" component={P6} />
		<Route component={NotFound}/>
	  </Switch>
  </HashRouter>
)  
  
export default MainRoute;  
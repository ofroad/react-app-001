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
import P7 from './p7';
import P8 from './p8';
import P9 from './p9';
import P10 from './p10';
import P11 from './p11';
import P12 from './p12';
import P13 from './p13';
import P14 from './p14';
import P15 from './p15';
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
		<Route path="/p7" component={P7} />
		<Route path="/p8" component={P8} />
		<Route path="/p9" component={P9} />
		<Route path="/p10" component={P10} />
		<Route path="/p11" component={P11} />
		<Route path="/p12" component={P12} />
		<Route path="/p13" component={P13} />
		<Route path="/p14" component={P14} />
		<Route path="/p15" component={P15} />
		<Route component={NotFound}/>
	  </Switch>
  </HashRouter>
)  
  
export default MainRoute;  
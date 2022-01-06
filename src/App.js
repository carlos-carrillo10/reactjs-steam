import React, { Component } from 'react';
import './assets/styles/App.css';
import './assets/styles/output.css'; //here we user Tailwind CSS rendered styles
import { Home } from './views/Home';
import { BrowserRouter, Routes, Route, Link, Switch  } from 'react-router-dom'; 
import { Details } from './views/Details';

class App extends Component {
  render() {
  return <div>

   
     <BrowserRouter>

     {/* navigationd design */}
     <div>
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav> */}

         {/* react-router-dom Version 6 */}

   {/* <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route exact path='/details/:id' element={<Details />} />
   </Routes>*/}


 {/* react-router-dom Version 5.2 */}
    <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/details/:id' component={Details}/>
         {/* always at the botton, this means default page if react does not find rquested page */}
         {/* <Route component={NotFound}/>  */}
    </Switch>
    </div>
  </BrowserRouter>

 
     </div>  
  }
}

export default App;

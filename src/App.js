import React, { Component } from 'react';
import './assets/styles/App.css';
import './assets/styles/output.css'; //here we user Tailwind CSS rendered styles
import { Home } from './views/Home';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'; //react-router-dom Version 6

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

    <Routes>
        <Route index path='/' element={<Home />} />
    </Routes>
    </div>
  </BrowserRouter>
     </div>  
  }
}

export default App;

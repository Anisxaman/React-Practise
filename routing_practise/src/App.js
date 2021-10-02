import { Route, Switch } from 'react-router';

import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';

import {
  BrowserRouter 
 
} from "react-router-dom";
import NotFound from './components/Not Found/NotFound';


function App() {
  return (
    <div className="App">

      {/* <h1>This is about us page</h1> */}
      <BrowserRouter>
           <Switch>
             <Route path="/home">
               <Home></Home>
             </Route>
             <Route  path="/friends">
               <Friends></Friends>
             </Route>
             <Route path='/about'>
               <About></About>
             </Route>
             <Route path='*'>
              <NotFound></NotFound>
             </Route>
           </Switch>

      </BrowserRouter>
      

      

    </div>
  );
}

export default App;

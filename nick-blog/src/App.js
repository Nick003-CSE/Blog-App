//import logo from './logo.svg';
import Navbar from './Navbar';
//import Home0 from './Home0'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';

function App() {     //The code written inside the function is not html it is JSX.//App is the root component.
  //Then we do the nesting of other components in the root (app) component.
  // const title='Welcome to the new blog';
  // const likes=50;
  // const link="http://www.google.com" ;         
  return (
    <Router>
      <div className="App"> 
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>

          <Route path='/create'>
              <Create />
          </Route>

          <Route path='/blogs/:id'>
              <BlogDetails />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
     </div>
    </div>
    </Router>
    
  );
}

export default App;

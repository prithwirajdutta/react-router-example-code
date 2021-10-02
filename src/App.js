import './App.css';
import Nav from './Nav.js';
import About from './About.js';
import Shop from './Shop.js';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
return (
    <div className="App">
      <Router>
        <Nav/>
       <Switch>
       <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/shop" component={Shop}></Route>
       </Switch>
      </Router>
    </div>
  );
}

const Home = () =>{
 return( <div>
  <h1>Home</h1>
</div>);
}

export default App;

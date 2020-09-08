// Import React
import React from 'react';

// Import styles of component App
import './App.css';

// Import Components
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Workspace from './components/Workspace/Workspace';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>

        <Route exact path='/'>
            <Home />
        </Route> 

        <Route path='/workspace'>
            <Workspace />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;

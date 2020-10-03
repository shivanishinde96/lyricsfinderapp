import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from './context'
import Navbar from './components/Layout/Navbar';
import Index from './components/Layout/Index'
import Lyrics from './components/tracks/Lyrics'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
function App() {
  return (
    <Provider>
    <Router>
      <>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/lyrics/track/:id' component={Lyrics}/>
        </Switch>
      </div>
      </>
    </Router>
    </Provider>
  )
}

export default App;

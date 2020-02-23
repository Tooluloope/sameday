import React, { useState, useEffect } from 'react';
import './App.css';
import { SideBar } from './components/side-bar/side-bar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { FirstPage } from './pages/firstpage/firstpage';

function App() {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    getOpen()
    
  }, [])

  const getOpen = (open) => {
    setOpen(open)
  }
    
  return (
    <>
      <Router >
        <SideBar  getOpen = {getOpen} />
        <div className="App">
          <Switch>
            <Route exact  path="/">
              <FirstPage open={open} />
            </Route>
            
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

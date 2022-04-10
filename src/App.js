import React from "react"
import HomePage from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProvenancePage from "./pages/Provenance"
import WaitingPage from './pages/Wait'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/provenance' exact component={ProvenancePage}/>
        <Route path='/waiting' exact component={WaitingPage}/>
      </Switch>
    </Router>
  )
}

export default App
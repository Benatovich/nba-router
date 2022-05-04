import {
  // Link, Redirect,
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
// import './App.css'
import Layout from './views/Layout'
import Home from './views/Home'
import TeamDetail from './views/TeamDetail'
import Conference from './views/Conference'

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team/:teamId">
            <TeamDetail />
          </Route>
          <Route path="/conference">
            <Conference />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

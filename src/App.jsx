import {
  Link, Redirect,
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
// import './App.css'
import Layout from './views/Layout'
import Home from './views/Home'
import Details from './views/Details'

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/characters/:id">
          <Details />
        </Route>
        <Route path="/characters">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to='/characters' />
        </Route>
      </Switch>
    </Layout>
  )
}

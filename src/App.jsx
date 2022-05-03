import {
  // Link, Redirect,
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
// import './App.css'
import Layout from './views/Layout'
import Home from './views/Home'
import CharacterDetail from './views/CharacterDetail'
import Game from './views/Game'

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/character/:characterId">
            <CharacterDetail />
          </Route>
          <Route path="/Game">
            <Game />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

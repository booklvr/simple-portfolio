import { lazy, Suspense } from 'react'
import { GlobalStyle } from './globalStyles'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Resume from './Pages/Resume'

const Home = lazy(() => import('./Pages/Home/index.js'))

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Router history={createBrowserHistory}>
          <GlobalStyle />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/resume' component={Resume} exact />
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}

export default App

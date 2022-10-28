import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, ErrorPage } from './pages'
import { Navbar, Footer } from './components'
import styled from 'styled-components'
function App() {
 return (
  <Router>
   <Wrapper>
    <Navbar  />
    <Switch>
     <Route exact path="/">
      <Home  />
     </Route>

     <Route path="*">
      <ErrorPage />
     </Route>
    </Switch>
    <Footer />
   </Wrapper>
  </Router>
 )
}

const Wrapper = styled.div`

`
export default App

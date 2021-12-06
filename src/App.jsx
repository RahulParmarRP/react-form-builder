import logo from './logo.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import FormsList from './pages/FormsList'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './configs/theme'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import Toolbar from '@mui/material/Toolbar'
import FormResponse from './pages/FormResponse'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <Navbar />
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Switch>
            <Route exact path={'/'} component={Dashboard} />
            <Route exact path={'/forms'} component={FormsList} />
            <Route exact path={'/forms/:id'} component={FormResponse} />
            <Redirect to={'/'} />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

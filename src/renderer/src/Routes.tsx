import { Router } from '../../lib/electron-router-dom'
import { Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/About'
import Create from './pages/Create'
import Detail from './pages/Detail'
import { Layout } from './components/layout/Layout'

export function Routes(): React.JSX.Element {
  return (
    <Router
      main={
        <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
        </Route>
      }
      detail={
        <Route>
          <Route path="/" element={<Detail />} />
        </Route>
      }
    />
  )
}

import { Router } from '../../lib/electron-router-dom'
import { Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/About'
import Create from './pages/Create'
import Detail from './pages/Detail'

export function Routes(): React.JSX.Element {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
        </>
      }
      detail={
        <>
          <Route path="/" element={<Detail />} />
        </>
      }
    />
  )
}

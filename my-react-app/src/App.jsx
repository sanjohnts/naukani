import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import { pages } from './routes'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

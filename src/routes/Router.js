import React, { useLayoutEffect } from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Categories from '../pages/categories'

export default function Router() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)

    if (window.history.action === 'POP') {
      window.addEventListener('unload', (e) => {
        return window.scrollTo(0, 0)
      })
    }
    if (window.history.scrollRestoration) {
      if (window.history.scrollRestoration === 'auto') {
        window.history.scrollRestoration = 'manual'
      }
      window.addEventListener('unload', () => {
        return window.scrollTo(0, 0)
      })
    }

    return () => {
      return window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  )
}

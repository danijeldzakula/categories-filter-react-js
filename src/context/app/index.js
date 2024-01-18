import React, { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const [logged, setLogged] = useState(false)

  const values = useMemo(() => {
    return {
      logged,
      setLogged,
    }
  }, [logged, setLogged])

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

const useUsers = () => {
  return useContext(AppContext)
}

export { AppProvider, useUsers }

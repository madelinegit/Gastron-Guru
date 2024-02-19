import { Outlet } from 'react-router-dom'
import { loadChefs } from './store/Conventional/thunk'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadChefs())
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default App

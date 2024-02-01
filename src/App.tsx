import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.ts'

function App() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { Provider } from 'react-redux'
import { store } from './store'
// import { HashRouter } from 'react-router-dom'

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <HashRouter> */}
        <AppRouter />
        {/* </HashRouter> */}
      </BrowserRouter>
    </Provider>
  )
}

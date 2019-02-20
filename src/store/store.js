import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'
import initReducer from './reducers/users';

const epicMiddleware = createEpicMiddleware()

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    initReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  )

  epicMiddleware.run(rootEpic)

  return store
}

export default configureStore

import { createStore, applyMiddleware } from 'redux'
import { createRouterMiddleware } from 'connected-next-router'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// ---

import { rootReducer } from './reducers'

// ---

const middlewares = [createRouterMiddleware(), thunk]

if (process.env.NODE_ENV === 'development') {
	let logger = createLogger()
	middlewares.push(logger)
}

const initStates = {}

// ---

export const store = createStore(
	rootReducer,
	initStates,
	applyMiddleware(...middlewares)
)

// check this for redux pattern with middleware
// https://github.com/easyCZ/grpc-web-hacker-news

export type RootStoreType = typeof store

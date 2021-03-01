import { combineReducers } from 'redux'
import { routerReducer } from 'connected-next-router'

// ---

import { sthReducer } from './sth.reducer'

// ---

export const rootReducer = combineReducers({
	sth: sthReducer,
	router: routerReducer
})

export type RootState = ReturnType<typeof rootReducer>

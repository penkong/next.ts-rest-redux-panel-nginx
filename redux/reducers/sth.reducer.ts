import produce, { Draft } from 'immer'
import { Reducer } from 'redux'

// ---

import { STHActionTypeEnum } from '../actions-enums'
import { SthAction } from '../actions-interface'

// ---

interface INewState {
	sth: string
}

const initialState: INewState = {
	sth: 'hellow'
}

// ---

export const sthReducer: Reducer<INewState, SthAction> = produce(
	(state: INewState = initialState, action: SthAction): INewState => {
		switch (action.type) {
			default:
				return state
		}
	},
	initialState
)

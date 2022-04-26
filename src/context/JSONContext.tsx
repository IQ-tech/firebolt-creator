import React, { createContext, useState, useReducer, useEffect } from 'react';

import { IFireboltJSON, IStep } from '@/types/fireboltJSON';

import { temporaryMock } from './temporaryMock';

type JSONAction =
	{
		type: 'ADDNEWSTEP';
		payload: IStep;
	}
interface IJSONProviderValues {
	currentJSON: IFireboltJSON;
	dispatch: React.Dispatch<JSONAction>;
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {

	function reducer(state: IFireboltJSON, action: JSONAction) {
		const { type, payload } = action;

		switch (type) {
			case 'ADDNEWSTEP':
				return {
					...state,
					steps: [
						...state.steps,
						payload
					]
				};
			default:
				return state
		}
	}

	const [currentJSON, dispatch] = useReducer(reducer, temporaryMock)

	return (
		<JSONContext.Provider value={{ currentJSON, dispatch }}>
			{children}
		</JSONContext.Provider>
	)
}
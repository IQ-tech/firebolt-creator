import React, { createContext, useState, useReducer, useEffect } from 'react';

import { IFireboltJSON, IStep } from '@/types/fireboltJSON';

import { temporaryMock } from './temporaryMock';

type JSONAction =
	{
		type: 'ADDNEWSTEP';
		payload: IStep;
	} | {
		type: 'EDITSTEP';
		payload: any;
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
			case 'EDITSTEP':
				const currentSteps = [...state.steps]
				const edittedStep = { step: payload.step }
				let indexToRemove

				currentSteps.find((step, index) => {
					if(step.step.slug === payload.slug) {
						indexToRemove = index
						return  
					}
				})

				currentSteps.splice(indexToRemove, 1)
				currentSteps.splice(indexToRemove, 0, edittedStep)

				return {
					...state,
					steps: currentSteps
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
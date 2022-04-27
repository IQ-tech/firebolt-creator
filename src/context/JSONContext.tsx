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
	} | {
		type: 'DELETESTEP';
		payload: string;
	}
interface IJSONProviderValues {
	currentJSON: IFireboltJSON;
	dispatch: React.Dispatch<JSONAction>;
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {

	function reducer(state: IFireboltJSON, action: JSONAction) {
		const { type, payload } = action;

		const currentSteps = [...state.steps]

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
				const edittedStep = { step: payload.step }
				let indexToRemoveOldVersionStep

				currentSteps.find((step, index) => {
					if(step.step.slug === payload.slug) {
						indexToRemoveOldVersionStep = index
						return  
					}
				})

				currentSteps.splice(indexToRemoveOldVersionStep, 1)
				currentSteps.splice(indexToRemoveOldVersionStep, 0, edittedStep)

				return {
					...state,
					steps: currentSteps
				};
			case 'DELETESTEP':
				let indexToRemoveStep

				currentSteps.find((step, index) => {
					if(step.step.slug === payload) {
						indexToRemoveStep = index
						return  
					}
				})

				currentSteps.splice(indexToRemoveStep, 1)

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
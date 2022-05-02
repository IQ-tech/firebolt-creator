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
	} | {
		type: 'DELETEFIELD';
		payload: {
			step: string;
			field: string;
		};
	}
interface IJSONProviderValues {
	currentJSON: IFireboltJSON;
	dispatch: React.Dispatch<JSONAction>;
	visibleStep: IStep;
	setVisibleStep: React.Dispatch<React.SetStateAction<IStep>>;
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {

	function reducer(state: IFireboltJSON, action: JSONAction) {
		const { type, payload } = action;

		const currentSteps = [...state.steps]

		switch (type) {
			case 'ADDNEWSTEP': {
				return {
					...state,
					steps: [
						...state.steps,
						payload
					]
				};
			}
			case 'EDITSTEP': {
				const newCurrentSteps = currentSteps.map(step => {
					if(step.step.slug === payload.slug) {
						return { step: payload.step }
					}

					return step

				})

				return {
					...state,
					steps: newCurrentSteps
				};
			}
			case 'DELETESTEP': {
				const newCurrentSteps = currentSteps.filter(step => step.step.slug !== payload)

				return {
					...state,
					steps: newCurrentSteps
				};
			}
			case 'DELETEFIELD': {
				const newCurrentSteps = currentSteps.map(step => {
					if(step.step.slug === payload.step) {
						const newCurrentFields = step.step.fields.filter(field => field.slug !== payload.field)
						step.step.fields = newCurrentFields
					}

					return step
				})

				return {
					...state,
					steps: [newCurrentSteps[0]]
				};
			}
			default:
				return state
		}
	}

	const [currentJSON, dispatch] = useReducer(reducer, temporaryMock)

	const [visibleStep, setVisibleStep] = useState<IStep>(currentJSON.steps[0])

	return (
		<JSONContext.Provider value={{ currentJSON, dispatch,  visibleStep, setVisibleStep }}>
			{children}
		</JSONContext.Provider>
	)
}
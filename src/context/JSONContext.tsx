import React, { createContext, useState } from 'react';

import { IFireboltJSON } from '@/types/fireboltJSON';

import { temporaryMock } from './temporaryMock';

interface IJSONProviderValues {
	currentJSON: IFireboltJSON;

	setCurrentJSON: React.Dispatch<React.SetStateAction<IFireboltJSON>>;
	
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {
	const [currentJSON, setCurrentJSON] = useState<IFireboltJSON>(temporaryMock)

	return (
		<JSONContext.Provider value={{ currentJSON, setCurrentJSON }}>
			{children}
		</JSONContext.Provider>
	)
}
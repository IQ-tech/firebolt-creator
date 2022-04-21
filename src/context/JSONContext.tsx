import { createContext, useState } from 'react';

import { IFireboltJSON } from '@/types/fireboltJSON';

import { temporaryMock } from './temporaryMock';

export const JSONContext = createContext({} as IFireboltJSON)

export function JSONProvider({ children }) {
	const [currentJSON, setCurrentJSON] = useState<IFireboltJSON>(temporaryMock)

	return (
		<JSONContext.Provider value={{ currentJSON, setCurrentJSON }}>
			{children}
		</JSONContext.Provider>
	)
}
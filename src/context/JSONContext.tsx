import { createContext, useState } from 'react'

interface IUIProps {
	label: string;
	placeholder: string;
}

interface IUIStyles {
	size: string;
}

interface IValidators {
	type: string;
}

interface IJSON {
	slug: string
	"ui:widget": string;
	"ui:props": IUIProps;
	"ui:styles": IUIStyles;
	validators: IValidators[];
	meta: any;
}

export const JSONContext = createContext<IJSON[] | null>(null)

export function JSONProvider({ children }) {
	const [currentJSON, setCurrentJSON] = useState<IJSON[]>([
		{
			slug: "name",
			"ui:widget": "Text",
			"ui:props": {
				label: "Nome completo",
				placeholder: "Nome completo",
			},
			"ui:styles": {
				size: "half",
			},
			validators: [{ type: "required" }, { type: "name" }],
			meta: {},
		},
	])

	return (
		<JSONContext.Provider value={{ currentJSON, setCurrentJSON }}>
			{children}
		</JSONContext.Provider>
	)
}
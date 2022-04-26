TODO
//typar as props que possuem valores fixos

interface IFlows {
	slug: string;
	steps: string[];
}

interface IUIProps {
	label?: string;
	placeholder?: string;
}

interface IUIStyles {
	size: string;
}

interface IValidators {
	type: string;
}

interface IField {
	slug: string;
	"ui:widget": string;
	"ui:props": IUIProps,
	validators: IValidators[]
	meta: any;
}

interface IStep {
	step: {
		slug: string;
		type: string;
		friendlyname: string;
		fields: IField[]
	}
}

interface IFireboltJSON {
	"$schema-version": string;
	"$form-version": string;
	"business": string;
	"webhook": {
		"url": string;
		"headers": { "X-API-KEY": string; }
	};
	"flowss": IFlows[];
	"steps": IStep[];
}

export { IFireboltJSON, IStep, IUIProps, IUIStyles, IValidators, IField }
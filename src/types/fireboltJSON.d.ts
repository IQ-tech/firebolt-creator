TODO;
//typar as props que possuem valores fixos

interface IFlow {
  slug: string;
  steps: string[];
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
  "ui:props-preset"?: string;
  conditional?: string;
  "ui:props"?: {
    [propKey: string]: any;
  };
  "ui:styles"?: {
    size: string;
  };
  validators?: IValidators[];
  meta?: any;
}

interface IStep {
  step: {
    slug: string;
    type: string;
    friendlyname: string;
    fields: IField[];
  };
}

interface IFireboltJSON {
  name: string;
  "$schema-version": string;
  "$form-version": string;
  business: string;
  webhook: {
    url: string;
    headers: { "X-API-KEY": string };
  };
  tracks: IFlow[];
  steps: IStep[];
}

export {
  IFireboltJSON,
  IStep,
  IUIProps,
  IUIStyles,
  IValidators,
  IField,
  IFlow,
};

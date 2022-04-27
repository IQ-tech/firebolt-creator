// todo - remove

export const mockFlows = [
  {
    slug: "default",
    steps: [
      "documents",
      "address",
      "bills",
      "cenoura",
    ],
  },
  {
    slug: "alternative",
    steps: [
      "documents",
      "cenoura",
      "bills",
    ],
  },
];

export const mockSteps = [
  {
    step: {
      slug: "documents",
      type: "form",
      friendlyname: "Documentos",
      fields: [
        {
          slug: "brazil_id_number",
          "ui:widget": "Text",
          "ui:props": {
            label: "Número do documento",
          },
          validators: [{ type: "required" }],
          meta: {},
        },
      ],
    },
  },
  {
    step: {
      slug: "address",
      type: "form",
      friendlyname: "Endereço",
      fields: [
        {
          slug: "zipcode",
          "ui:widget": "CEP",
          "ui:props-preset": "br-cep",
          "ui:props": {
            relatedFieldsSlugs: {
              cityFieldSlug: "city",
              stateFieldSlug: "state",
              streetFieldSlug: "street_address",
              additionalAddressFieldSlug: "additional_info",
              neighborhoodFieldSlug: "neighborhood",
            },
          },
          validators: [{ type: "required" }, { type: "cep" }],
        },
        {
          slug: "street_address",
          "ui:widget": "Text",
          "ui:props": {
            label: "Endereço",
            placeholder: "Ex.: Av Paulista",
            readonly: true,
          },
          validators: [{ type: "required" }],
        },
        {
          slug: "street_number",
          "ui:widget": "Number",
          "ui:props": {
            label: "Número",
          },
          validators: [{ type: "required" }],
          meta: {},
        },
        {
          slug: "additional_info",
          "ui:widget": "Text",
          "ui:props": {
            label: "Complemento",
            placeholder: "Ex.: Apto 25 bl C",
          },
          meta: {},
        },
        {
          slug: "neighborhood",
          "ui:widget": "Text",
          "ui:props": {
            label: "Bairro",
            placeholder: "Ex.: Centro",
            readonly: true,
          },
          validators: [{ type: "required" }, { type: "nonNumeric" }],
          meta: {},
        },
        {
          slug: "city",
          "ui:widget": "Text",
          "ui:props": {
            label: "Cidade",
            readonly: true,
          },
          validators: [{ type: "required" }, { type: "nonNumeric" }],
          meta: {},
        },
        {
          slug: "state",
          "ui:widget": "Select",
          "ui:props-preset": "br-states",
          "ui:props": {
            label: "Estado",
          },
          validators: [{ type: "required" }],
          meta: {},
        },
      ],
    },
  },
  {
    step: {
      slug: "bills",
      type: "iq_contas",
      friendlyname: "Adicionar Contas",
      sharedata: true,
      fields: [],
    },
  },
  {
    step: {
      slug: "cenoura",
      type: "address",
      friendlyname: "Adicionar Contas",
      sharedata: true,
      fields: [],
    },
  },

];
export const mockFields = [
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
  {
    slug: "cpf",
    "ui:widget": "Text",
    "ui:props-preset": "br-cpf",
    "ui:props": {label: "Cpf",},
    validators: [{ "type": "required" }, { "type": "cpf" }],
    meta: {},
  },
  {
    slug: "income",
    "ui:props-preset": "br-currency",
    "ui:widget": "Text",
    "ui:props": {
      label: "Renda Principal",
    },
    validators: [{ "type": "required" }],
  },
  {
    slug: "phone",
    "ui:widget": "Text",
    "ui:props-preset": "br-phone",
    "ui:props": {
      label: "Celular com DDD",
    },
    validators: [{ "type": "required" }, { "type": "phone" }],
    meta: {},
  }
]
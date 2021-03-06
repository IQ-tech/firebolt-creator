import { IFireboltJSON } from '@/types/fireboltJSON';

const blankJSON: IFireboltJSON = {
	"name": "blankJSON",
	"$schema-version": "1.0.0",
	"$form-version": "0.0.1",
	"business": "Description JSON",
	"webhook": {
		"url": "{WEBHOOK_URL}",
		"headers": { "X-API-KEY": "secret" }
	},
	"tracks": [
		{
			"slug": "default",
			"steps": ["personal_data","personal_data_2"]
		}
	],
	"steps": [
		{
			"step": {
				"slug": "personal_data",
				"type": "form",
				"friendlyname": "Dados pessoais",
				"fields": [
					{
						"slug": "full_name",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Nome completo",
							"placeholder": "Digite seu nome"
						},
						"ui:styles": {
							"size": "half"
						},
						"validators": [{ "type": "required" }, { "type": "name" }],
						"meta": {}
					},
					{
						"slug": "email",
						"ui:widget": "Email",
						"ui:props": {
							"label": "Email",
							"placeholder": "contato@email.com"
						},
						"validators": [{ "type": "required" }, { "type": "email" }],
						"meta": {}
						},
				]
			}
		},
		{
			"step": {
				"slug": "personal_data_2",
				"type": "form",
				"friendlyname": "Dados pessoais 2",
				"fields": [
					{
						"slug": "full_name",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Nome completo",
							"placeholder": "Digite seu nome"
						},
						"validators": [{ "type": "required" }, { "type": "name" }],
						"meta": {}
					},
					{
						"slug": "email",
						"ui:widget": "Email",
						"ui:props": {
							"label": "Email",
							"placeholder": "contato@email.com"
						},
						"validators": [{ "type": "required" }, { "type": "email" }],
						"meta": {}
						},
				]
			}
		},
		{
			"step": {
				"slug": "personal_data_3",
				"type": "form",
				"friendlyname": "Dados pessoais 3",
				"fields": [
					{
						"slug": "full_name",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Nome completo",
							"placeholder": "Digite seu nome"
						},
						"validators": [{ "type": "required" }, { "type": "name" }],
						"meta": {}
					},
					{
						"slug": "email",
						"ui:widget": "Email",
						"ui:props": {
							"label": "Email",
							"placeholder": "contato@email.com"
						},
						"validators": [{ "type": "required" }, { "type": "email" }],
						"meta": {}
						},
				]
			}
		},
		{
			"step": {
				"slug": "personal_data_4",
				"type": "form",
				"friendlyname": "Dados pessoais 4",
				"fields": [
					{
						"slug": "full_name",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Nome completo",
							"placeholder": "Digite seu nome"
						},
						"validators": [{ "type": "required" }, { "type": "name" }],
						"meta": {}
					},
					{
						"slug": "email",
						"ui:widget": "Email",
						"ui:props": {
							"label": "Email",
							"placeholder": "contato@email.com"
						},
						"validators": [{ "type": "required" }, { "type": "email" }],
						"meta": {}
						},
				]
			}
		},
		{
			"step": {
				"slug": "personal_custom",
				"type": "custom",
				"friendlyname": "Dados Custom",
				"fields": [
					{
						"slug": "full_name",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Nome completo",
							"placeholder": "Digite seu nome"
						},
						"validators": [{ "type": "required" }, { "type": "name" }],
						"meta": {}
					},
					
				]
			}
		}
	]
}

export default blankJSON
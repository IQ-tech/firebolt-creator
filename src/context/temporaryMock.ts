export const temporaryMock = {
	"$schema-version": "1.0.0",
	"$form-version": "0.0.1",
	"business": "credit",
	"webhook": {
		"url": "{WEBHOOK_URL}",
		"headers": { "X-API-KEY": "secret" }
	},
	"tracks": [
		{
			"slug": "default",
			"steps": [
				"personal_data",
				"complementary_data",
				"credit_analisys",
				"address",
				"settings"
			]
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
		}
	]
}
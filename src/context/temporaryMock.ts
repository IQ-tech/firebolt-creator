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
						"slug": "cpf",
						"ui:widget": "Text",
						"ui:props-preset": "br-cpf",
						"ui:props": {},
						"validators": [{ "type": "required" }, { "type": "cpf" }],
						"meta": {}
					},
					{
						"slug": "email",
						"ui:widget": "Email",
						"ui:props": {
							"label": "E-mail",
							"placeholder": "Digite seu e-mail"
						},
						"validators": [{ "type": "required" }, { "type": "email" }],
						"meta": {}
					}
				]
			}
		},
		{
			"step": {
				"slug": "complementary_data",
				"type": "form",
				"friendlyname": "Dados complementares",
				"sharedata": true,
				"fields": [
					{
						"slug": "gender",
						"ui:widget": "Select",
						"ui:props": {
							"label": "Sexo",
							"options": [
								{
									"value": "male",
									"label": "Masculino"
								},
								{
									"value": "female",
									"label": "Feminino"
								}
							]
						},
						"validators": [{ "type": "required" }]
					},
					{
						"slug": "main_phone",
						"ui:widget": "Text",
						"ui:props-preset": "br-phone",
						"ui:props": {
							"label": "Celular com DDD"
						},
						"validators": [{ "type": "required" }, { "type": "phone" }],
						"meta": {}
					},
					{
						"slug": "home_phone",
						"ui:widget": "Text",
						"ui:props-preset": "br-phone-hybrid",
						"ui:props": {
							"label": "Telefone fixo"
						},
						"validators": [{ "type": "phone" }],
						"meta": {}
					},
					{
						"slug": "subscribe_to_email_marketing",
						"ui:widget": "Check",
						"ui:props": {
							"label": "Quero receber ofertas, descontos, lançamentos e informações."
						}
					}
				]
			}
		},
		{
			"step": {
				"slug": "credit_analisys",
				"type": "form",
				"friendlyname": "Análise de crédito",
				"fields": [
					{
						"slug": "monthly_income",
						"ui:widget": "Text",
						"ui:props-preset": "br-currency",
						"ui:props": {
							"label": "Renda mensal",
							"placeholder": "R$ 0,00"
						},
						"validators": [
							{ "type": "required" },
							{
								"type": "numberRange",
								"properties": {
									"thousandsSeparatorSymbol": ".",
									"minNumber": 1212,
									"underPermitedValueMessage": "O valor deve ser maior que R$ 1.212,00"
								}
							}
						],
						"meta": {}
					},
					{
						"slug": "brazil_id_number",
						"ui:widget": "Text",
						"ui:props": {
							"label": "RG",
							"placeholder": "Digite seu RG"
						},
						"validators": [
							{ "type": "required" },
							{ "type": "noSpecialCaracteres" }
						],
						"meta": {}
					},
					{
						"slug": "date_of_birth",
						"ui:widget": "Text",
						"ui:props-preset": "day-month-year",
						"ui:props": {
							"label": "Data de Nascimento",
							"placeholder": "Digite sua data de nascimento"
						},
						"validators": [{ "type": "required" }, { "type": "date" }],
						"meta": {}
					},
					{
						"slug": "mothers_name",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Nome da mãe completo",
							"placeholder": "Digite o nome da mãe"
						},
						"validators": [{ "type": "required" }, { "type": "name" }],
						"meta": {}
					},
					{
						"slug": "auth_search_data",
						"ui:widget": "Check",
						"ui:props": {
							"label": "Ao avançar autorizo o PAN a consultar os meus dados em órgãos de proteção ao crédito, bem como fornecer dados a essas entidades; e consultar e registrar dados relacionados aos débitos decorrentes de operações de crédito de minha responsabilidade no SCR - Sistema de Informações de Crédito do Banco Central do Brasil, para fins de supervisão do risco de crédito e intercâmbio de informações com outras instituições financeiras."
						},
						"validators": [{ "type": "requiredboolean" }]
					}
				]
			}
		},
		{
			"step": {
				"slug": "address",
				"type": "form",
				"friendlyname": "Endereço",
				"fields": [
					{
						"slug": "zipcode",
						"ui:widget": "CEP",
						"ui:props-preset": "br-cep",
						"ui:props": {
							"relatedFieldsSlugs": {
								"cityFieldSlug": "city",
								"stateFieldSlug": "state",
								"streetFieldSlug": "street_address",
								"additionalAddressFieldSlug": "additional_info",
								"neighborhoodFieldSlug": "neighborhood"
							}
						},
						"validators": [{ "type": "required" }, { "type": "cep" }]
					},
					{
						"slug": "state",
						"ui:widget": "Select",
						"ui:props-preset": "br-states",
						"ui:props": {
							"label": "Estado"
						},
						"validators": [{ "type": "required" }],
						"meta": {}
					},
					{
						"slug": "city",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Cidade",
							"readonly": true
						},
						"validators": [{ "type": "required" }, { "type": "nonNumeric" }],
						"meta": {}
					},
					{
						"slug": "street_address",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Endereço",
							"placeholder": "Ex.: Av Paulista",
							"readonly": true
						},
						"validators": [{ "type": "required" }]
					},
					{
						"slug": "street_number",
						"ui:widget": "Number",
						"ui:props": {
							"label": "Número"
						},
						"validators": [{ "type": "required" }],
						"meta": {}
					},
					{
						"slug": "additional_info",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Complemento",
							"placeholder": "Ex.: Apto 25 bl C"
						},
						"meta": {}
					},
					{
						"slug": "neighborhood",
						"ui:widget": "Text",
						"ui:props": {
							"label": "Bairro",
							"placeholder": "Ex.: Jardins",
							"readonly": true
						},
						"validators": [{ "type": "required" }],
						"meta": {}
					}
				]
			}
		},
		{
			"step": {
				"slug": "settings",
				"type": "form",
				"friendlyname": "Configurações",
				"fields": [
					{
						"slug": "invoice_duedate",
						"ui:widget": "Select",
						"ui:props": {
							"label": "Vencimento da fatura",
							"options": [
								{
									"value": 1,
									"label": 1
								},
								{
									"value": 2,
									"label": 2
								},
								{
									"value": 5,
									"label": 5
								},
								{
									"value": 6,
									"label": 6
								},
								{
									"value": 12,
									"label": 12
								},
								{
									"value": 13,
									"label": 13
								},
								{
									"value": 17,
									"label": 17
								},
								{
									"value": 22,
									"label": 22
								},
								{
									"value": 25,
									"label": 25
								},
								{
									"value": 28,
									"label": 28
								}
							]
						},
						"validators": [{ "type": "required" }],
						"meta": {}
					},
					{
						"slug": "emergencial_limit_check",
						"ui:widget": "CheckboxGroup",
						"ui:props": {
							"label": "Limite emergencial",
							"columns": 1,
							"options": [
								{
									"label": "Permite avaliação emergencial para aprovação de transações acima do limite."
								}
							]
						},
						"meta": {
							"tooltip_text": "Para a sua comodidade, o Banco PAN oferece o serviço de Avaliação Emergencial de Crédito. Com este serviço, caso você realize compras acima do limite definido do seu cartão, o Banco PAN irá avaliar a aprovação dessas compras. Somente haverá cobrança de tarifa no valor de R$18,90 no mês em que o serviço for utilizado. Caso você opte por não contratar o serviço, eventuais transações que ultrapassem o limite do seu cartão não serão analisadas e consequentemente recusadas."
						}
					},
					{
						"slug": "insurance_check",
						"ui:widget": "CheckboxGroup",
						"ui:props": {
							"label": "SEGURO PROTEÇÃO SUPER PREMIADO",
							"columns": 1,
							"options": [
								{
									"label": "Um seguro que deixa você tranquilo com o seu cartão e você ainda concorre sorteiros mensais. Por apenas R$14,50 ao mês."
								}
							]
						},
						"meta": {
							"tooltip_text": "Sorteio mensal no valor bruto de R$ 50.000,00 (cinquenta mil reais); Assistência Residencial Completa (Chaveiro/Encanador/Eletricista/Vidraceiro); Além de receber o valor da indenização em caso de: Morte Acidental no valor de R$ 4.000,00 (Quatro mil reais); Invalidez Permanente Total por Acidente: Indenização no valor de R$ 4.000,00 (quatro mil reais); A vigência do seguro inicia-se após o pagamento da fatura. Consulte as Condições Gerais e tenha mais informações do Produto: https://www.bancopan.com.br/bancopan-institucional/conteudo/produtos/cartao-de-credito/assets/pdf/condicoes-gerais-de-seguro.pdf. Prêmio mensal: R$ 14,50;"
						}
					},
					{
						"slug": "visually_impaired_check",
						"ui:widget": "CheckboxGroup",
						"ui:props": {
							"label": "Você é pessoa com Deficiência Visual?",
							"columns": 1,
							"options": [
								{
									"label": "Selecionando esta opção, você receberá o seu material adaptado."
								}
							]
						},
						"meta": {}
					},
					{
						"slug": "auth_card_type_by_profile_check",
						"ui:widget": "Check",
						"ui:props": {
							"label": "<span class='iq-field-base__required'>*</span>Autorizo o envio do tipo de cartão mais adequado ao meu perfil de renda (Internacional, Gold ou Platinum), caso o cartão inicialmente solicitado não seja compatível."
						},
						"validators": [{ "type": "requiredboolean" }]
					},
					{
						"slug": "agree_with_policy_check",
						"ui:widget": "Check",
						"ui:props": {
							"label": "<span class='iq-field-base__required'>*</span>Li e concordo com a <a href='https://www.bancopan.com.br/politica-de-privacidade/' class='banco-pan__link'>Política de Privacidade</a>"
						},
						"validators": [{ "type": "requiredboolean" }]
					}
				]
			}
		}
	]
}
export const JSONSchema : object = {
	"type": "object",
	"properties": {
		"$schema-version": { "type": "string" },
		"$form-version": { "type": "string" },
		"business": { "type": "string" },
		"webhook": {
			"type": "object",
			"properties": {
				"triggers": { "type": "array" },
				"url": { "type": "string" }
			}
		},
		"tracks": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"slug": { "type": "string" },
					"steps": { 
						"type": "array",
						"items": { "type": "string" }
					}
				} 
			}
		},
		"steps": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"step": { 
						"type": "object",
						"properties": {
							"id": { "type": "integer" },
							"slug": { "type": "string" },
							"type": { "type": "string" },
							"friendlyname": { "type": "string" },
							"fields": { 
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"slug": { "type": "string" },
										"ui:widget": { "type": "string" },
										"ui:props": { 
											"type": "object",
											"properties": {
												"label": { "type": "string" },
												"placeholder": { "type": "string" }
											}
										},
										"validators": { 
											"type": "array",
											"items": {
												"type": "object",
												"properties": {
													"type": { "type": "string" },
												}
											}
										},
										"meta": { "type": "object" }
									} 
								}
							},
						}
					}
				} 
			}
		}
	},
	"required": ["$schema-version", "category", "tracks", "steps"],
	"additionalProperties": false
}
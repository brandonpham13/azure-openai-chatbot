export const functionList = [
    {
        "type": "function",
        "function": {
            "name": "sumData",
            "description": "Sums the values of available licenses in the provided data.",
            "parameters": {
                "type": "object",
                "properties": {
                    "dataSource": {
                        "type": "object",
                        "description": "Data source containing available licenses, correlation information, and license data. This is optional and defaults to a mock data set.",
                    },
                },
                // "required": ["dataSource"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "getLastName",
            "description": "Gets the last name based on the provided first name.",
            "parameters": {
                "type": "object",
                "properties": {
                    "firstName": {
                        "type": "string",
                        "description": "First name.",
                    },
                },
                "required": ["firstName"]
            }
        }
    }
];
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
                        "description": "Data source containing available licenses, correlation information, and license data.",
                    },
                "required": ["dataSource"],
                }
            }
        }
    }
];
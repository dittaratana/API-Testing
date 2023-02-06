export const VALID_PARAMS = {
    "type": "object",
    "default": {},
    "required": [
        "firstname",
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates"
    ],
    "properties": {
        "firstname": {
            "type": "string",
            "default": ""
        },
        "lastname": {
            "type": "string",
            "default": ""
        },
        "totalprice": {
            "type": "integer",
            "default": 0
        },
        "depositpaid": {
            "type": "boolean",
            "default": false
        },
        "bookingdates": {
            "type": "object",
            "default": {},
            "required": [
                "checkin",
                "checkout"
            ],
            "properties": {
                "checkin": {
                    "type": "string",
                    "default": ""
                },
                "checkout": {
                    "type": "string",
                    "default": ""
                }
            }
        }
    }
}
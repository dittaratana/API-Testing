export const VALID_AUTH = {
    "type": "object",
    "default": {},
    "required": [
        "token"
    ],
    "properties": {
        "token": {
            "type": "string",
            "default": ""
        }
    }
}

export const INVALID_AUTH = {
    "type": "object",
    "default": {},
    "required": [
        "reason"
    ],
    "properties": {
        "reason": {
            "type": "string",
            "default": ""
        }
    }
}



export const VALID_PARAMS = {
    "type": "object",
    "default": {},
    "required": [
        "bookingid",
        "booking"
    ],
    "properties": {
        "bookingid": {
            "type": "integer",
            "default": 0
        },
        "booking": {
            "type": "object",
            "default": {},
            "required": [
                "firstname",
                "lastname",
                "totalprice",
                "depositpaid",
                "bookingdates",
                "additionalneeds"
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
                },
                "additionalneeds": {
                    "type": "string",
                    "default": ""
                }
            }
        }
    }
}

export const ValidParamsId = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
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
            "default": "",

        },
        "lastname": {
            "type": "string",
            "default": "",
           
        },
        "totalprice": {
            "type": "integer",
            "default": 0,
         
        },
        "depositpaid": {
            "type": "boolean",
            "default": false,
          
        },
        "bookingdates": {
            "type": "object",
            "default": {},
            "properties": {
                "checkin": {
                    "type": "string",
                    "default": "",
                },
                "checkout": {
                    "type": "string",
                    "default": "",
                }
            },
            "examples": [{
                "checkin": "2018-03-07",
                "checkout": "2021-06-03"
            }]
        }
    },
}

export const ValidFilterName = {
    "type": "array",
    "default": [],
}
export const validAuthentication = {
    "username" : "admin",
    "password" : "password123"
}

export const invalidAuthentication = {
    "username" : "siapa",
    "password" : "passwords"
}

export const InvalidAuthenticationEmptyUsername = {
    "username" : "",
    "password" : ["password123"]
}

export const InvalidAuthenticationEmptyPassword = {
    "username" : "admin",
    "password" : ""
}

export const InvalidEmpty = {
    "username" : "",
    "password" : ""
}

export const invalidResponse = {
    "reason" : "Bad credentials"
}


export const validToken = {
    "token" : "8b1b339a053fdf6"
}

export const CREATE_BOOKING = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
    }
    
export const FilterName = {
    "firstname" : "Jim",
    "lastname" : "Brown"
}
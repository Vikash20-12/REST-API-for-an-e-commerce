# REST-API-for-an-e-commerce

Auth API
# POST /api/auth/register
Register a user (accept username, password, type of user - buyer/seller and can add a catalog if user type is seller)
One can add as many number of items in catalog.
eg: {
    "username":"utsav",
    "password": "123",
    "usertype": "seller",
    "catalog": [{"itemname": "oil","itemprice":"100"},{"itemname":"cake", "itemprice":"150"}
    ]
}

# POST /api/auth/login
Let a previously registered user log in (e.g. retrieve authentication token) 
eg: {
    "username":"utsav",
    "password": "123"
}

# GET /api/buyer/list-of-sellers
To get a list of all sellers

output to this will look like:
 [
    "610d535db5a88206b4c02d62",
    "vikash"
]

# GET /api/buyer/seller-catalog/:seller_id
Get the catalog of a seller by seller_id

eg: /api/buyer/seller-catalog/610d535db5a88206b4c02d62

output to this will look like
[
    {
        "_id": "610d535db5a88206b4c02d63",
        "itemname": "oil",
        "itemprice": 100
    },
    {
        "_id": "610d535db5a88206b4c02d64",
        "itemname": "cake",
        "itemprice": 150
    }
]

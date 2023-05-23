const continents = [
    {
        "_id": 1,
        "name": "여성 상의"
    },
    {
        "_id": 2,
        "name": "여성 하의"
    },
    {
        "_id": 3,
        "name": "남성 상의"
    },
    {
        "_id": 4,
        "name": "남성 하의"
    },
    {
        "_id": 5,
        "name": " 여성 잡화"
    },
    {
        "_id": 6,
        "name": "남성 잡화"
    },
    {
        "_id": 7,
        "name": "기타"
    }
]

const prices = [
    {
        "_id": 0,
        "name": "모두",
        "array": []
    },
    {   
        "_id": 1,
        "name": "10,000원 미만",
        "array": [0, 9999]
    },
    {
        "_id": 2,
        "name": "30,000원 미만",
        "array": [10000, 29999]
    },
    {
        "name": "50,000원 미만",
        "array": [30000, 49999]
    },
    {
        "_id": 4,
        "name": "100,000원 미만",
        "array": [50000, 99999]
    },
    {
        "_id": 5,
        "name": "100,000원 이상",
        "array": [100000, 99000000]
    }
]

export {
    continents,
    prices
}

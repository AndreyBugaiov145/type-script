interface Person {
    name : string
    age : number
}

type PersonKeys = keyof Person // 'name' | 'age'

let Myname : PersonKeys = 'name'

Myname = 'age'
Myname = 'asdas' // --fail

type User = {
    _id: number
    name: string
    email: string
    created_at: Date
}

type UserFirst = Exclude<keyof User, '_id' | 'email'> // 'name ' , 'email'
type UserSecond = Pick< User, 'name' | 'created_at'> // 'name ' , 'created_at'

let uesrName :UserFirst = 'name'
uesrName = 'dsfds' // fail


let uesrName2 :UserSecond = 'name'

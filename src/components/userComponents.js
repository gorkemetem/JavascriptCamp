import UserService from "../services/userService.js"
import User from "../models/user.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"

console.log("User component loaded.")


let logger1 = new MongoLogger
let userService = new UserService(logger1)


let user1 = new User(1,"Etem","Irmak","Ankara")
let user2 = new User(2,"Etem2","Irmak2","2Ankara")

userService.add(user1)
userService.add(user2)


console.log(userService.list())
console.log(userService.getById(2))




userService.getById(1)






let customer = {id:1, firstName:"Etem"}

//prototyping
customer.lastName = "Irmak"

console.log(customer.lastName)
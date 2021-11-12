import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component Yüklendi");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Tunahan", "Berber", "Ankara");
let user2 = new User(2, "Engin", "Demiroğ", "Ankara");
userService.add(user1);
userService.add(user2);

console.log(userService.list());

console.log(userService.getById(1));

//prototyping : js de sonradan değer ekleyebilirsin

import User from "./user.js";

export default class Employee extends User {
  constructor(id, firsName, lastName, city, salary) {
    super(id, firsName, lastName, city);
    this.salary = salary;
  }
}

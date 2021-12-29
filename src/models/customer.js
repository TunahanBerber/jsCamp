import User from "./user.js";

export default class Customer extends User {
  constructor(id, firsName, lastName, city, creditCardNumber) {
    super(id, firsName, lastName, city);
    this.creditCardNumber = creditCardNumber;
  }
}

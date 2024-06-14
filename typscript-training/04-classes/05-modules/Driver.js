"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustormer = new Customer_1.Customer("Martin", "Dixom");
myCustormer.firstName = 'Antonio';
myCustormer.lastName = 'Sarmiento';
console.log(myCustormer.firstName);
console.log(myCustormer.lastName);

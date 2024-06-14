"use strict";
class Customer {
    constructor(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    get firstName() {
        return this._firstname;
    }
    set firstName(value) {
        this._firstname = value;
    }
    get lastName() {
        return this._lastname;
    }
    set lastName(value) {
        this._lastname = value;
    }
}
let myCustormer = new Customer("Martin", "Dixom");
myCustormer.firstName = 'Antonio';
myCustormer.lastName = 'Sarmiento';
console.log(myCustormer.firstName);
console.log(myCustormer.lastName);

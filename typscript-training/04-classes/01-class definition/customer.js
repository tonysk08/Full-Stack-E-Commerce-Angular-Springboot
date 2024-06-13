"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this.firstname = theFirst;
        this.lasttname = theLast;
    }
}
let myCustormer = new Customer("Martin", "Dixom");
console.log(myCustormer.firstname);
console.log(myCustormer.lasttname);

class Customer{
    firstname: string;
    lasttname: string;

    constructor(theFirst:string, theLast: string){
        this.firstname=theFirst;
        this.lasttname=theLast;
    }
}

let myCustormer = new Customer("Martin","Dixom");

console.log(myCustormer.firstname);
console.log(myCustormer.lasttname);
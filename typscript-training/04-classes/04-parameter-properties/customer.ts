class Customer{

    constructor(private _firstname: string, private _lastname: string){
    }

    public get firstName():string{
        return this._firstname;
    }

    public set firstName(value: string){
        this._firstname=value;
    }

    public get lastName():string{
        return this._lastname;
    }

    public set lastName(value: string){
        this._lastname=value;
    }
}

let myCustormer = new Customer("Martin","Dixom");

myCustormer.firstName = 'Antonio'
myCustormer.lastName = 'Sarmiento'

console.log(myCustormer.firstName);
console.log(myCustormer.lastName);
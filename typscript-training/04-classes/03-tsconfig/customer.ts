class Customer{
    private _firstname: string;
    private _lastname: string;

    constructor(theFirst:string, theLast: string){
        this._firstname=theFirst;
        this._lastname=theLast;
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

console.log(myCustormer.firstName);
console.log(myCustormer.lastName);
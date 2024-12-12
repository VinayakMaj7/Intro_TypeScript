const message: string = "Welcome Vinayak to typeScript"
console.log(message)

function add(a: number,b:number ): number{
        return a+b
}
 
 console.log(add(25,34));
 // below with show error
 //console.log(add("25",34));

// another way to implement type checking 
// Creating our own object

interface User{
    	id: number;
        name: string;
        email: string;
}

// create a function
 function sendEmail(user: User): void{
    	console.log(`Sending Email to ${user.email}`);
}

const user: User = {id: 1, name: "Robert Bay", email:"Robert.bay@outlook.com"};

sendEmail(user);

// creating a class
class person{
	private ssn: string;
	protected age: number;
	public name: string;

	constructor(name: string, age: number, ssn: string){
		this.name = name;
		this.age = age;
		this.ssn = ssn;
	}

	public getDetails(): string{
		return `${this.name} is ${this.age} years old`
	}
}

const p1 = new person("Robert Bay", 23, "12345")
console.log(p1.getDetails());

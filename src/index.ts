let age: number;
age = 10;
if(age < 50){
    age += 50
console.log(age);
}

// enum Size{ Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;

// console.log(mySize);

function sum(x:number, y:number):number{
    return x+y;
}

function calculateTax(income: number, taxYear = 2022) : number{
    if(taxYear < 2025)
        return income * 1.2;
    return income * 1.3;
}

console.log(calculateTax(10_000, 2025));
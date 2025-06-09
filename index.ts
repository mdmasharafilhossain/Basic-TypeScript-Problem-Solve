function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return input.toLowerCase()
    }else{
        return input.toUpperCase()
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
  const Filtered_By_Rating_Items: { title: string; rating: number }[] = []
  
    for(let i=0; i< items.length; i++){
        if(items[i].rating >=4){
            Filtered_By_Rating_Items.push(items[i])
        }
    }
    return Filtered_By_Rating_Items;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let concatenateArraysResult: T[] = []
 for(let i=0; i<arrays.length; i++){
        concatenateArraysResult = concatenateArraysResult.concat(arrays[i])
    }
return concatenateArraysResult;
}



class Vehicle {
    private make: string;
    private year: number;

    
    
    constructor(make: string, year: number) {
    this.make = make;
    
     this.year = year;

  }
 getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}


class Car extends Vehicle {
    private model: string;


    constructor(make: string, year: number, model: string){
        super(make,year);
        this.model = model;
    }
    getModel(): string {
        return `Model: ${this.model} `
    }
}


function processValue(value: string | number): number{
    if (typeof value === 'string'){
        return value.length
    }else{
        return value*2
    }
}


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
if(products.length === null){
    return null;
}

let Most_Expensive_Product = products[0]


for(let i=0; i<products.length; i++){
    if(products[i].price > Most_Expensive_Product.price){
        Most_Expensive_Product = products[i]
    }
}

return Most_Expensive_Product
}




enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
if(day === Day.Sunday){
    return "Weekend"
}
else {
    return "Weekday"
}
}




async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        if(n<0){
            reject(new Error("Negetive Number Are Not Allowed...Try With Positive Value")) 
            return;
        }else{
            setTimeout(()=>{
                resolve(n*n)
            },1000)
        }
 
    })
}

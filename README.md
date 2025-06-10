## 1. What is type inference in TypeScript? Why is it helpful?

### **Type Inference in TypeScript: Make code smarter and safer!**

Those who work with JavaScript are well aware that it is a dynamically typed language. This means that when declaring a variable in JavaScript, the type (like number, string) does not need to be specified. The type is determined at runtime by the JavaScript program.
Although the code can be written much faster, the possibility of bugs increases, and it takes a lot of time to find them.

The solution to this problem is TypeScript, a superset of JavaScript. TypeScript offers static typing, which means that type errors are caught at compile time. However, one of the great features of TypeScript is type inference.

**What is type inference ?**

In simple terms, type inference is the ability of the TypeScript compiler to automatically infer the type of a variable, function parameter, or function return type without explicitly stating the type. That is, when a value is assigned to a variable, TypeScript automatically determines the type of the variable based on that value.

Example: 

{

// The type is not explicitly specified here, but TypeScript itself knows that 'message' is a string.


let message = "Hi , Mashrafil";

// Similarly, TypeScript assumes that 'count' is a number.

let count = 120;

// and 'isActive' is a boolean.

let isActive = true;

}

**Why type inference is helpful?**

**1. Less code to write:** If you explicitly write each variable, function parameter, or return type separately, the code will become much longer and more complex. Type interface solves this problem.

**2. Improved constructability:** Sometimes it happens that the type is clearly understood, but if we declare the type again separately, that makes the code more complex. It is also difficult to understand. Type interface solves this problem and keeps the code clean.

**3. Fewer errors are caught:** Sometimes, we do not clearly understand what the type will be. In this case, the typescript compiler guesses the type and checks the type, and in this case, there are fewer errors.

**4. Flexible Adoption:**
Those who are new to typescript can slowly and accurately get used to typescript by using the type interface


In conclusion, type inference is what makes TypeScript a strong and easy-to-use language. It gives developers the security of type safety while still letting them write code that is as fast and flexible as JavaScript. You can make your code stronger, easier to maintain, and free of bugs with TypeScript.






## 2. What is the use of the keyof keyword in TypeScript? Provide an example.?

### Using the keyof keyword in TypeScript: Make your code smarter and safer!

A special part of JavaScript is type safety, by using it we can represent our code more strongly. Through this, errors are also reduced. The key of keyword is a special feature of TypeScript. It's a small but very effective tool that can make your code more dynamic and type-safe.


**What is keyof  keyword ?**

The method of converting a type or interface into a Union type by taking the names of all the properties. Its main goal is to ensure type safety during dynamic property access. If we want to access a property of an object by using its name directly, rather than accessing it through a variable, then key of ensures that that variable is a valid property name of the object.

Example: 

{

// 1. Create a small interface.

interface UserProfile 
{

name: string;

age: number;

}

// 2. Create a union type of all the property names of UserProfile using 'keyof'.

// Here the type of UserProfileKeys will be: 'name' or 'age'

type UserProfile_Keys = keyof UserProfile;

// 3. Now we can create a variable of type UserProfileKeys.

let key1: UserProfileKeys = "name"; // OK, because "name" is a valid property.

let key2: UserProfileKeys = "age"; // OK, because "age" is a valid property.

// 4. Wrong example: If we try to use an invalid property name.

// let key3: UserProfileKeys = "email"; // Error: "email" does not belong to this type.

//Because "email" is not a property of the UserProfile interface.

console.log(key1); // Output: name

console.log(key2); // Output: age

}

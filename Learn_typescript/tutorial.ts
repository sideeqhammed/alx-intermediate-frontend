// const concat = function (a: string, b: string): string {
//   return (a + b)
// };
// console.log(concat("Hello", "World"))
// console.log(concat("10", "5"))

// interface User {
//   name: string,
//   id: number,
//   age: number
//   greet(message: string): void
// }
  

// let user= {
//   name: "username",
//   id: 100,
//   age: 50,
//   greet(message: string) {
//     console.log(message)
//   }
// }

// user.age = 30
// user.greet("Hello")

// type idType = string | number

// interface User {
//   name: string,
//   id : idType,
//   age: number
// }

// let user: User= {
//   name: "username",
//   id: 100,
//   age: 50
// }

// interface Staff {
//   dept: string;
//   number: number
// }

// type userEmp = User & Staff;

// let userEmployee = (employee: userEmp): void => {
//   console.log(employee.name + " is an employee with a number of " + employee.number + " and also a user" )
// }

// userEmployee ({name: "user1", id: 101, age: 40,})

// type idType = string | number;

// interface User {
//   name: string,
//   id : idType,
//   age: number
// };

// interface Staff {
//   dept: string;
//   number: number
// };

// type userEmp = User & Staff;

// let userEmployee = (employee: userEmp): void => {
//   console.log(employee.name + " is an employee with a number of " + employee.number + " and also a user" )
// }

// userEmployee (.name, )

// enum loginError {
//   unauthorized = "unauthorized",
//   nouser = "nouser",
//   incorrect = "incorrect"
// }

// let login = (credentials: loginError): void => {
//   if (credentials == "unauthorized") console.log("unauthorized access")
// }

// login(loginError.unauthorized)

// class person {
//   name: string;
//   age: number;

//   constructor (name: string, age: number){
//     this.name = name
//     this.age = age
//   }
//   greet() {
//   console.log(`Hello, my name is ${this.name}, my age is ${this.age}`)
//   }
// }
// const john = new person ("john", 35)
// john.greet();


// interface User {
//   name: string,
//   id : number,
//   age: number
// };

// function deleteAge (user: User){
//   delete user.age
//   console.log(user)
// }
// deleteAge({
//   name: "user1",
//   id : 100,
//   age: 54
// })

// interface Point {
//   x: number;
//   y: number;
// }
 
// function logPoint(p: Point) {
//   console.log(`${p.x}, ${p.y}`);
// }
 
// // logs "12, 26"
// const point: Point = { x: 12, y: 26 };
// logPoint(point);

// class VirtualPoint {
//   x: number;
//   y: number;
 
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
 
// const newVPoint = new VirtualPoint(13, 56);
// logPoint(newVPoint);

type numbers = Array<number>

let countNumbers: numbers = [1, "apple",  ]

// type idType = string | number

// interface User {
//   name: string,
//   id : idType,
//   age: number
// }

// interface Staff {
//   dept: string;
//   number: number
// }

// type userEmp = User & Staff;

// function userEmployee(employee: User): void {
//   console.log(employee.name + " is an employee with a number of " + employee.number + " and also a user" )
// }

// userEmployee ({name: "user1", id: 101, age: 40,})

// type point = {
//     x: number,
//     y: string
// }

// function getCoord(pt: point): void {
//     console.log (`The coordinate is ${pt.x} on x-axis and ${pt.y} on y-axis`)
// }

// getCoord({x: 5, y: 7, z: 10})

// const a = 10 as number 
// const a = 10 as string 

// let x: "hello" = "hello";
// // OK
// x = "hello";
// // ...
// x = "howdy";

// function printText(s: string, alignment: "left" | "right" | "center") {
//   // ...
// }
// printText("Hello, world", "left");
// printText("G'day, mate", "centre");

// declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
// // const req = { url: "https://example.com", method: "GET" as "GET" };
// // handleRequest(req.url, req.method as "GET");

// const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);
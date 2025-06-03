"use strict";
// const concat = function (a: string, b: string): string {
//   return (a + b)
// };
// console.log(concat("Hello", "World"))
// console.log(concat("10", "5"))
let user = {
    name: "username",
    id: 100,
    age: 50
};
let userEmployee = (employee) => {
    console.log(employee.name + " is an employee with a number of " + employee.number + " and also a user");
};
userEmployee({ name: "user1, " });

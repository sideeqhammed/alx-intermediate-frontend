interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak?(): string;
  workDirectorTasks?(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{
  workFromHome() {
    return("Working from home")
  };
  getToWork() {
    return("Getting a coffee break")
  };
  workDirectorTasks() {
    return("Getting to director tasks")
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return("Cannot work from home")
  };
  getCoffeeBreak() {
    return("Cannot have a break")
  };
  workTeacherTasks() {
    return("Getting to work")
  };
}

let createEmployee = (salary: number | string) => {
  if (typeof(salary) == "number" && salary < 500)
    return new(Teacher);
  else return new(Director);
}

console.log(createEmployee(200));

// const isDirector = (employee) => {
//   if (employee )
// }

let executeWork = (employee) => {
  if (employee == Teacher)
}
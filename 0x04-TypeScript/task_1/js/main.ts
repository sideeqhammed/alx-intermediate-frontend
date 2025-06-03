interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  contract: boolean,
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number
}

// function printTeacher (teacherName: Teacher) {
//   console.log(`${teacherName.firstName[0]}. ${teacherName.lastName}`)
// }
// printTeacher({firstName: "Paul", lastName: "Julius"})

function printTeacher (firstName: string, lastName: string) {
  console.log(`${firstName[0]}. ${lastName}`)
}
printTeacher("Paul", "Julius")

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface ConstructorInterface {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClassInterface {
  firstName;
  lastName;
  constructor ({firstName, lastName}: ConstructorInterface) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return(`Currently working`)
  }
  displayName() {
    return(`${this.firstName}`)
  }
}


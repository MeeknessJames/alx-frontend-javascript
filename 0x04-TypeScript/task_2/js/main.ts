// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Testing
const employee1 = createEmployee(200);
console.log(employee1.constructor.name);
if (employee1 instanceof Teacher) {
  console.log(employee1.workTeacherTasks());
}

const employee2 = createEmployee(1000);
console.log(employee2.constructor.name);
if (employee2 instanceof Director) {
  console.log(employee2.workDirectorTasks());
}

const employee3 = createEmployee('$500');
console.log(employee3.constructor.name);
if (employee3 instanceof Director) {
  console.log(employee3.workDirectorTasks());
}

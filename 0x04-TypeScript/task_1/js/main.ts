// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Only one teacher3 object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. Printing teachers

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function that implements the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// task_1/js/main.ts
// (Keep all existing interfaces, functions, and example usage from Tasks 1, 2, and 3 above this)

// --- Task 4: Writing a class ---

/**
 * Interface describing the shape of a StudentClass instance.
 * It defines the methods that any object created from StudentClass must have.
 */
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Interface describing the constructor of the StudentClass.
 * It specifies that the constructor takes a firstName and lastName (both strings)
 * and returns an object that conforms to StudentClassInterface.
 */
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Implements the StudentClassInterface.
 * This class represents a student with basic information and actions.
 */
class StudentClass implements StudentClassInterface {
  // Properties of the student
  firstName: string;
  lastName: string;

  /**
   * Constructor for the StudentClass.
   * Initializes a new student instance.
   * @param firstName The first name of the student.
   * @param lastName The last name of the student.
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Method indicating the student is working on homework.
   * @returns The string "Currently working".
   */
  workOnHomework(): string {
    return "Currently working";
  }

  /**
   * Method to display the student's first name.
   * @returns The first name of the student.
   */
  displayName(): string {
    return this.firstName;
  }
}

// --- Example Usage for StudentClass ---

// Create an instance of StudentClass
const studentInstance: StudentClass = new StudentClass("Alice", "Smith");

console.log("\n--- StudentClass Examples (Task 4) ---");
console.log("Student's first name:", studentInstance.displayName()); // Expected: Alice
console.log("Student's homework status:", studentInstance.workOnHomework()); // Expected: Currently working
// task_1/js/main.ts

// --- Task 1: Let's build a Teacher interface ---

/**
 * Interface for a Teacher.
 * Defines the structure a Teacher object must adhere to.
 */
interface Teacher {
  // firstName and lastName should only be modifiable when a Teacher is first initialized
  readonly firstName: string;
  readonly lastName: string;

  // This attribute should always be defined
  fullTimeEmployee: boolean;

  // This attribute is optional
  yearsOfExperience?: number;

  // This attribute should always be defined
  location: string;

  // Add the possibility to add any attribute to the Object like contract(boolean)
  // without specifying the name of the attribute (Index Signature)
  [propName: string]: any;
}

// Example Teacher object adhering to the interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // This is an additional property allowed by the index signature
};

console.log("--- Task 1 Example: Teacher ---");
console.log(teacher3);

// --- Task 2: Extending the Teacher interface ---

/**
 * Interface for Directors, which extends the Teacher interface.
 * Directors inherit all properties from Teacher and add 'numberOfReports'.
 */
interface Directors extends Teacher {
  numberOfReports: number; // A new, required attribute for Directors
}

// Example director object adhering to the Directors interface.
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true, // Inherited from Teacher
  numberOfReports: 17,    // Specific to Directors
};

console.log("\n--- Task 2 Example: Director ---");
console.log(director1);

// --- Task 3: Printing teachers ---

/**
 * Interface for the printTeacher function.
 * Defines the signature for a function that takes a first name and last name
 * and returns a formatted string.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implements the printTeacherFunction interface.
 * Returns the first letter of the firstName followed by a dot, a space, and the full lastName.
 * @param firstName The first name of the teacher.
 * @param lastName The last name of the teacher.
 * @returns A formatted string like "J. Doe".
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example Usage for printTeacher function
console.log("\n--- Task 3 Examples: printTeacher Function ---");
console.log('printTeacher("John", "Doe"):', printTeacher("John", "Doe")); // Expected: J. Doe
console.log('printTeacher("Alice", "Wonderland"):', printTeacher("Alice", "Wonderland")); // Expected: A. Wonderland
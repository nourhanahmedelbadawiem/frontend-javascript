// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Index signature for additional properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// StudentClassConstructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// StudentClassInterface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

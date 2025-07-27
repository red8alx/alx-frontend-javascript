    // js/main.ts (located in task_1/js/)

    /**
     * @interface Teacher
     * Defines the structure for a teacher object.
     * This interface is necessary here as it's being extended by Directors.
     *
     * Properties:
     * - firstName (string): Teacher's first name. Readonly.
     * - lastName (string): Teacher's last name. Readonly.
     * - fullTimeEmployee (boolean): Indicates if the teacher is a full-time employee. Required.
     * - yearsOfExperience (number, optional): Number of years of teaching experience. Optional.
     * - location (string): Teacher's location. Required.
     * - [key: string]: any: Allows for additional arbitrary properties.
     */
    interface Teacher {
      readonly firstName: string;
      readonly lastName: string;
      fullTimeEmployee: boolean;
      yearsOfExperience?: number;
      location: string;
      [key: string]: any; // Index signature for arbitrary properties
    }

    /**
     * @interface Directors
     * Extends the Teacher interface, adding a specific property for a Director.
     *
     * Properties inherited from Teacher:
     * - firstName (string)
     * - lastName (string)
     * - fullTimeEmployee (boolean)
     * - yearsOfExperience (number, optional)
     * - location (string)
     * - [key: string]: any (for arbitrary properties)
     *
     * New property:
     * - numberOfReports (number): The number of reports a director has. Required.
     */
    interface Directors extends Teacher {
      numberOfReports: number;
    }

    // Create a director object as per the example
    const director1: Directors = {
      firstName: 'John',
      lastName: 'Doe',
      location: 'London',
      fullTimeEmployee: true,
      numberOfReports: 17,
    };

    // Log the director object to the console
    console.log(director1);

    // Example of another director for demonstration
    const director2: Directors = {
      firstName: 'Jane',
      lastName: 'Smith',
      location: 'New York',
      fullTimeEmployee: false,
      yearsOfExperience: 8,
      numberOfReports: 10,
      department: 'Engineering'
    };

    console.log(director2);

    /**
     * @interface printTeacherFunction
     * Defines the signature for the printTeacher function.
     *
     * @param firstName (string): The first name of the teacher.
     * @param lastName (string): The last name of the teacher.
     * @returns (string): The formatted name (e.g., "J. Doe").
     */
    interface printTeacherFunction {
      (firstName: string, lastName: string): string;
    }

    /**
     * @function printTeacher
     * Returns the first letter of the firstName and the full lastName,
     * formatted as "F. LastName".
     *
     * @param firstName (string): The first name of the teacher.
     * @param lastName (string): The last name of the teacher.
     * @returns (string): The formatted name.
     */
    const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
      return `${firstName.charAt(0)}. ${lastName}`;
    };

    // Example usage of printTeacher function
    console.log(printTeacher("John", "Doe")); // Expected: J. Doe
    console.log(printTeacher("Alice", "Wonderland")); // Expected: A. Wonderland


    /**
     * @interface StudentConstructor
     * Defines the shape of the constructor for the StudentClass.
     * It specifies that the constructor takes firstName and lastName strings
     * and returns an instance of StudentClass.
     */
    interface StudentConstructor {
      new (firstName: string, lastName: string): StudentClass;
    }

    /**
     * @interface StudentClassInterface
     * Defines the methods and properties that an instance of StudentClass should have.
     */
    interface StudentClassInterface {
      firstName: string; // Property to store the first name
      lastName: string;  // Property to store the last name
      workOnHomework(): string;
      displayName(): string;
    }

    /**
     * @class StudentClass
     * Implements the StudentClassInterface.
     * Represents a student with methods for homework and displaying their name.
     */
    class StudentClass implements StudentClassInterface {
      firstName: string;
      lastName: string;

      /**
       * Creates an instance of StudentClass.
       * @param firstName The first name of the student.
       * @param lastName The last name of the student.
       */
      constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
      }

      /**
       * Returns a string indicating the student is working on homework.
       * @returns The string "Currently working".
       */
      workOnHomework(): string {
        return "Currently working";
      }

      /**
       * Returns the first name of the student.
       * @returns The student's first name.
       */
      displayName(): string {
        return this.firstName;
      }
    }

    // Example usage of StudentClass
    const studentInstance: StudentClass = new StudentClass("Alice", "Smith");

    console.log("\n--- StudentClass Examples ---");
    console.log(`Student Name: ${studentInstance.displayName()}`); // Expected: Alice
    console.log(`Homework Status: ${studentInstance.workOnHomework()}`); // Expected: Currently working

    const anotherStudent: StudentClass = new StudentClass("Bob", "Johnson");
    console.log(`Another Student Name: ${anotherStudent.displayName()}`); // Expected: Bob
    
// --- Task 6: Advanced types Part 1 ---

    /**
     * @interface DirectorInterface
     * Defines the methods expected for a Director.
     */
    interface DirectorInterface {
      workFromHome(): string;
      getCoffeeBreak(): string;
      workDirectorTasks(): string;
    }

    /**
     * @interface TeacherInterface
     * Defines the methods expected for a Teacher.
     */
    interface TeacherInterface {
      workFromHome(): string;
      getCoffeeBreak(): string;
      workTeacherTasks(): string;
    }

    /**
     * @class Director
     * Implements the DirectorInterface.
     */
    class Director implements DirectorInterface {
      /**
       * Returns a string indicating working from home.
       * @returns The string "Working from home".
       */
      workFromHome(): string {
        return "Working from home";
      }

      /**
       * Returns a string indicating getting a coffee break.
       * @returns The string "Getting a coffee break".
       */
      getCoffeeBreak(): string {
        return "Getting a coffee break";
      }

      /**
       * Returns a string indicating getting to director tasks.
       * @returns The string "Getting to director tasks".
       */
      workDirectorTasks(): string {
        return "Getting to director tasks";
      }
    }

    /**
     * @class Teacher
     * Implements the TeacherInterface.
     */
    class Teacher implements TeacherInterface {
      /**
       * Returns a string indicating inability to work from home.
       * @returns The string "Cannot work from home".
       */
      workFromHome(): string {
        return "Cannot work from home";
      }

      /**
       * Returns a string indicating inability to have a break.
       * @returns The string "Cannot have a break".
       */
      getCoffeeBreak(): string {
        return "Cannot have a break";
      }

      /**
       * Returns a string indicating getting to work.
       * @returns The string "Getting to work".
       */
      workTeacherTasks(): string {
        return "Getting to work";
      }
    }

    /**
     * @function createEmployee
     * Creates and returns an instance of either Director or Teacher based on salary.
     *
     * @param salary The employee's salary (number or string).
     * @returns A new instance of Director or Teacher.
     */
    function createEmployee(salary: number | string): Director | Teacher {
      // Convert salary to number if it's a string
      const numericSalary = typeof salary === 'string' ? parseFloat(salary) : salary;

      if (numericSalary < 500) {
        return new Teacher();
      } else {
        return new Director();
      }
    }

    // Expected results:
    console.log("--- Task 6 Examples ---");
    console.log("Salary 200:", createEmployee(200)); // Expected: Teacher
    console.log("Salary 1000:", createEmployee(1000)); // Expected: Director
    console.log("Salary '$500':", createEmployee('$500')); // Expected: Director
    console.log("Salary 499:", createEmployee(499)); // Expected: Teacher
    console.log("Salary 500:", createEmployee(500)); // Expected: Director (since it's not < 500)
    
    // --- Task 7: Creating functions specific to employees ---

/**
 * @function isDirector
 * Type predicate to check if an employee is a Director.
 *
 * @param employee The employee instance (Director or Teacher).
 * @returns true if the employee is a Director, false otherwise.
 */
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

/**
 * @function executeWork
 * Executes the appropriate work task based on the employee's type.
 *
 * @param employee The employee instance (Director or Teacher).
 */
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Expected results for Task 7:
console.log("\n--- Task 7 Examples ---");
console.log("Employee with salary 200:");
executeWork(createEmployee(200)); // Expected: Getting to work (Teacher)

console.log("Employee with salary 1000:");
executeWork(createEmployee(1000)); // Expected: Getting to director tasks (Director)

// --- Task 8: String literal types ---

/**
 * @type Subjects
 * A string literal type that restricts values to 'Math' or 'History'.
 */
type Subjects = 'Math' | 'History';

/**
 * @function teachClass
 * Returns a string indicating which class is being taught based on the input.
 *
 * @param todayClass The subject being taught ('Math' or 'History').
 * @returns A string like "Teaching Math" or "Teaching History".
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This part is technically unreachable due to the `Subjects` type,
  // but good practice for exhaustive checks or if type assertion is used.
  return `Unknown class: ${todayClass}`;
}

// Expected results for Task 8:
console.log("\n--- Task 8 Examples ---");
console.log("Class: Math -", teachClass('Math'));    // Expected: Teaching Math
console.log("Class: History -", teachClass('History')); // Expected: Teaching History

// Example of how TypeScript would prevent invalid assignments:
// teachClass('Physics'); // This would cause a TypeScript error:
                         // Argument of type '"Physics"' is not assignable to parameter of type '"Math" | "History"'.

// js/main.ts

/**
 * @interface Student
 * Defines the structure for a student object.
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array containing the two student variables
const studentsList: Student[] = [student1, student2];

/**
 * Renders a table displaying student information.
 * Each row contains the first name and location of a student.
 */
const renderTable = (students: Student[]): void => {
  // Create table element
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  // Create header row
  const headerRow = document.createElement("tr");
  const thFirstName = document.createElement("th");
  thFirstName.textContent = "First Name";
  const thLocation = document.createElement("th");
  thLocation.textContent = "Location";
  headerRow.appendChild(thFirstName);
  headerRow.appendChild(thLocation);
  tbody.appendChild(headerRow);

  // Append a new row for each student
  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table); // Append the table to the body of the HTML
};

// Call the renderTable function with the studentsList
document.addEventListener("DOMContentLoaded", () => {
  renderTable(studentsList);
});
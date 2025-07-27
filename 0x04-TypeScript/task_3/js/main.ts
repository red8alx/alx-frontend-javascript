    // js/main.ts (located in task_3/js/)

    // Triple slash directive to include the ambient declaration file
    /// <reference path="./crud.d.ts" />

    // Import types from interface.ts
    import { RowID, RowElement } from './interface';

    // Import everything from crud.js as CRUD
    import * as CRUD from './crud';

    // Create an object called row with the type RowElement
    const row: RowElement = {
      firstName: "Guillaume",
      lastName: "Salva",
    };

    // Create a const variable named newRowID and assign the value the insertRow command
    const newRowID: RowID = CRUD.insertRow(row);

    // Create a const variable named updatedRow with the type RowElement
    // and update row with an age field set to 23
    const updatedRow: RowElement = { ...row, age: 23 }; // Use spread operator for immutability

    // Finally, call the updateRow and deleteRow commands
    CRUD.updateRow(newRowID, updatedRow);
    CRUD.deleteRow(newRowID);

    console.log("\n--- Task 9 Examples ---");
    console.log("Check console output for CRUD operations above.");
    console.log("The newRowID generated was:", newRowID);
    
    // js/interface.ts

    /**
     * @type RowID
     * A type alias for a number, representing a row identifier.
     */
    export type RowID = number;

    /**
     * @interface RowElement
     * Defines the structure for a row element in a database.
     *
     * Properties:
     * - firstName (string): The first name.
     * - lastName (string): The last name.
     * - age (number, optional): The age. Optional.
     */
    export interface RowElement {
      firstName: string;
      lastName: string;
      age?: number; // Optional property
    }
    
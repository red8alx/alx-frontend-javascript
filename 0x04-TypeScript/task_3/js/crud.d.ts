// js/crud.d.ts

// Import types from interface.ts - Ensure .ts extension here too
import { RowID, RowElement } from './interface.ts';

// Directly declare the functions that are exported from crud.js
// No 'declare module' wrapper is needed for local file exports.
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

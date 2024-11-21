# Adding ARIA Roles to a Table

Adds or re-adds ARIA roles to an HTML table and its child elements.
Intended to re-add the ARIA to a table that has been made responsive by CSS.

For simple tables without header cells or only row header cells no actions are
required but for more complex tables with header cells that are rowheaders,
colgroups or rowgroups the appropriate roles are required on the header cells.
See the section below for the appropriate roles.

## ARIA Roles

The roles that are added to each type of table element (ELEMENT: role) are:
- TABLE: table
- THEAD, TFOOT, TBODY: rowgroup
- TR: row
- TD: cell
- TH (with scope "col" OR without scope): columnheader
- TH (with scope "row"): rowheader
- TH (with scope "colgroup"): columngroupheader
- TH (with scope "rowgroup"): rowgroupheader

Note:  
The table header cell elements (TH) may not contain the scope "auto" as no ARIA
role can be inferred from this scope.

## Usage

```js
import { addAriaToAllTables, addAriaToTable }
from "./node_modules/add-aria-to-table/index.js";

// Adding ARIA to every html table.
addAriaToAllTables();

// Adding ARIA to a specific html table (may not be null).
const table = document.querySelector("table");
if (table !== null) {
  addAriaToTable(table);
}

// Alternatively the addAriaToTable() function can also be used to
// add ARIA to every HTML table.
document.querySelectorAll("table").forEach(table => addAriaToTable(table));
```

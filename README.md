# Adding ARIA Roles to a Table

Adds or re-adds ARIA roles to an HTML table and its child elements.
Intended to re-add the ARIA to a table that has been made responsive by CSS.

## ARIA Roles

The roles that are added to each type of table element (ELEMENT role) are:
- TABLE table
- THEAD, TFOOT, TBODY rowgroup
- TR row
- TD cell
- TH (with scope "col" OR without scope) columnheader
- TH (with scope "row") rowheader
- TH (with scope "colgroup") columngroupheader
- TH (with scope "rowgroup") rowgroupheader

Note:  
The table header cell elements (TH) may not contain the scope "auto" as no ARIA
role can be inferred from this scope.

## Functions

The function addAriaToAllTables() can be used to add the previously mentioned
roles to every HTML table in a document (default export) and the function
addAriaToTable(table) can be used to add the ARIA roles to the specified HTML
table. Important: addAriaToTable(table) argument must be a HTML table and may
not be null.

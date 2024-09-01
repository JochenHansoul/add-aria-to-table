Functions to re-add the ARIA to a table that has been made responsive by CSS.

The exact roles (ELEMENT role) are:
TABLE table
THEAD, TFOOT, TBODY rowgroup
TR row
TD cell
TH (with scope "col") columnheader
TH (with scope "row") rowheader
TH (with scope "colgroup") columngroupheader
TH (with scope "rowgroup") rowgroupheader
TH (without scope) columnheader.

The function addAriaToAllTables can be used to add all these roles to every
HTML table (default export) and the function addAriaToTable can be used to add
the roles to a single table. Important: addAriaToTable argument must be a HTML
table and may not be null.

To add ARIA roles to every HTML table run the function addAriaToAllTables().
To add ARIA to a single HTML table use addAriaToTable(table). Input must be an
HTML table and may not be null.

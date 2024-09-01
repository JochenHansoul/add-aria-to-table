// Mapping the scope of the TH elements with their corresponding ARIA roles
const thRoles = Object.freeze(new Map([
  ["col", "columnheader"],
  ["row", "rowheader"],
  ["colgroup", "columngroupheader"],
  ["rowgroup", "rowgroupheader"],
  ["", "columnheader"]
]));

export const addAriaToTable = function (table) {
  table.setAttribute("role", "table");
  table.tHead?.setAttribute("role", "rowgroup");
  table.tFoot?.setAttribute("role", "rowgroup");
  Array.from(table.tBodies)
    .forEach(tBodie => tBodie.setAttribute("role", "rowgroup"));
  Array.from(table.rows).forEach(function (row) {
    row.setAttribute("role", "row");
    Array.from(row.cells).forEach(function (cell) {
      cell.setAttribute("role", (cell.nodeName === "TD") ? "cell" : thRoles.get(cell.scope))
    });
  });
};

export default const addAriaToAllTables = function () {
  document.querySelectorAll("table").forEach(table => addAriaToTable(table));
};

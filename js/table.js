//Sorting the table

function sortTable(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tableBody = table.tBodies[0];
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    //sort each row
    const sortedRTows = rows.sort((a,b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier)
    })

    // remove all existing TRs from the table

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild)
    }


    // re-add the newly sorted rows
    tableBody.append(...sortedRTows);

    // remember how the column is currently sorted

    table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sort-asc', asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sort-desc', !asc);



}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentAscending = headerCell.classList.contains("th-sort-asc");

        sortTable(tableElement, headerIndex, !currentAscending)
    })
})


// Filtering table

const searchByYear = document.getElementById('searchInput');
const table = document.getElementById('table-body')

searchByYear.addEventListener('keyup', (e) => {    
    let filter = searchByYear.value.toUpperCase();
      rows = table.getElementsByTagName("TR");
      let flag = false;
      for (let row of rows) {
        let cells = row.getElementsByTagName("TD");
        for (let cell of cells) {
          if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
            flag = true;
            break;
          }
        }
    
        if (flag) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
    
        flag = false;
      }
    })




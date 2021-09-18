// MODAL VARIABLES

const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close2 = document.querySelector('.submit-btn');


// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));
close2.addEventListener('click', () => modal.classList.remove('show-modal') )

// Hide modal on outside click
window.addEventListener('click', e =>
e.target == modal ? modal.classList.remove('show-modal') : false
);



// Adding, deleting rows in table

const form = document.getElementById('form');
const wholeTable= document.querySelector('table');

function addElementToTable(e) {
e.preventDefault();
const carBrand = document.getElementById('carBrand').value;
const carModel = document.getElementById('carModel').value;
const production = document.getElementById('production').value;
table.innerHTML += `
    <tr>
        <td>${carBrand}</td>
        <td>${carModel}</td>
        <td>${production}</td>
        <td><button class="deleteBtn btn btn-secondary">Delete</button></td>
    </tr>
`;

}

function onDeleteRow(e) {
if (!e.target.classList.contains('deleteBtn')) {
    return;
}

const btn = e.target;
btn.closest('tr').remove();

}

form.addEventListener('submit', addElementToTable)
wholeTable.addEventListener('click', onDeleteRow)


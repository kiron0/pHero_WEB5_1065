let count = 0;

document.getElementById('add-btn').addEventListener('click', function () {
  count = count + 1;
  const inputValue = document.getElementById('input-value').value;

  if (inputValue == "") {
    alert('Please enter a value');
  }
  else {
    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `<th scope="col">${count}</th>
    <th scope="col">${inputValue}</th>
    <td><button class="delete-btn btn btn-danger">Delete</button>
    <button class="done-btn btn btn-success">Done</button></td>`;
    mainContainer.appendChild(tableContainer);
    document.getElementById('input-value').value = '';

    const deleteButton = document.getElementsByClassName('delete-btn');
    const doneButton = document.getElementsByClassName('done-btn');

    for (const button of deleteButton) {
      button.addEventListener('click', function (e) {
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.style.display = "none";
      })
    }
    for (const button of doneButton) {
      button.addEventListener('click', function (e) {
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      })
    }
  }
});
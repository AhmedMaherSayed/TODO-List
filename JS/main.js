let taskNameInput = document.getElementById('taskName');
let taskDateInput = document.getElementById('taskDate');
let taskStartingTimeInput = document.getElementById('taskStartingTime');
let taskEndingTimeInput = document.getElementById('taskEndingTime');


let listsContainer = [];

function addItem() 
{
    if(taskNameInput.value === '')
    {
        taskNameInput.value = 'No task';
    }
    let items = {
        task: taskNameInput.value,
        date: taskDateInput.value,
        startingTime: taskStartingTimeInput.value,
        endingTime: taskEndingTimeInput.value
       
    }
    listsContainer.push(items);
    console.table(listsContainer);
    clearForm();
    displayData();
}

function clearForm()
{
     taskNameInput.value = '';
    taskDateInput.value = '';
    taskStartingTimeInput.value = '';
    taskEndingTimeInput.value = '';
    
}
function displayData()
{
    let lists = '';
    for(let i = 0; i < listsContainer.length; i++)
    {
        lists += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${listsContainer[i].task}</td>
        <td>${listsContainer[i].date}</td>
        <td>${listsContainer[i].startingTime}</td>
        <td>${listsContainer[i].endingTime}</td>
      </tr>`

    }
    document.getElementById('tableBody').innerHTML = lists;
}
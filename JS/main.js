let taskNameInput = document.getElementById('taskName');
let taskDateInput = document.getElementById('taskDate');
let taskStartingTimeInput = document.getElementById('taskStartingTime');
let taskEndingTimeInput = document.getElementById('taskEndingTime');

let listsContainer = [];

if(localStorage.getItem('TO-DO') != null)
{
    listsContainer = JSON.parse(localStorage.getItem('TO-DO'));
    displayData(listsContainer);
}
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
    localStorage.setItem('TO-DO' , JSON.stringify(listsContainer));
    displayData(listsContainer);
}

function clearForm()
{
     taskNameInput.value = '';
    taskDateInput.value = '';
    taskStartingTimeInput.value = '';
    taskEndingTimeInput.value = '';
    
}
function displayData(arr)
{
    let lists = '';
    for(let i = 0; i < arr.length; i++)
    {
        lists += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${arr[i].task}</td>
        <td>${arr[i].date}</td>
        <td>${arr[i].startingTime}</td>
        <td>${arr[i].endingTime}</td>
        <td><button onclick="deleteTask(${i});" class="btn btn-outline-info">Done</button></td>
      </tr>`

    }
    document.getElementById('tableBody').innerHTML = lists;
};
function deleteTask(index)
{
    listsContainer.splice(index , 1);
    localStorage.setItem('TO-DO' , JSON.stringify(listsContainer));
    displayData(listsContainer);
}

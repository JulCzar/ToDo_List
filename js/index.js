// Function that save the input from user
const saveToDo = ev => {
    // prevent the page from reloading at submit
    ev.preventDefault()

    // create an object containing the data of the ToDo the users typed
    const newToDo = {
        id: get.Date(),
        title: title.value,
        desc: desc.value,
        status: false,
    }

    saveDataToLocalStorage()
    
    addToDoToScreen()

    get.Id('form').reset()
    //End of saveToDo()

    function saveDataToLocalStorage() {
        let localList = get.Local('localToDoList')

        localList.push(newToDo)

        set.Local('localToDoList', localList)
    }

    function addToDoToScreen() {
        const newToDoHtml = createNewToDo(newToDo)

        get.Id('to-dos').insertAdjacentHTML('beforeend', newToDoHtml)
    }
}

//create an HTML element stringified containing the data of the ToDo to be loaded in page
function createNewToDo(data) {
    return (
        `<div class="to-do" id='${data.id}'>
            <div class="to-do-content">
                <i onclick='checkElement("${data.id}")' class="material-icons">${data.status?'check_circle_outline':'radio_button_unchecked'}</i>
                <div class="to-do-info">
                    <h2 class="to-do-title">${data.title}</h2>
                    <h5 class="to-do-desc">${data.desc}</h5>
                </div>
            </div>
            <div class="to-do-actions">
                <i onclick='editElement("${data.id}")' class="material-icons">edit</i>
                <i class="material-icons">clear</i>
            </div>
        </div>`
    )
}

//Loaded once function that restore the To Do List in page from the Data Saved in Local Storage
;(async function () {
    const ToDoList = get.Local('localToDoList')
    || [{id: get.Date() - 500, title: 'Be Healthy', desc: 'Practice exercises', status: false,}]
    
    if (ToDoList) {
        for (const toDo of ToDoList) {
            const toDoHTML = createNewToDo(toDo)

            get.Id('to-dos')
                .insertAdjacentHTML('beforeend', toDoHTML)
        }

        set.Local('localToDoList', ToDoList)
    }
})()

// Listen function that observes submits and load saveToDo() function
listen('submit', saveToDo)
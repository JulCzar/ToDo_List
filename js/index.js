var isEditing = false;
var status = false;

// Function that save the input from user
const saveToDo = ev => {
    // prevent the page from reloading at submit
    ev.preventDefault()
    isEditing = false

    // create an object containing the data of the ToDo the users typed
    const newToDo = {
        id: get.Date(),
        title: title.value,
        desc: desc.value,
        status: JSON.parse(status)
    }

    status = false

    saveDataToLocalStorage()
    
    addToDoToScreen()

    get.Id('form').reset()
    //End of saveToDo()

    function saveDataToLocalStorage() {
        let localList = get.Local('localToDoList') || []

        localList.push(newToDo)

        set.Local('localToDoList', localList)
    }

    function addToDoToScreen() {
        const newToDoHtml = createNewToDo(newToDo)

        get.Id('to-dos').insertAdjacentHTML('beforeend', newToDoHtml)
    }
}

//create an HTML element stringified containing the data of the ToDo to be loaded in page
const createNewToDo = ({ id, status, title, desc }) => {
    return (
        `<div draggable="true" class="to-do" id='${id}'>
            <div onclick='checkElement("${id}")' class="to-do-content">
                <i class="material-icons">${status?'check_circle_outline':'radio_button_unchecked'}</i>
                <div class="to-do-info">
                    <h2 class="to-do-title">${title}</h2>
                    <h5 class="to-do-desc">${desc}</h5>
                </div>
            </div>
            <div class="to-do-actions">
                <i onclick='editElement("${id}")' class="material-icons">edit</i>
                <i onclick='deleteElement("${id}")' class="material-icons">clear</i>
            </div>
        </div>`
    )
}

const changeTheme = () => {
    if (get.Local('theme') != 'dark') {
        set.Local('theme', 'dark')
        get.Id('page-body').classList.remove('light')
        get.Id('page-body').classList.add('dark')
    }else {
        set.Local('theme', 'light')
        get.Id('page-body').classList.remove('dark')
        get.Id('page-body').classList.add('light')
    }
}

//Loaded once function that restore the To Do List in page from the Data Saved in Local Storage
;(function () {
    const ToDoList = get.Local('localToDoList')
    || [{id: get.Date(), title: 'Be Healthy', desc: 'Practice exercises', status: false,}]
    
    if (get.Local('theme') == 'dark') {
        get.Id('page-body').classList.remove('light')
        get.Id('page-body').classList.add('dark')
    }

    if (ToDoList) {
        for (const toDo of ToDoList) {
            const toDoHTML = createNewToDo(toDo)

            get.Id('to-dos')
                .insertAdjacentHTML('beforeend', toDoHTML)
        }

        set.Local('localToDoList', ToDoList)
    }

    window.onbeforeunload = function() {
        if (this.isEditing)
            return confirm()
    }
})()

// Listen function that observes submits and load saveToDo() function
listen('submit', saveToDo)

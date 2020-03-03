const checkElement = id => {
    const LocalToDoList = get.Local('localToDoList')
    const ToDosOnScreen = get.Queries('.to-do')

    for (const toDo of LocalToDoList) {
        if (toDo.id == id) toDo.status = !toDo.status
    }

    for (const toDo of ToDosOnScreen) {
        del.element(toDo)
    }
    
    for (const toDo of LocalToDoList) {
        addToDoToScreen(toDo)
    }

    set.Local('localToDoList', LocalToDoList)

    function addToDoToScreen(toDo) {
        const newToDoHtml = createNewToDo(toDo)

        get.Id('to-dos').insertAdjacentHTML('beforeend', newToDoHtml)
    }
}
const deleteElement = id => {
    const LocalToDoList = get.Local('localToDoList')
    const ToDosOnScreen = get.Queries('.to-do')

    LocalToDoList.forEach((toDo, i) => {
        if (toDo.id == id) {
            LocalToDoList.splice(i, 1)
        }
    })

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
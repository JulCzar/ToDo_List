const editElement = id => {
    let LocalToDoList = get.Local('localToDoList')
    const ToDosOnScreen = get.Queries('.to-do')

    for (const index in LocalToDoList) {
        if (toDo[index].id == id) {
            get.Id('title').value = toDo[index].title
            get.Id('desc').value = toDo[index].desc
            del.fromArray(index)
        }
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
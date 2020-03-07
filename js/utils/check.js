const checkElement = identifier => {
    const LocalToDoList = get.Local('localToDoList')
    const ToDosOnScreen = get.Queries('.to-do')

    for (const toDo of LocalToDoList) {
        if (toDo.id == identifier)
            toDo.status = !toDo.status
    }

    ToDosOnScreen.forEach(del.element)
    LocalToDoList.forEach(addToDoToScreen)

    set.Local('localToDoList', LocalToDoList)

    function addToDoToScreen(toDo) {
        const newToDoHtml = createNewToDo(toDo)

        get.Id('to-dos').insertAdjacentHTML('beforeend', newToDoHtml)
    }
}
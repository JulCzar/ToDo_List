const deleteElement = identifier => {
    const LocalToDoList = get.Local('localToDoList')
    const ToDosOnScreen = get.Queries('.to-do')

    LocalToDoList.forEach(findWhoDelete)
    ToDosOnScreen.forEach(del.element)
    LocalToDoList.forEach(addToDoToScreen)

    set.Local('localToDoList', LocalToDoList)

    function addToDoToScreen(toDo) {
        const newToDoHtml = createNewToDo(toDo)

        get.Id('to-dos').insertAdjacentHTML('beforeend', newToDoHtml)
    }
    function findWhoDelete({ id }, i) {
        if (id== identifier) {
            LocalToDoList.splice(i, 1)
        }
    }
}
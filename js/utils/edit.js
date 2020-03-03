const editElement = id => {
    const LocalToDoList = get.Local('localToDoList')
    const ToDosOnScreen = get.Queries('.to-do')
    
    if(isEditing){
        alert('There is already an editing in progress!')
        return
    }else isEditing = true
    LocalToDoList.forEach((toDo, i) => {
        if (toDo.id == id) {
            get.Id('title').value = toDo.title
            get.Id('desc').value = toDo.desc
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
var dragged;
var id;
var index;
var indexDrop;
var list;

const setDraggedItem = ({ target }) => {
    dragged = target;
    id = target.id;
    list = target.parentNode.children;

    for(let i in list) {
        if(list[i] === dragged)
            index = i;
    }
}

const placeDraggedItem = ({ target }) => {
    if(target.id !== id && target.className == "to-do") {
        
        for(let i in list) {
            if (list[i] === target) indexDrop = i;
        }

        changeRowsNUpdateList()

        function changeRowsNUpdateList() {
            const localToDoList = get.Local('localToDoList')
            const ToDosOnScreen = get.Queries('.to-do')

            const temp = localToDoList[indexDrop]
            localToDoList[indexDrop] = localToDoList[index]
            localToDoList[index] = temp
            
            set.Local('localToDoList', localToDoList)

            ToDosOnScreen.forEach(del.element)
            localToDoList.forEach( toDo => {
                const newToDoHtml = createNewToDo(toDo)
        
                get.Id('to-dos').insertAdjacentHTML('beforeend', newToDoHtml)
            })
        }
    }
    else if (target.id !== id) placeDraggedItem( { target: target.parentNode })
}

listen("dragstart", setDraggedItem)
listen("drop", placeDraggedItem)
listen("dragover", e => {
    e.preventDefault()
})

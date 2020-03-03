listen('submit', saveToDo)

function principal() {
    //Finds in Local Storage an Old List Data, if exists
    checkLocalList()
    //End of principal()

    function checkLocalList () {
        const localList = get.Local('localToDoList')

        // if (localList) mountList()


    }
}

function saveToDo(event) {
    event.preventDefault()

    saveDataToLocalStorage()

    loadDataInPage()

    get.Id('formulary').reset()
    //End of saveToDo()

    function saveDataToLocalStorage() {
        let localList = get.Local('localToDoList') || []

        localList.push({
            title: title.value,
            desc: desc.value,
        })

        set.Local('localToDoList', localList)
    }
}

const loadDataInPage = () => {
    // mountList()
}

;(principal)()
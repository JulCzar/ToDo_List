const editElement = identifier => {
  const LocalToDoList = get.Local('localToDoList')

  if(isEditing){
    alert('There is already an editing in progress!')
    return
  }
  isEditing = true

  LocalToDoList.forEach(findWhoEdit)
  deleteElement(identifier)

  function findWhoEdit ({ id, title, desc, status }) {
    if (id == identifier) {
      get.Id('title').value = title
      get.Id('desc').value = desc
      this.status = status
    }
  }
}
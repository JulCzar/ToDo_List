(function(){
    document.addEventListener("submit", enviar)
})()

function enviar(event) {
    event.preventDefault()    
    const form = document.getElementById("formulario")
    const tabela = document.getElementById("tabela")
    title = form.title.value
    description = form.description.value
    if (title == "" || description == "") return alert("Todos os campos são obrigatórios")
    tabela.insertAdjacentHTML('beforebegin', `
    <tr>
        <td class="titulo">${title}</td>
        <td class="descricao">${description}</td>
        <td onclick="deleteRow(this)"><i style="color: red" class="material-icons">delete_forever</i></td>
        <td onclick="editRow(this)"><i style="color: blue" class="material-icons">edit</i></td>
        <td><input type="checkbox"></td>
    </tr>`)
    form.reset()
}

function deleteRow(line){
    line.parentElement.remove()
}

function editRow(line){
    let row = line.parentElement
    document.getElementById('title').value = row.getElementsByClassName("titulo")[0].textContent
    document.getElementById('description').value = row.getElementsByClassName("descricao")[0].textContent
    deleteRow(line)
    // dado2 = line.parentElement.cells[1].innerHTML
    // line.parentElement.cells[0] = `<input onclick="salvaEdicao" value="${dado1}">`
}
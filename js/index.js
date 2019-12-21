listen("submit", enviar);

function carregarListaSalva() {
    let array = get.itensFrom.Local("ToDo") || []
    array.foreach(elem => tabela.insertAdjacentHTML = elem)
}

function enviar(event) {
    event.preventDefault()
    if (!title.value || !description.value) return alert("Todos os campos são obrigatórios")
    else {
        if (get.Id("noToDo")) get.Id("noToDo").style.display;
        tabela.insertAdjacentHTML('beforebegin', createRow(title, description))
        form.reset()
    }
}

function createRow(title, desc) {
    return `
    <tr class="linha">
        <td class="titulo">${title.value}</td>
        <td class="descricao">${desc.value}</td>
        <td onclick="deleteRow(this)"><a href="javascript:void(0)"><i style="color: red" class="material-icons">delete_forever</i></a></td>
        <td onclick="editRow(this)"><a href="javascript:void(0)"><i style="color: blue" class="material-icons">edit</i></a></td>
        <td><a href="javascript:void(0)"><i onclick="changeState(false, this)" style="color: black" class="material-icons status">check_box_outline_blank</i></a></td>
    </tr>`
}

let deleteRow = line => line.parentElement.remove();
function editRow(line) {
    let row = line.parentElement
    get.Id('title').value = row.querySelector(".titulo").textContent
    get.Id('description').value = row.querySelector(".descricao").textContent
    deleteRow(line)
}

function changeState(condicao, elem) {
    elem.attributes[0].nodeValue = `changeState(${condicao?false:true}, this)`;
    elem.innerHTML = condicao?"check_box_outline_blank":"check_box";
}
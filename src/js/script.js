function criarCard (pessoa) {
    const ul = document.querySelector(".container")
    const li = document.createElement("li")
    const img = document.createElement("img")
    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    li.classList.add("card")
    img.src = pessoa.urlImage
    img.alt = pessoa.nome
    h2.innerText = pessoa.nome
    h3.innerText = pessoa.idade
    p.innerText = pessoa.bio

    li.append(img, h2, h3, p)

    return ul.append(li)
}

function listarPessoas (listaDePessoas) {
    listaDePessoas.forEach(pessoa => {
        return criarCard(pessoa)
    })
}
listarPessoas(pessoas)
//Inicializando pegando a id do botão Incorporar
//e executando a função principal quando o usuário clicá-lo.

let starting = document.getElementById("btn");
starting.addEventListener("click", cardBehavior);


function cardBehavior() {

    let dataCriacao = document.getElementById("dataCriacao");
    let dataLimite = document.getElementById("dataLimite");
    let descricao = document.getElementById("descricao");

    let placingCard = document.getElementById("cardInsert");

    //Validações

    if (dataCriacao.value > dataLimite.value) {
        alert("Data de criação não pode ser superior a data limite!")
        return false;
    }

    if (dataCriacao.value == "") {
        alert("Falta preencher a data de criação!")
        return false;
    }

    if (dataLimite.value == "") {
        alert("Falta preencher a data limite!")
        return false;
    }

    if (dataLimite.value < dataCriacao.value) {
        alert("Data limite não pode ser inferior a de criação!")
        return false;
    }

    descricao.value = descricao.value.trim();
    if (descricao.value.length < 10) {
        alert("Caracteres insuficientes!");
        return false;

    }

    //Inserindo cards

    placingCard.innerHTML += `
    <section class="card">
    <div class="paragraph">
    <p class="description">${descricao.value}</p>
    </div>
    <label for="data">${"Data de criação: " + dataCriacao.value}</label>
    <label for="data">${"Data limite: " + dataLimite.value}</label>
    <input id="check" type="checkbox" name="checkbox">Já realizou 👆 a tarefa?</input>
    <button class="removeBtn">&times</button>
    </section>`;

    //Tachando tarefas

    function strikeThrough() {
        const checkB = document.querySelectorAll("input[type=checkbox]");
        const pStriked = document.querySelectorAll(".description");

        for (let i = 0; i < checkB.length; i++) {
            checkB[i].addEventListener('change', (event) => {
                if (event.currentTarget.checked)
                    pStriked[i].style.textDecoration = "line-through";
                else
                    pStriked[i].style.textDecoration = "none"
            })
        }
    }

    strikeThrough();


    dataCriacao.value = "";
    dataLimite.value = "";
    descricao.value = "";

    //Removendo cards

    function cardRemoval() {
        let removeButton = document.querySelectorAll('.removeBtn');
        let card = document.querySelectorAll('.card');

        for (let i = 0; i < card.length; i++) {
            removeButton[i].addEventListener('click', () => {
                let validateConfirm = window.confirm("Gostaria mesmo de remover?")
                if (!validateConfirm)
                    return null
                else
                    card[i].remove();
            });
        };
    }

    cardRemoval();
};



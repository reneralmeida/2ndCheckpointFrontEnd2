//Criando campos dinamicamente

document.body.innerHTML += `<h1>JSON Card</h1>
                            <div class="div1">
                            <input class='input1' id='url1' (type=text, placeholder='Place your JSON URL')></input>
                            </div>
                            <div class="div2">
                            <button class='button1' onclick='fetching()' id='btn'>Click Me</button>
                            </div>`;

document.getElementById("url1").value = "https://jsonplaceholder.typicode.com/todos/";

//Criando função principal

function fetching() {

    input1 = document.getElementById("url1").value

    let cardSection = document.querySelector('.card');

    //Usando fetch assíncrono para processar o json no card

    fetch(input1)
        .then(t => t.json())
        .then(t => {
            for (campo in t) {
                if (t[campo].completed) {
                    cardSection.insertAdjacentHTML('beforeend',
                        `<div class=iframe-container>
                        <p>${Object.keys(t[campo])[0]}: ${t[campo].userId}</p>
                        <p><strong>${Object.keys(t[campo])[1]}: ${t[campo].id}</strong></p>
                        <p><s>${Object.keys(t[campo])[2]}: ${t[campo].title}</s></p>
                        <p>${Object.keys(t[campo])[3]}: ${t[campo].completed}</p>
                        </div>`
                    )
                } else {
                    cardSection.insertAdjacentHTML('beforeend',
                        `<div class=iframe-container>
                        <p>${Object.keys(t[campo])[0]}: ${t[campo].userId}</p>
                        <p><strong>${Object.keys(t[campo])[1]}: ${t[campo].id}</strong></p>
                        <p><strong>${Object.keys(t[campo])[2]}: ${t[campo].title}</strong></p>
                        <p>${Object.keys(t[campo])[3]}: ${t[campo].completed}</p>
                        </div>`
                    )
                }
            }
        })

}
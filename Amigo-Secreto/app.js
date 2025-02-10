let amigos = [];

function adicionarAmigo(){ 
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    if (nome === '') {
        alert('Por favor insira um nome.');
        return;
    }
    if(amigos.includes(nome)){
        alert('Você já inseriu esse nome!');
        input.value = '';
        return;
    }
    amigos.push(nome);
    console.log(amigos);
    input.value = '';

    atualizarLista();
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigos) => {
        let li = document.createElement('li');
        li.textContent = amigos;
        lista.appendChild(li);
    })
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert('Adicione 2 amigos para sortear.');
        return;
    }
        let sorteio = [];
        let copiaAmigos = [...amigos];

        amigos.forEach((amigos) => {
            let indice;
            do{
                indice = Math.floor(Math.random() * copiaAmigos.length);
            } while (copiaAmigos[indice] === amigos);

            sorteio.push({ amigos, sorteado: copiaAmigos[indice]});
            copiaAmigos.splice(indice,1);
        });
    exibirResultado(sorteio);
}

function exibirResultado(sorteio){
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    sorteio.forEach((par) => {
        let li = document.createElement('li');
        li.textContent = `${par.amigos} => ${par.sorteado}`;
        listaResultado.appendChild(li);
    });
}



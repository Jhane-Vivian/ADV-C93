function entrar(){
    //Variável que armazena o valor da input
    var nome = document.getElementById("nomeUsu").value;
    //Armazenando um valor no dispositivo com a chave "nome"
    localStorage.setItem("nome", nome);
    //Redirecionando a tela para a tela salas
    window.location="salas.html";
}
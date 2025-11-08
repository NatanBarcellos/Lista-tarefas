function adicionarTarefa() {

      //recebe valor do unput do usuário
      const inputtarefa = document.getElementById("inputtarefa")
      let tarefa = inputtarefa.value.trim()

      const mensagem = document.getElementById("mensagem").textContent

      // se o valor de input for vazio então mostre uma mensagem de erro
      if (tarefa == "") {
            // Mostre uma mensagem de erro
            let mensagemErro = "Digite uma tarefa para adicionar na sua lista!"
            mensagem = mensagemErro;

      } else {
            //mensagem de tarefa adicionada com sucesso
            let mensagemSucesso = "Tarefa adicionada com sucesso!";
            mensagem = mensagemSucesso;
      
      // cria novo item (li) e insere na (lista ul)
      const listatarefas = document.getElementById("listatarefas")
      let = novatarefa = document.createElement("li")
      novatarefa.textContent = tarefa
      listatarefas.appendChild(novatarefa)
      }
      

      //limpa o input do usuário
      inputtarefa.value = ""


      
}
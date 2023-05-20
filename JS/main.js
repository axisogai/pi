function enviarBanco(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          // POST bem-sucedido
          console.log('POST realizado com sucesso!');
          console.log(request.responseText);
      
          // Redirecionar para uma nova página
        } else {
          // Tratamento de erros
          console.error('Ocorreu um erro durante o POST.');
        }
      };
      
      request.send(JSON.stringify(body));
}

/*
function realizarPost(url, novoRecurso) {
  
    // Fazer a solicitação POST para criar o novo recurso
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(novoRecurso),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      var novoRecursoId = data.id; // ID gerado para o novo recurso
  
      // Redirecionar para a próxima janela com o ID como parâmetro de URL
      window.open('matricula/index.html' + novoRecursoId, '_blank');
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
  }
*/
function cadastrarUsuario() {
    url = "localhost:8080/alunos/cadastrar"
    
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let cpf = document.getElementById("cpf").value;
    let rg = document.getElementById("rg").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let nascimento = document.getElementById("nascimento").value;
    let nacionalidade= document.getElementById("nacionalidade").value;
    let curso = document.querySelector('input[name=curso]:checked').value;

    body = {
            "nome": nome,
            "sobreNome": sobrenome,
            "cpf": cpf,
            "rg": rg,
            "telefone": telefone,
            "email": email,
            "dataNascimento": nascimento,
            "nacionalidade": nacionalidade,
            "matrícula": "",
            "codPagamento": "",
            "curso": curso,
            "pagamento": ""
          }  
    enviarBanco(url, body);
}


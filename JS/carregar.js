
window.addEventListener('load', function() {
    // Função a ser executada quando a janela é aberta e todos os recursos são carregados
    console.log('Janela aberta e recursos carregados!');
    dados = carregarDados();
    data = JSON.parse(dados);
    let telaNome = document.getElementById('nome');
    let telaSobreNome = document.getElementById('sobrenome');
    let telaCpf = document.getElementById('cpf');
    let telaRg = document.getElementById('rg');
    let telaTelefone = document.getElementById('telefone');
    let telaEmail = document.getElementById('email');
    let telaNascimento = document.getElementById('nascimento');
    let telaNacionalidade = document.getElementById('nacionalidade');

    telaNome.value = data.nome;
    telaSobreNome.value = data.sobreNome;
    telaRg.value = data.rg;
    telaTelefone.value = data.telefone;
    telaEmail.value = data.email;
    telaNascimento.value = data.dataNascimento;
    telaNacionalidade.value = data.nacionalidade;


    console.log(data);
  });

function carregarDados(){
    let request = new XMLHttpRequest()
    url = "http://localhost:8080/alunos/1";
    request.open("GET", url, false)
    request.send()
    return request.responseText
    
}
/*
fetch("localhost:8080/alunos/1")
  .then(response => response.json())
  .then(data => {
    // Atribua o valor obtido ao input
    let telaNome = document.getElementById('nome');
    let telaSobreNome = document.getElementById('sobrenome');
    let telaCpf = document.getElementById('cpf');
    let telaRg = document.getElementById('rg');
    let telaTelefone = document.getElementById('telefone');
    let telaEmail = document.getElementById('email');
    let telaNascimento = document.getElementById('nascimento');
    let telaNacionalidade = document.getElementById('nacionalidade');
    let telaEndereco = document.getElementById('endereco');
    let telaNumero = document.getElementById('numero');
    let telaBairro = document.getElementById('bairro');
    let telaCep = document.getElementById('cep');
    let telaCidade = document.getElementById('cidade');
    let telaUf = document.getElementById('uf');

    telaNome.value = data.nome;
    telaSobreNome.value = data.sobreNome;
    telaRg.value = data.rg;
    telaTelefone.value = data.telefone;
    telaEmail.value = data.email;
    telaNascimento.value = data.dataNascimento;
    telaNacionalidade.value = data.nacionalidade;
    telaEndereco.value = data.endereco;
    telaNumero.value = data.numero;
    telaBairro.value = data.bairro;
    telaCep.value = data.cep;
    telaCidade.value = data.cidade;
    telaUf.value = data.uf;

  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
  */
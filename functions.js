// Campo de CEP
var cepInput = document.getElementById("cep");

// Botão Buscar
var searchButton = document.getElementById("search");

// Caixa de Endereço
var conteudo = document.getElementById("conteudo");

function handleSearchClick() {
  // Próximos passos:
  /**
   * 1- Consultar a base do BrasilAPI informando o CEP digitado
   * 2 - Colocar o CEP e o endereço informado na caixa endereço   *
   */
  fetch(`https://brasilapi.com.br/api/cep/v2/${cepInput.value}`)
    .then((response) => { response.json() })
    .then((endereco) => {
      conteudo.innerHTML = `${endereco.street}, ${endereco.neighborhood} <br/> ${endereco.city}, ${endereco.state}`;
      cepInput.value = "";
    })
    .catch(() => alert("ERROU"));
}

searchButton.addEventListener("click", handleSearchClick);

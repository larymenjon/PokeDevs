document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os elementos da lista de pokedevs e os cartões
  const pokedevList = document.querySelectorAll(".pokedev");
  const pokedevCards = document.querySelectorAll(".cartao-pokedev");
  const radioList = document.getElementById("radio-list");

  // Função para buscar rádios
  const fetchRadios = async () => {
    const response = await fetch(
      "https://de1.api.radio-browser.info/json/stations"
    );
    const radios = await response.json();

    // Limpa a lista antes de adicionar novas rádios
    radioList.innerHTML = "";

    // Adiciona rádios à lista
    radios.forEach((radio) => {
      const listItem = document.createElement("li");
      listItem.textContent = radio.name;
      listItem.addEventListener("click", () => {
        window.open(radio.url, "_blank"); // Abre a rádio em uma nova aba
      });
      radioList.appendChild(listItem);
    });
  };

  // Chama a função para buscar rádios
  fetchRadios();

  pokedevList.forEach((pokedev) => {
    pokedev.addEventListener("click", () => {
      // Remove a classe "aberto" de todos os cartões
      pokedevCards.forEach((card) => {
        card.classList.remove("aberto");
      });

      // Remove a classe "ativo" de todos os pokedevs da lista
      pokedevList.forEach((pokedev) => {
        pokedev.classList.remove("ativo");
      });

      // Adiciona a classe "aberto" ao cartão correspondente
      const pokemonId = pokedev.id;
      const cardToOpen = document.getElementById(`cartao-${pokemonId}`);
      cardToOpen.classList.add("aberto");

      // Adiciona a classe "ativo" ao pokedev clicado
      pokedev.classList.add("ativo");
    });
  });
});

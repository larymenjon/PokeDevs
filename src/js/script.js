document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os elementos da lista de pokedevs e os cartões
  const pokedevList = document.querySelectorAll(".pokedev");
  const pokedevCards = document.querySelectorAll(".cartao-pokedev");

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

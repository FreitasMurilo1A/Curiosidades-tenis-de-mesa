function mostrarCuriosidade() {
  const descricao = document.getElementById("descricao");

  // Altera o texto da introdução
  descricao.textContent = "💡 Curiosidade: a bola de tênis de mesa pesa só 2,7g, mas pode atingir mais de 100 km/h!";
  
  // Muda o fundo suavemente
  document.body.style.backgroundColor = "#dceefb";
  
  // Dá destaque temporário ao texto
  descricao.style.transition = "all 0.5s";
  descricao.style.color = "#002d5a";
  descricao.style.fontWeight = "bold";
}
